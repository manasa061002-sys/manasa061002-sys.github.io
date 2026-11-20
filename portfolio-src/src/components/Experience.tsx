import { useEffect, useRef, useState } from 'react';
import { experience, profile } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useScrollProgress } from '@/lib/useScrollProgress';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';
import { Monkey } from '@/components/Critters';
import Scribble from '@/components/Scribble';
import MetricChart from '@/components/MetricChart';

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

/** Short key for a job, used by data-evidence (e.g. "asymmetrica", "ki", "axis", "avere"). */
export const jobKey = (company: string) => company.split(/[\s,.]/)[0].toLowerCase();

const TRACK_W = 48; // px column for the line
const CX = 22; // centre of the rails
const STATION_Y = 38; // station marker height within a card (level with the job title)
const LEAD = 70; // a card slides in this many px before the tram reaches it

/** A little tram seen from the front: the white monkey rides on its roof. */
function Tram() {
  return (
    <svg viewBox="0 0 60 52" className="w-11 h-auto overflow-visible" aria-hidden>
      <g stroke="#1f2937" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 6 L30 1 L38 6" fill="none" />
        <rect x="8" y="6" width="44" height="36" rx="9" fill="#fafaf9" />
        <rect x="14" y="11" width="32" height="14" rx="3" fill="#bae6fd" />
        <path d="M14 30 H46" fill="none" strokeWidth={1.4} />
        <circle cx="18" cy="35" r="3" fill="#fde047" />
        <circle cx="42" cy="35" r="3" fill="#fde047" />
        <path d="M14 42 L11 49 M46 42 L49 49 M8 49 H52" fill="none" />
      </g>
    </svg>
  );
}

/**
 * The route: a railway down the left of the jobs (the countries route from
 * About, extended into a train line). The rails light up as you scroll, the
 * tram with the monkey travels down (and back up), and each job's card slides
 * in as the tram reaches its station. Without JS or with reduced motion the
 * cards are simply there, so the text reads fine on its own.
 */
function RouteLine({ target, cards }: { target: React.RefObject<HTMLDivElement>; cards: React.MutableRefObject<(HTMLDivElement | null)[]> }) {
  const [h, setH] = useState(0);
  const [stations, setStations] = useState<number[]>([]);
  const clip = useRef<SVGRectElement>(null);
  const tram = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(target, 0.7, 0.5);
  const clipId = 'route-clip';

  // Measure the line and where each station is (cards can change height).
  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const measure = () => {
      setH(el.offsetHeight);
      setStations(cards.current.map((c) => (c ? c.offsetTop + STATION_Y : 0)));
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, [target, cards]);

  useEffect(() => {
    if (!h || !stations.length) return;
    const first = stations[0];
    const place = (p: number) => {
      const y = first + p * (h - first);
      clip.current?.setAttribute('height', String(Math.max(0, y)));
      if (tram.current) tram.current.style.transform = `translate(${CX}px, ${y}px) translate(-50%, -62%)`;
      cards.current.forEach((c, i) => {
        if (!c) return;
        if (stations[i] <= y + LEAD) c.setAttribute('data-arrived', '');
        else c.removeAttribute('data-arrived');
      });
    };
    place(progress.get());
    return progress.on('change', place);
  }, [progress, h, stations, cards]);

  if (!h) return null;
  // Rails and sleepers.
  let ties = '';
  for (let y = 4; y < h; y += 13) ties += `M${CX - 8} ${y} H${CX + 8} `;
  const rails = `M${CX - 4.5} 0 V${h} M${CX + 4.5} 0 V${h}`;

  return (
    <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: TRACK_W }} aria-hidden>
      <svg width={TRACK_W} height={h} className="overflow-visible" fill="none" strokeLinecap="round">
        <defs>
          <clipPath id={clipId}>
            <rect ref={clip} x={-20} y={0} width={TRACK_W + 40} height={0} />
          </clipPath>
        </defs>
        <g className="stroke-white/15">
          <path d={ties} strokeWidth={2} />
          <path d={rails} strokeWidth={1.5} />
        </g>
        <g className="stroke-white" clipPath={`url(#${clipId})`}>
          <path d={ties} strokeWidth={2} opacity={0.55} />
          <path d={rails} strokeWidth={1.8} />
        </g>
        {/* stations */}
        {stations.map((y, i) => (
          <g key={i}>
            <circle cx={CX} cy={y} r={9} className="fill-black stroke-white" strokeWidth={2.5} />
            <circle cx={CX} cy={y} r={3.5} className="fill-white" />
          </g>
        ))}
      </svg>
      <div ref={tram} className="absolute left-0 top-0 will-change-transform flex flex-col items-center">
        <Monkey className="w-8 -mb-2.5 relative z-10" />
        <Tram />
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();
  const timeline = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotionSafe();

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

      <div ref={timeline} className={`relative ${reduced ? '' : 'train-ready'}`}>
        <RouteLine target={timeline} cards={cards} />

        {/* where the line starts: today */}
        <p className="pl-14 pb-6 text-[11px] uppercase tracking-[0.25em] text-white/40">
          Now · {profile.locationLine2}
        </p>

        <div className="space-y-10">
          {experience.map((job, i) => {
            const key = jobKey(job.company);
            return (
              <div
                key={job.company}
                ref={(el) => {
                  cards.current[i] = el;
                }}
                className="station-card relative pl-14"
              >
                <div className="sketch-box group hover:bg-white/[0.02] transition-colors duration-500 rounded-[20px] p-5 sm:p-7 sm:-ml-2">
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
                      <li key={j} data-evidence={`exp-${key}-${j}`} className="flex gap-2.5 text-[14px] text-white/60 leading-[1.7]">
                        <span aria-hidden className="shrink-0 rounded-full bg-white/40" style={{ width: 5, height: 5, marginTop: '0.72em' }} />
                        <span>{renderBold(pt)}</span>
                      </li>
                    ))}
                  </ul>

                  {key === 'asymmetrica' && (
                    <MetricChart
                      title="Cold-outreach response rate"
                      from={{ value: 3, label: '3%', at: 'Baseline' }}
                      to={{ value: 15, label: '~15%', at: 'Within 2 weeks' }}
                      max={20}
                      summary="Cold-outreach response rate went from a 3% baseline to about 15% within 2 weeks."
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
