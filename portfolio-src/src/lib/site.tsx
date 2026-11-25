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

/** Scroll an element to about a third of the way down the screen. */
export function scrollToEl(el: Element) {
  const offset = -Math.round(window.innerHeight / 3);
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset });
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
  { id: 'experience', label: 'Work Experience' },
  { id: 'research', label: 'Academic Research' },
  { id: 'products', label: 'Products' },
  { id: 'creative', label: 'Creative Decks' },
  { id: 'skills', label: 'Skills & Certifications' },
  { id: 'life', label: 'Life' },
];

/** Which half of the page is on screen: the dark professional half, or the paper creative half. */
export type Mode = 'analyst' | 'artist';

/** Sections on the paper half (after "Where structure meets color"). The creative desk is a dark mat, so it counts as dark. */
const LIGHT_SECTIONS = new Set(['products', 'skills', 'life', 'footer']);

/** Sent by the bridge section (detail: true once its paper covers the screen). */
export const PAPER_EVENT = 'mr-paper';

type SiteState = {
  /** True while the visitor is on the paper half; the doodle guide draws in ink then. */
  light: boolean;
  /** The half on screen, as the guide's outfit: a blazer for the analyst, overalls for the artist. */
  mode: Mode;
  active: string;
  /** False while the opening story plays (the nav and the guide wait for it). */
  introDone: boolean;
  /** End the opening story (it finished, or the visitor skipped it). */
  finishIntro: () => void;
  toast: (msg: string) => void;
  copyEmail: () => void;
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
  const [active, setActive] = useState('intro');
  // The opening story plays every time the site opens (never with reduced motion).
  const [introDone, setIntroDone] = useState(() => {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  });
  const finishIntro = useCallback(() => setIntroDone(true), []);
  // On the bridge the page turns to paper part-way through (or is paper outright with reduced motion).
  const [bridgePaper, setBridgePaper] = useState(false);
  useEffect(() => {
    const on = (e: Event) => setBridgePaper((e as CustomEvent<boolean>).detail);
    window.addEventListener(PAPER_EVENT, on);
    return () => window.removeEventListener(PAPER_EVENT, on);
  }, []);
  const light = LIGHT_SECTIONS.has(active) || (active === 'transition' && (bridgePaper || !!reduced));
  const mode: Mode = light ? 'artist' : 'analyst';
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

  const value = useMemo(
    () => ({
      light,
      mode,
      active,
      introDone,
      finishIntro,
      toast,
      copyEmail,
      paletteOpen,
      setPaletteOpen,
      sectionsMounted,
    }),
    [light, mode, active, introDone, finishIntro, toast, copyEmail, paletteOpen, sectionsMounted],
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
