import { useRef } from 'react';
import { m, useInView } from 'motion/react';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';

/**
 * A before/after number as a small line chart that draws itself when it
 * scrolls into view (same look as the Bloomberg chart in About: thin lines,
 * green for the improvement, tabular numbers). Only the two real data points
 * are plotted: nothing is invented in between.
 *
 * `better` says which direction is good, so a drop (e.g. minutes saved) is
 * also drawn in green.
 */
// Tailwind needs to see these whole: stroke-white/10 stroke-white/25 fill-white/70 fill-white/40 text-white/50
// stroke-gray-900/10 stroke-gray-900/25 fill-gray-900/70 fill-gray-900/40 text-gray-900/50
export default function MetricChart({
  title,
  from,
  to,
  max,
  better = 'up',
  summary,
  onLight = false,
  className = '',
}: {
  title: string;
  from: { value: number; label: string; at: string };
  to: { value: number; label: string; at: string };
  /** Top of the y-axis. */
  max: number;
  better?: 'up' | 'down';
  /** Full sentence for screen readers. */
  summary: string;
  /** Sits on a light background (the white half) rather than the black half. */
  onLight?: boolean;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotionSafe();
  const show = inView || reduced;

  const W = 220;
  const H = 70;
  const x0 = 26;
  const x1 = W - 34;
  const y = (v: number) => 8 + (1 - v / max) * (H - 22);
  const p0 = { x: x0, y: y(from.value) };
  const p1 = { x: x1, y: y(to.value) };
  const good = better === 'up' ? to.value >= from.value : to.value <= from.value;
  const color = good ? '#22c55e' : '#ef4444';
  // Ink classes follow the theme: "white" ink in the dark half, "gray-900" in the light half.
  const ink = onLight ? 'gray-900' : 'white';
  const t = (d: number) => (reduced ? { duration: 0 } : { duration: 0.5, delay: d });

  return (
    <figure className={`mt-4 max-w-[260px] ${className}`}>
      <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full h-auto overflow-visible" role="img" aria-label={summary}>
        {/* grid */}
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line key={f} x1={x0 - 6} x2={x1 + 6} y1={y(max * f)} y2={y(max * f)} className={`stroke-${ink}/10`} strokeWidth={1} />
        ))}
        <line x1={x0 - 6} x2={x1 + 6} y1={y(0)} y2={y(0)} className={`stroke-${ink}/25`} strokeWidth={1} />
        {/* the line draws itself */}
        <m.path
          d={`M${p0.x},${p0.y} L${p1.x},${p1.y}`}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={{ pathLength: show ? 1 : 0 }}
          transition={reduced ? { duration: 0 } : { duration: 1.1, ease: 'easeInOut', delay: 0.25 }}
        />
        {/* the two real data points */}
        <m.circle cx={p0.x} cy={p0.y} r={3.2} fill={color} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: show ? 1 : 0 }} transition={t(0.1)} />
        <m.circle cx={p1.x} cy={p1.y} r={3.6} fill={color} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: show ? 1 : 0 }} transition={t(1.3)} />
        <m.text x={p0.x} y={p0.y - 8} textAnchor="middle" fontSize="11" className={`fill-${ink}/70`} style={{ fontVariantNumeric: 'tabular-nums' }} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: show ? 1 : 0 }} transition={t(0.1)}>
          {from.label}
        </m.text>
        <m.text x={p1.x} y={p1.y - 9} textAnchor="middle" fontSize="12" fontWeight={600} fill={color} style={{ fontVariantNumeric: 'tabular-nums' }} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: show ? 1 : 0 }} transition={t(1.3)}>
          {to.label}
        </m.text>
        <text x={x0} y={H - 2} textAnchor="middle" fontSize="9" className={`fill-${ink}/40`}>{from.at}</text>
        <text x={x1} y={H - 2} textAnchor="middle" fontSize="9" className={`fill-${ink}/40`}>{to.at}</text>
      </svg>
      <figcaption className={`mt-1 text-[11px] uppercase tracking-[0.15em] text-${ink}/50`}>{title}</figcaption>
    </figure>
  );
}
