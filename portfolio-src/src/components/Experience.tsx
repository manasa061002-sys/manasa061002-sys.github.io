import { useEffect, useRef, useState } from 'react';
import { experience, profile } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useScrollProgress } from '@/lib/useScrollProgress';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';
import SectionHead from '@/components/SectionHead';

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

const TRACK_W = 48; // px column for the flight path
const CX = 22; // centre of the path
const STATION_Y = 38; // waypoint height within a card (level with the job title)
const LEAD = 70; // a card slides in this many px before the plane reaches it

/** A small airliner seen from above, nose down (the way it flies). Black and white. */
function Plane() {
  return (
    <svg viewBox="0 0 40 48" className="plane-bank h-auto w-10 overflow-visible drop-shadow-[0_2px_6px_rgba(255,255,255,0.15)]" aria-hidden>
      <g fill="#ffffff" stroke="#0a0a0a" strokeWidth={1.2} strokeLinejoin="round">
        {/* tailplane */}
        <path d="M17.5 6 L9 2.5 L9 5.5 L17.5 10 Z" />
        <path d="M22.5 6 L31 2.5 L31 5.5 L22.5 10 Z" />
        {/* wings, swept back */}
        <path d="M16 23 L1.5 15 L1.5 19.5 L16 30.5 Z" />
        <path d="M24 23 L38.5 15 L38.5 19.5 L24 30.5 Z" />
        {/* engines */}
        <rect x="8" y="20" width="3.2" height="6" rx="1.4" />
        <rect x="28.8" y="20" width="3.2" height="6" rx="1.4" />
        {/* fuselage */}
        <path d="M20 1.5 C 22.6 1.5 23.6 5 23.6 9 L23.6 38 C 23.6 43 22 46.5 20 46.5 C 18 46.5 16.4 43 16.4 38 L16.4 9 C 16.4 5 17.4 1.5 20 1.5 Z" />
        <path d="M18.4 41 Q 20 42.6 21.6 41" fill="none" strokeWidth={1} />
      </g>
    </svg>
  );
}

/**
 * The route: a flight path down the left of the jobs. The path ahead is
 * dashed; the plane flies down it as you scroll (and back up), leaving two
 * contrails behind, and each job's card slides in as the plane reaches its
 * waypoint. Without JS or with reduced motion the cards are simply there, so
 * the text reads fine on its own.
 */
function RouteLine({ target, cards }: { target: React.RefObject<HTMLDivElement>; cards: React.MutableRefObject<(HTMLDivElement | null)[]> }) {
  const [h, setH] = useState(0);
  const [stations, setStations] = useState<number[]>([]);
  const clip = useRef<SVGRectElement>(null);
  const plane = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(target, 0.7, 0.5);
  const clipId = 'route-clip';

  // Measure the path and where each waypoint is (cards can change height).
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
      clip.current?.setAttribute('height', String(Math.max(0, y - 18)));
      if (plane.current) plane.current.style.transform = `translate(${CX}px, ${y}px) translate(-50%, -50%)`;
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
  const path = `M${CX} 0 V${h}`;
  const trails = `M${CX - 3.5} 0 V${h} M${CX + 3.5} 0 V${h}`;

  return (
    <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: TRACK_W }} aria-hidden>
      <svg width={TRACK_W} height={h} className="overflow-visible" fill="none" strokeLinecap="round">
        <defs>
          <clipPath id={clipId}>
            <rect ref={clip} x={-20} y={0} width={TRACK_W + 40} height={0} />
          </clipPath>
        </defs>
        {/* the flight path ahead */}
        <path d={path} className="stroke-white/25" strokeWidth={1.5} strokeDasharray="6 9" />
        {/* contrails where the plane has been */}
        <path d={trails} className="stroke-white" strokeWidth={1.6} opacity={0.75} clipPath={`url(#${clipId})`} />
        {/* waypoints */}
        {stations.map((y, i) => (
          <g key={i}>
            <circle cx={CX} cy={y} r={9} className="fill-black stroke-white" strokeWidth={2} />
            <circle cx={CX} cy={y} r={3} className="fill-white" />
          </g>
        ))}
      </svg>
      <div ref={plane} className="absolute left-0 top-0 will-change-transform">
        <Plane />
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
      className="relative overflow-x-clip py-10 sm:py-14 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <SectionHead no="02" title="Work Experience" scribble="the day jobs ↓" />

      <div ref={timeline} className={`relative ${reduced ? '' : 'flight-ready'}`}>
        <RouteLine target={timeline} cards={cards} />

        {/* where the line starts: today */}
        <p className="pl-14 pb-6 text-[12px] uppercase tracking-[0.25em] text-white/60">
          Now · {profile.locationLine2}
        </p>

        <div className="space-y-10">
          {experience.map((job, i) => {
            return (
              <div
                key={job.company}
                ref={(el) => {
                  cards.current[i] = el;
                }}
                className="station-card relative pl-14"
              >
                <div className="card sketch-box p-5 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-medium text-white">{job.role}</h3>
                      <p className="text-[14px] mt-0.5 text-white/60">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="tag">{job.period}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((pt, j) => (
                      <li key={j} className="flex gap-2.5 text-[15px] text-white/75 leading-[1.7]">
                        <span aria-hidden className="shrink-0 rounded-full bg-white/40" style={{ width: 5, height: 5, marginTop: '0.72em' }} />
                        <span>{renderBold(pt)}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
