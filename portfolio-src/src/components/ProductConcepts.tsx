import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, Calendar, CheckCircle2, X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { productConcepts, type ProductConcept } from '@/data/portfolio';
import Picture, { bgSet } from '@/components/Picture';
import SectionHead from '@/components/SectionHead';
import { useScrollLock } from '@/lib/site';
import MetricChart from '@/components/MetricChart';
import NaiveDoodle from '@/components/NaiveDoodle';

const PDF_PAGES = 7;

/** Each project's app icon: a colour and a little hand-drawn picture (naive style). */
const APPS: Record<string, { colour: string; ink: string; short: string; glyph: ReactNode }> = {
  kayysee: {
    colour: '#fde047',
    ink: '#713f12',
    short: 'KayYSee',
    // an ID card with a tick
    glyph: (
      <>
        <rect x="9" y="15" width="30" height="20" rx="3" />
        <circle cx="17" cy="24" r="3.5" />
        <path d="M14 31 C 15 28, 19 28, 20 31" />
        <path d="M25 22 L 27.5 25 L 33 19" />
      </>
    ),
  },
  'dash-dine-eco': {
    colour: '#86efac',
    ink: '#14532d',
    short: 'Dash & Dine',
    // a basket with a leaf
    glyph: (
      <>
        <path d="M10 22 L 38 22 L 34 37 L 14 37 Z" />
        <path d="M16 22 C 17 14, 31 14, 32 22" />
        <path d="M18 27 L 18 33 M24 27 L 24 33 M30 27 L 30 33" />
        <path d="M33 12 C 38 10, 40 14, 37 17 C 35 18, 33 16, 33 12 Z" />
      </>
    ),
  },
  'fintech-budget': {
    colour: '#f9a8d4',
    ink: '#831843',
    short: 'Fresh Farm',
    // a little barn on a hill
    glyph: (
      <>
        <path d="M6 37 C 14 31, 34 31, 42 37" />
        <path d="M15 33 L 15 22 L 24 15 L 33 22 L 33 33" />
        <path d="M21 33 L 21 26 L 27 26 L 27 33" />
      </>
    ),
  },
  'blockchain-land-registry': {
    colour: '#7dd3fc',
    ink: '#0c4a6e',
    short: 'Land Registry',
    // three linked blocks
    glyph: (
      <>
        <rect x="8" y="12" width="11" height="11" rx="2" />
        <rect x="29" y="12" width="11" height="11" rx="2" />
        <rect x="18.5" y="27" width="11" height="11" rx="2" />
        <path d="M19 17.5 L 29 17.5 M14 23 L 20 27 M34 23 L 28 27" />
      </>
    ),
  },
};

/**
 * An iframe rendered at a real device width, scaled down to fit its box. With
 * `fill`, the box takes all the room it is given and the page's visible height
 * stretches to match (so a website fills its window, no empty strip below);
 * otherwise the box keeps the device's shape (a phone). The project's
 * screenshot shows underneath until the live page has loaded.
 */
