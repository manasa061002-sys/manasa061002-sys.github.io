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

type SiteState = {
  light: boolean;
  setLight: (v: boolean) => void;
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
  const [light, setLight] = useState(false);
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
      setLight,
      active,
      toast,
      copyEmail,
      downloadCv,
      paletteOpen,
      setPaletteOpen,
      sectionsMounted,
    }),
    [light, active, toast, copyEmail, downloadCv, paletteOpen, sectionsMounted],
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
