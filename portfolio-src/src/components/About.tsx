import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { MapPin, Linkedin, Quote } from 'lucide-react';
import { m, AnimatePresence, animate, useInView } from 'motion/react';
import { profile, stats, countries, greetings } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Scribble from '@/components/Scribble';
import SectionHead from '@/components/SectionHead';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';

const RubiksCube = lazy(() => import('./RubiksCube'));

/**
 * "1st", "4", "7": renders the real value (also in the pre-rendered HTML) and
 * counts up from zero when the stat scrolls into view. If it is already on
 * screen when the page loads, it just stays put.
 */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotionSafe();
  const match = value.match(/^(d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || reduced) return;
    let first = true;
    let stop = () => {};
    const io = new IntersectionObserver(
      ([e]) => {
        const wasFirst = first;
        first = false;
        if (!e.isIntersecting) return;
        io.disconnect();
        if (wasFirst) return; // already visible on load: no count-up
        const controls = animate(0, target, {
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setN(Math.round(v)),
        });
        stop = () => controls.stop();
      },
      { rootMargin: '-20% 0px' },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {match ? n : ''}
      {suffix}
    </span>
  );
}

type Candle = { id: number; open: number; close: number; high: number; low: number };

function nextCandle(prev: number, id: number): Candle {
  // Random walk with a slight upward drift: it was a winning run, after all.
  const close = prev + (Math.random() - 0.42) * 6;
  const high = Math.max(prev, close) + Math.random() * 2.5;
  const low = Math.min(prev, close) - Math.random() * 2.5;
  return { id, open: prev, close, high, low };
}

function seedCandles(n: number): Candle[] {
  const out: Candle[] = [];
  let p = 100;
  for (let i = 0; i < n; i++) {
    const c = nextCandle(p, i);
    out.push(c);
    p = c.close;
  }
  return out;
}

const CANDLES = 16;
const CW = 13;

/** A tiny candlestick chart that keeps trading up and down while on screen. */
function TradingChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: '-10% 0px' });
  const reduced = useReducedMotionSafe();
  const [candles, setCandles] = useState(() => seedCandles(CANDLES));

  useEffect(() => {
    if (!inView || reduced) return;
    const t = window.setInterval(() => {
      setCandles((c) => {
        const last = c[c.length - 1];
        return [...c.slice(1), nextCandle(last.close, last.id + 1)];
      });
    }, 900);
    return () => window.clearInterval(t);
  }, [inView, reduced]);

  const hi = Math.max(...candles.map((c) => c.high));
  const lo = Math.min(...candles.map((c) => c.low));
  const y = (v: number) => 4 + ((hi - v) / (hi - lo || 1)) * 52;
  const last = candles[candles.length - 1];
  const first = candles[0];
  const change = ((last.close - first.open) / first.open) * 100;
  const up = change >= 0;

  return (
    <div className="mt-5">
      <svg ref={ref} viewBox={`0 0 ${CANDLES * CW + 4} 60`} className="w-full max-w-[230px] h-auto overflow-hidden" aria-hidden>
        {candles.map((c, i) => {
          const green = c.close >= c.open;
          const color = green ? '#22c55e' : '#ef4444';
          const top = y(Math.max(c.open, c.close));
          const h = Math.max(1.5, Math.abs(y(c.open) - y(c.close)));
          return (
            <g
              key={c.id}
              style={{ transform: `translateX(${i * CW + 4}px)`, transition: reduced ? undefined : 'transform 0.85s linear' }}
            >
              <line x1={4} x2={4} y1={y(c.high)} y2={y(c.low)} stroke={color} strokeWidth={1} opacity={0.7} />
              <rect x={1} y={top} width={6} height={h} rx={1} fill={color} opacity={0.85} />
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex items-center gap-2 text-[12px] tabular-nums">
        <span className="text-white/60 uppercase tracking-[0.15em]">Portfolio</span>
        <span className={up ? 'text-emerald-400' : 'text-red-400'}>
          {up ? '▲' : '▼'} {Math.abs(change).toFixed(1)}%
        </span>
      </div>
    </div>
  );
}

/** Dotted route through the countries lived in, drawn on enter. */
function CountryPath() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const reduced = useReducedMotionSafe();
  // India → Singapore → Switzerland → Germany (loosely placed, west at left)
  const pts = [
    { x: 150, y: 58 },
    { x: 214, y: 82 },
    { x: 40, y: 34 },
    { x: 70, y: 14 },
  ];
  const d = `M${pts[0].x},${pts[0].y} Q190,96 ${pts[1].x},${pts[1].y} Q140,10 ${pts[2].x},${pts[2].y} Q48,16 ${pts[3].x},${pts[3].y}`;
  const show = inView || reduced;
  return (
    <svg ref={ref} viewBox="0 0 250 100" className="ink-flip mt-5 w-full max-w-[260px] h-auto overflow-visible" aria-hidden>
      <defs>
        <mask id="route-mask">
          <m.path
            d={d}
            fill="none"
            stroke="#fff"
            strokeWidth={6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: show ? 1 : 0 }}
            transition={reduced ? { duration: 0 } : { duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
          />
        </mask>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth={1.6}
        strokeDasharray="1 5"
        strokeLinecap="round"
        mask="url(#route-mask)"
      />
      {pts.map((p, i) => (
        <m.g
          key={countries[i]}
          initial={{ opacity: 0, scale: 0 }}
          animate={show ? { opacity: 1, scale: 1 } : undefined}
          transition={reduced ? { duration: 0 } : { delay: 0.3 + i * 0.6, type: 'spring', stiffness: 300, damping: 15 }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
        >
          <circle cx={p.x} cy={p.y} r={3.5} fill="#fff" />
          <text
            x={p.x + (i === 1 ? -8 : 7)}
            y={p.y + (i === 1 ? 14 : 4)}
            fontSize="9"
            fill="rgba(255,255,255,0.45)"
            textAnchor={i === 1 ? 'end' : 'start'}
            fontFamily="Inter, sans-serif"
          >
            {countries[i]}
          </text>
        </m.g>
      ))}
    </svg>
  );
}

function Greetings() {
  const reduced = useReducedMotionSafe();
  const box = useRef<HTMLDivElement>(null);
  // Only cycle while visible: each new script makes the browser look up a
  // fallback font, which is costly, so never do it during page load.
  const visible = useInView(box, { margin: "-10% 0px" });
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced || !visible) return;
    const t = window.setInterval(() => setI((x) => (x + 1) % greetings.length), 1700);
    return () => window.clearInterval(t);
  }, [reduced, visible]);
  const g = greetings[i];
  return (
    <div ref={box} className="mt-7 h-10 relative overflow-hidden" aria-label="Greetings in seven languages">
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={g.word}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-center gap-3"
        >
          <span className="font-serif text-3xl text-white">{g.word}</span>
          <span className="text-[12px] uppercase tracking-[0.15em] text-white/60">{g.lang}</span>
        </m.div>
      </AnimatePresence>
    </div>
  );
}

/** Flat drawing of the cube shown until three.js has loaded. */
function CubePoster() {
  const top = ['#fff', '#fff', '#fff'], left = '#0046ad', right = '#b71234';
  const cell = (pts: string, fill: string, k: string) => <polygon key={k} points={pts} fill={fill} stroke="#111" strokeWidth="3" />;
  const polys: JSX.Element[] = [];
  const o = { x: 150, y: 60 }, u = 34, v = 20;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      const x = o.x + (i - j) * u, y = o.y + (i + j) * v;
      polys.push(cell(`${x},${y} ${x + u},${y + v} ${x},${y + 2 * v} ${x - u},${y + v}`, top[j], `t${i}${j}`));
      const lx = o.x - 3 * u + i * u, ly = o.y + 3 * v + i * v + j * 2 * v;
      polys.push(cell(`${lx},${ly} ${lx + u},${ly + v} ${lx + u},${ly + v + 2 * v} ${lx},${ly + 2 * v}`, left, `l${i}${j}`));
      const rx = o.x + i * u, ry = o.y + 6 * v - i * v + j * 2 * v;
      polys.push(cell(`${rx},${ry} ${rx + u},${ry - v} ${rx + u},${ry - v + 2 * v} ${rx},${ry + 2 * v}`, right, `r${i}${j}`));
    }
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full p-10 opacity-90" aria-hidden>
      {polys}
    </svg>
  );
}