function ScaledFrame({ src, w, h, title, poster, fill = false }: { src: string; w: number; h: number; title: string; poster: string; fill?: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ scale: 0, height: h });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const scale = e.contentRect.width / w;
      setSize({ scale, height: fill && scale > 0 ? Math.max(h * 0.5, e.contentRect.height / scale) : h });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [w, h, fill]);
  return (
    <div
      ref={box}
      className={`bg-set relative w-full overflow-hidden bg-white bg-no-repeat ${fill ? 'h-full' : ''}`}
      style={{ ...(fill ? {} : { aspectRatio: `${w} / ${h}` }), ...bgSet(poster, 960), backgroundSize: '100% auto', backgroundPosition: '50% 0' } as React.CSSProperties}
    >
      {size.scale > 0 && (
        <iframe
          src={src}
          title={title}
          onLoad={() => setLoaded(true)}
          className={`absolute left-0 top-0 border-0 bg-white transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ width: w, height: size.height, transform: `scale(${size.scale})`, transformOrigin: '0 0' }}
        />
      )}
    </div>
  );
}

/** The prototype itself, in the way it is meant to be seen: a website, an app or a deck. */
function Prototype({ p }: { p: ProductConcept }) {
  if (p.screen.kind === 'phone') {
    return (
      <div className="flex h-full items-center justify-center bg-[#eef2ec] p-3">
        <div className="phone-frame h-full max-h-full rounded-[30px] p-[4px]" style={{ aspectRatio: '390 / 844' }}>
          <div className="relative h-full overflow-hidden rounded-[26px] bg-white">
            <ScaledFrame src={p.link ?? ''} w={390} h={844} title={`${p.title} (live app)`} poster={p.screen.src} />
            <span className="pointer-events-none absolute left-1/2 top-1.5 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    );
  }
  if (p.screen.kind === 'pdf') {
    return (
      <div className="h-full space-y-3 overflow-y-auto overscroll-contain bg-gray-200 p-3" data-lenis-prevent>
        {Array.from({ length: PDF_PAGES }).map((_, i) => (
          <Picture
            key={i}
            sizes="(min-width: 768px) 560px, 100vw"
            src={`/images/pdf/blockchain-land-registry/page-${i + 1}.jpg`}
            alt={`${p.title}, page ${i + 1}`}
            loading="lazy"
            className="block w-full rounded shadow"
          />
        ))}
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col bg-white" data-lenis-prevent>
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-gray-200 bg-gray-100 px-3">
        <span className="ml-1 flex-1 truncate rounded bg-white px-2 py-0.5 text-[12px] text-gray-500">{p.screen.label}</span>
      </div>
      <div className="min-h-0 flex-1">
        <ScaledFrame fill src={p.link ?? ''} w={1280} h={800} title={`${p.title} (live site)`} poster={p.screen.src} />
      </div>
    </div>
  );
}

/** The project's info, beside the prototype in its window. */
function Info({ p }: { p: ProductConcept }) {
  return (
    <div className="h-full overflow-y-auto overscroll-contain bg-[#fffdf7] p-5" data-lenis-prevent>
      <h3 className="text-[22px] font-medium leading-tight text-gray-900">{p.title}</h3>
      <p className="mt-2 flex items-center gap-1.5 text-[13px] text-gray-600">
        <Calendar className="h-3.5 w-3.5" aria-hidden /> {p.period}
      </p>
      <p className="mt-4 text-[14px] leading-[1.7] text-gray-700">{p.summary}</p>
      {p.metric && <MetricChart {...p.metric} onLight />}
      {p.note && <p className="mt-3 rounded-[10px] bg-amber-100 px-3 py-2 text-[13px] leading-relaxed text-amber-900">{p.note}</p>}
      <ul className="mt-5 space-y-2.5">
        {p.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-[14px] text-gray-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-[13px] font-medium text-white hover:bg-gray-700"
        >
          {p.screen.kind === 'pdf' ? 'Open the PDF' : 'Open in a new tab'} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      )}
    </div>
  );
}

/** A window on the laptop's desktop: the prototype on the left, its info on the right. */
function Window({ p, origin, onClose }: { p: ProductConcept; origin: string; onClose: () => void }) {
  const close = useRef<HTMLButtonElement>(null);
  const app = APPS[p.id];
  // On phones the window covers the whole screen, so the page behind it should not scroll.
  const [fullScreen] = useState(() => window.matchMedia('(max-width: 767px)').matches);
  useScrollLock(fullScreen);
  useEffect(() => {
    close.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <m.div
      role="dialog"
      aria-label={p.title}
      className="os-window"
      style={{ transformOrigin: origin }}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.2 }}
      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
    >
      <div className="os-titlebar">
        <button ref={close} type="button" onClick={onClose} aria-label={`Close ${app?.short ?? p.title}`} className="os-close">
          <X className="h-2.5 w-2.5" aria-hidden />
        </button>
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        <span className="flex-1 truncate text-center text-[13px] font-medium text-gray-700">{app?.short ?? p.title}</span>
        <button type="button" onClick={onClose} className="os-close-text">
          Close
        </button>
      </div>
      <div className="os-body">
        <div className="min-h-0 min-w-0">
          <Prototype p={p} />
        </div>
        <div className="min-h-0 min-w-0 border-l border-gray-200">
          <Info p={p} />
        </div>
      </div>
    </m.div>
  );
}

/** The desktop wallpaper: a naive, hand-drawn sun, cloud and hills. */
function Wallpaper() {
  return (
    <svg className="os-wallpaper" viewBox="0 0 800 500" preserveAspectRatio="xMidYMax slice" aria-hidden>
      <g className="os-sun">
        <circle cx="738" cy="66" r="28" fill="#fde68a" stroke="#f59e0b" strokeWidth="4" />
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * Math.PI * 2;
          return (
            <path
              key={i}
              d={`M${738 + Math.cos(a) * 39} ${66 + Math.sin(a) * 39} L${738 + Math.cos(a) * 53} ${66 + Math.sin(a) * 53}`}
              stroke="#f59e0b"
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}
      </g>
      <path d="M-20 430 C 140 360, 300 380, 420 420 C 540 460, 680 360, 820 400 L 820 520 L -20 520 Z" fill="#bbf7d0" stroke="#22c55e" strokeWidth="4" />
      <path d="M-20 470 C 160 430, 360 470, 520 455 C 650 445, 740 470, 820 460 L 820 520 L -20 520 Z" fill="#86efac" />
      <path d="M90 90 C 110 70, 140 72, 152 90 C 175 86, 186 112, 166 120 L 82 120 C 62 118, 66 90, 90 90 Z" fill="#fff" stroke="#93c5fd" strokeWidth="3" className="os-cloud" />
    </svg>
  );
}

/** The time on the laptop's menu bar (the visitor's own clock). */
function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(t);
  }, []);
  return {
    time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' }),
  };
}

/**
 * The laptop's home screen: a menu bar, a doodled wallpaper and an app icon
 * for each project. Click an icon and its window grows out of it.
 */
function Desktop() {
  const [locked, setLocked] = useState(true);
  const [app, setApp] = useState<ProductConcept | null>(null);
  const [origin, setOrigin] = useState('50% 50%');
  const screen = useRef<HTMLDivElement>(null);
  const icons = useRef<Record<string, HTMLButtonElement | null>>({});
  const clock = useClock();

  const openApp = (p: ProductConcept, el: HTMLElement) => {
    const s = screen.current?.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    if (s) setOrigin(`${r.left + r.width / 2 - s.left}px ${r.top + r.height / 2 - s.top}px`);
    setApp(p);
  };
  const closeApp = () => {
    const last = app;
    setApp(null);
    if (last) window.setTimeout(() => icons.current[last.id]?.focus({ preventScroll: true }), 0);
  };

  return (
    <div ref={screen} className="os-screen">
      <div className="os-menubar">
        <span className="font-serif text-[15px] font-semibold">MR</span>
        <span>Products</span>
        <span className="ml-auto tabular-nums">{clock.time}</span>
      </div>

      <Wallpaper />

      <ul className="os-icons" aria-label="Projects">
        {productConcepts.map((p) => {
          const a = APPS[p.id];
          return (
            <li key={p.id}>
              <button
                ref={(el) => {
                  icons.current[p.id] = el;
                }}
                type="button"
                onClick={(e) => openApp(p, e.currentTarget)}
                aria-label={`Open ${p.title}`}
                className="os-icon"
              >
                <span className="os-icon-tile" style={{ background: a?.colour ?? '#e5e7eb' }}>
                  <svg viewBox="0 0 48 48" className="h-3/5 w-3/5" fill="none" stroke={a?.ink ?? '#111'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {a?.glyph}
                  </svg>
                </span>
                <span className="os-icon-label">{a?.short ?? p.title}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>{app && <Window key={app.id} p={app} origin={origin} onClose={closeApp} />}</AnimatePresence>

      {/* the lock screen: click and it slides up onto the desktop */}
      <AnimatePresence>
        {locked && (
          <m.button
            key="lock"
            type="button"
            onClick={() => setLocked(false)}
            aria-label="Open the laptop to see my product concepts"
            className="os-lock"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          >
            <span className="os-lock-wall" aria-hidden>
              <Wallpaper />
            </span>
            <span className="os-lock-time tabular-nums">{clock.time}</span>
            <span className="os-lock-date">{clock.date}</span>
            <span className="os-lock-avatar" aria-hidden>
              MR
            </span>
            <span className="os-lock-name">Manasa Rammohan</span>
            <span className="os-lock-cta">
              Click to open <span aria-hidden className="os-lock-arrow">↑</span>
            </span>
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/** The laptop: upright, its screen showing the lock screen, then the desktop. */
function Laptop() {
  return (
    <div className="laptop mx-auto w-full max-w-[880px]">
      <div className="laptop-lid">
        <div className="laptop-screen">
          <Desktop />
        </div>
      </div>
      <div className="laptop-base" aria-hidden />
    </div>
  );
}

export default function ProductConcepts() {
  return (
    <section id="products" data-section="products" className="relative overflow-x-clip py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto">
      <NaiveDoodle kind="daisy" className="right-0 top-[38%] w-10" />
      <NaiveDoodle kind="star" className="left-0 bottom-[18%] w-9" delay={0.4} />
      <SectionHead no="04" label="INNOVATION" title="Product Concepts & Prototypes" tone="light" scribble="unlock it, then open an app" />
      <Laptop />
    </section>
  );
}
