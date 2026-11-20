import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';
import { m, AnimatePresence, useReducedMotion } from 'motion/react';
import type Lenis from 'lenis';
import { profile } from '@/data/portfolio';

let lenis: Lenis | null = null;

/** Scroll to a section by id, through Lenis when smooth scrolling is on. */
export function scrollToId(id: string) {
  if (id === 'top') {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0 });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -64 });
  else el.scrollIntoView();
}

/** Pause page scrolling while a modal is open. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    lenis?.stop();
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = prev;
    };
  }, [locked]);
}

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'products', label: 'Products' },
  { id: 'creative', label: 'Creative' },
  { id: 'skills', label: 'Skills' },
  { id: 'life', label: 'Life' },
];

export type Mode = 'analyst' | 'artist';
const MODE_KEY = 'mr-mode';

/** The saved mode (also applied to <html> by the inline script in index.html before first paint). */
function readMode(): Mode {
  try {
    return localStorage.getItem(MODE_KEY) === 'artist' ? 'artist' : 'analyst';
  } catch {
    return 'analyst';
  }
}

type ViewTransitionDoc = Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };

type SiteState = {
  /** True when the page is ink on paper (Artist mode); used for nav and guide colours. */
  light: boolean;
  mode: Mode;
  /** Switch mode; `from` is the point the colour wipe grows out of (the toggle). */
  switchMode: (next: Mode, from?: { x: number; y: number }) => void;
  active: string;
  toast: (msg: string) => void;
  copyEmail: () => void;
  downloadCv: () => void;
  paletteOpen: boolean;
  setPaletteOpen: (v: boolean) => void;
  sectionsMounted: () => void;
};

const SiteContext = createContext<SiteState | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside SiteProvider');
  return ctx;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [mode, setMode] = useState<Mode>(readMode);
  const light = mode === 'artist';
  const [active, setActive] = useState('intro');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const toastTimer = useRef<number>();
  const [sectionsKey, setSectionsKey] = useState(0);
  const sectionsMounted = useCallback(() => setSectionsKey((k) => k + 1), []);

  // Smooth scrolling (skipped entirely for reduced motion). Lenis and GSAP are
  // fetched after first paint so they never delay the hero.
  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    let cleanup = () => {};
    let started = false;
    // Smooth scrolling only matters once someone scrolls: load it on the first
    // scroll input, never during page load.
    const evs = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
    evs.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    function start() {
      if (started) return;
      started = true;
      evs.forEach((e) => window.removeEventListener(e, start));
    Promise.all([import('lenis'), import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ default: LenisCtor }, { gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const l = new LenisCtor({ lerp: 0.12, wheelMultiplier: 1 });
        lenis = l;
        l.on('scroll', ScrollTrigger.update);
        const tick = (time: number) => l.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        cleanup = () => {
          gsap.ticker.remove(tick);
          l.destroy();
          lenis = null;
        };
      },
    );
    }
    return () => {
      cancelled = true;
      evs.forEach((e) => window.removeEventListener(e, start));
      cleanup();
    };
  }, [reduced]);

  // Track which section is in view (used by the doodle guide).
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.section || 'about');
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionsKey]);

  // Keep <html data-mode> in step (the inline script set it before paint).
  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  const switchMode = useCallback(
    (next: Mode, from?: { x: number; y: number }) => {
      try {
        localStorage.setItem(MODE_KEY, next);
      } catch {
        /* private mode etc.: the choice just won't be remembered */
      }
      const apply = () => {
        document.documentElement.dataset.mode = next;
        flushSync(() => setMode(next));
      };
      const doc = document as ViewTransitionDoc;
      if (reduced || !doc.startViewTransition) {
        // No View Transitions (or reduced motion): switch at once; colours
        // ease over via the CSS transition on the zones.
        apply();
        return;
      }
      const x = from?.x ?? window.innerWidth - 40;
      const y = from?.y ?? 32;
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      const vt = doc.startViewTransition(apply);
      vt.ready
        .then(() => {
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
            { duration: 700, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
          );
        })
        .catch(() => {});
    },
    [reduced],
  );

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMsg(null), 2400);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast('Email copied to clipboard.');
    } catch {
      toast(profile.email);
    }
  }, [toast]);

  const downloadCv = useCallback(() => {
    const a = document.createElement('a');
    a.href = profile.cv;
    a.download = profile.cv.split('/').pop() || 'CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);

  const value = useMemo(
    () => ({
      light,
      mode,
      switchMode,
      active,
      toast,
      copyEmail,
      downloadCv,
      paletteOpen,
      setPaletteOpen,
      sectionsMounted,
    }),
    [light, mode, switchMode, active, toast, copyEmail, downloadCv, paletteOpen, sectionsMounted],
  );

  return (
    <SiteContext.Provider value={value}>
      {children}
      <div aria-live="polite" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] pointer-events-none">
        <AnimatePresence>
          {toastMsg && (
            <m.div
              key={toastMsg}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-[13px] shadow-2xl border border-white/10"
            >
              {toastMsg}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </SiteContext.Provider>
  );
}