/**
 * The three.js cube is a big download (~500 KB), so it is only fetched once
 * About is within about a third of a screen of the viewport (the intro fills the first screen). Until it is ready, a flat
 * drawing of the cube holds its place (same size, so nothing shifts).
 */
function LazyCube() {
  const [ready, setReady] = useState(false);
  const [near, setNear] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = box.current;
    if (!el || near) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: '30% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);
  return (
    <div ref={box} className="relative w-full h-[300px] sm:h-[380px]">
      {!ready && <CubePoster />}
      {near && (
        <Suspense fallback={null}>
          <div className={`absolute inset-0 ${ready ? '' : 'opacity-0'}`}>
            <RubiksCube onReady={() => setReady(true)} />
          </div>
        </Suspense>
      )}
    </div>
  );
}

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      data-section="about"
      ref={ref}
      className="pt-28 sm:pt-32 pb-10 sm:pb-14 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Left: identity */}
        <div>
          {/* The name is set large once, in the welcome screen; About opens with the positioning. */}
          <SectionHead no="01" title="About" />
          <p className="-mt-4 sm:-mt-6 mb-10 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-white">
            {profile.positioning}
          </p>

          <div className="flex flex-wrap gap-2">
            {profile.roles.map((r) => (
              <span key={r} className="tag">
                {r}
              </span>
            ))}
          </div>

          <div className="mt-8 relative pl-6 border-l border-white/15">
            <Quote className="absolute -left-2.5 top-0 h-4 w-4 text-white/50 bg-black p-0.5" />
            <p className="text-white/75 leading-[1.75] text-[16px] font-light whitespace-pre-line">
              {profile.bio}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-[14px] text-white/65">
            <span className="flex flex-col">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                {profile.locationLine1}
              </span>
              <span className="ml-5 text-white/55">{profile.locationLine2}</span>
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-squiggle flex w-fit items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Rubik's cube */}
        <div className="reveal relative" style={{ transitionDelay: '120ms' }}>
          <Scribble className="lg:-top-2 lg:right-0">go on, give it a spin ↓</Scribble>
          <LazyCube />
          <p className="text-center text-[13px] tracking-wide text-white/60 mt-2">
            Drag to spin it around
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card sketch-box p-7 sm:p-8"
          >
            <div className="text-5xl sm:text-6xl font-medium text-white">
              <CountUp value={s.value} />
            </div>
            <div className="mt-4 text-[13px] tracking-wide uppercase text-white/75 font-medium">
              {s.label}
            </div>
            <div className="mt-2 text-[14px] text-white/60 leading-relaxed font-light">{s.sub}</div>
            {s.value === '1st' && <TradingChart />}
            {s.label === 'countries lived in' && <CountryPath />}
            {s.label === 'languages' && <Greetings />}
          </div>
        ))}
      </div>
    </section>
  );
}
