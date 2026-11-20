import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { experience } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useScrollProgress } from '@/lib/useScrollProgress';
import Scribble from '@/components/Scribble';
import { Monkey } from '@/components/Critters';

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const COIL_W = 64; // px width of the spiral column
const CX = 30; // the pole
const R = 20; // how far the slide winds out from the pole
const TOP = 10;
const BASE = 18;

/**
 * A helter-skelter: a slide winding round a central pole. Returns the parts
 * that pass behind the pole and the parts in front of it as separate paths,
 * so the pole can be drawn between them.
 */
function helix(h: number) {
  const turns = Math.max(4, Math.round(h / 130));
  const total = turns * Math.PI * 2;
  const pitch = (h - TOP - BASE) / total;
  const at = (t: number) => ({ x: CX + R * Math.sin(t), y: TOP + pitch * t, front: Math.cos(t) > 0 });
  const back: string[] = [];
  const front: string[] = [];
  let seg: string[] = [];
  let side = true;
  for (let t = 0; t <= total + 1e-6; t += 0.08) {
    const p = at(t);
    const pt = `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    if (seg.length && p.front !== side) {
      seg.push(pt);
      (side ? front : back).push(`M${seg.join(' L')}`);
      seg = [];
    }
    side = p.front;
    seg.push(pt);
  }
  if (seg.length > 1) (side ? front : back).push(`M${seg.join(' L')}`);
  return { back: back.join(' '), front: front.join(' '), total, at };
}

/**
 * The spiral timeline: the slide lights up as you scroll, and a white monkey
 * slides down it (and climbs back up when you scroll up).
 */
function SpiralTimeline({ target }: { target: React.RefObject<HTMLDivElement> }) {
  const [h, setH] = useState(0);
  const clip = useRef<SVGRectElement>(null);
  const monkey = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(target, 0.7, 0.5);
  const clipId = `spiral${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setH(Math.round(e.contentRect.height)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [target]);

  const shape = useMemo(() => (h ? helix(h) : null), [h]);

  useEffect(() => {
    if (!shape) return;
    const place = (p: number) => {
      if (!monkey.current || !clip.current) return;
      const t = p * shape.total;
      const pt = shape.at(t);
      clip.current.setAttribute('height', String(Math.max(0, pt.y + 2)));
      // Sliding right on the front of the slide, left round the back.
      const face = Math.cos(t) >= 0 ? 1 : -1;
      const depth = pt.front ? 1 : 0.86;
      monkey.current.style.transform = `translate(${pt.x}px, ${pt.y}px) translate(-50%, -86%) scale(${depth}) scaleX(${face})`;
      monkey.current.style.opacity = pt.front ? '1' : '0.7';
    };
    place(progress.get());
    return progress.on('change', place);
  }, [progress, shape]);

  if (!shape) return null;
  return (
    <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: COIL_W }} aria-hidden>
      <svg width={COIL_W} height={h} className="ink-flip overflow-visible" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <clipPath id={clipId}>
            <rect ref={clip} x={-20} y={0} width={COIL_W + 40} height={0} />
          </clipPath>
        </defs>
        {/* base the slide ends on, and the cap on top of the pole */}
        <ellipse cx={CX} cy={h - 6} rx={R + 10} ry={5} stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} />
        <ellipse cx={CX} cy={TOP - 3} rx={9} ry={3} stroke="rgba(255,255,255,0.5)" strokeWidth={1.5} />
        {/* back of the slide (behind the pole) */}
        <path d={shape.back} stroke="rgba(255,255,255,0.12)" strokeWidth={2.5} />
        <path d={shape.back} stroke="rgba(255,255,255,0.45)" strokeWidth={2.5} clipPath={`url(#${clipId})`} />
        {/* the pole */}
        <path d={`M${CX} ${TOP - 3} L${CX} ${h - 6}`} stroke="rgba(255,255,255,0.28)" strokeWidth={3} />
        {/* front of the slide: a wide band with a rim */}
        <path d={shape.front} stroke="rgba(255,255,255,0.16)" strokeWidth={6} />
        <path d={shape.front} stroke="#ffffff" strokeWidth={6} clipPath={`url(#${clipId})`} />
        <path d={shape.front} stroke="#000000" strokeWidth={1.2} transform="translate(0 2.2)" opacity={0.6} />
      </svg>
      <div ref={monkey} className="absolute left-0 top-0 will-change-transform" style={{ transformOrigin: '50% 86%' }}>
        <Monkey className="w-11" />
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();
  const timeline = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      data-section="experience"
      ref={ref}
      className="relative overflow-x-clip py-12 sm:py-16 px-6 sm:px-10 max-w-4xl mx-auto"
    >
      <div className="relative reveal mb-10">
        <span className="text-[11px] tracking-[0.25em] uppercase text-white/40 font-light">Career</span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-white tracking-tight">Work Experience</h2>
        <Scribble className="lg:right-0 lg:bottom-2">the day jobs ↓</Scribble>
      </div>

      <div ref={timeline} className="relative">
        <SpiralTimeline target={timeline} />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={job.company} className="reveal relative pl-16" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="sketch-box group hover:bg-white/[0.02] transition-colors duration-500 rounded-[20px] p-7 -ml-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-medium text-white">{job.role}</h3>
                    <p className="text-[13px] mt-0.5 text-white/40">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="text-[11px] text-white/40 px-3 py-1 rounded-full border border-white/10">
                    {job.period}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <span key={t} className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full border border-white/10 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex gap-2.5 text-[14px] text-white/60 leading-[1.7]">
                      <span aria-hidden className="shrink-0 rounded-full bg-white/40" style={{ width: 5, height: 5, marginTop: '0.72em' }} />
                      <span>{renderBold(pt)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
