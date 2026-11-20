import { useId, useMemo, type ReactNode } from 'react';

/**
 * Moves a little animal around its parent along a loop of points, with CSS
 * keyframes only (transform-based, so it stays cheap).
 *
 * Points are percentages of the parent box (x across, y down). The parent must
 * be `position: relative`. Modes:
 * - 'crawl': feet stay on the path and the body turns with it (walls, lines).
 * - 'fly':   only flips left/right with the direction of travel.
 * - 'jump':  like fly, but each move is a hop with an arc.
 * `hold` pauses at a point (seconds); `holdChildren`, if given, is shown instead
 * of `children` while paused (e.g. a cat licking instead of walking). Under prefers-reduced-motion the global
 * rule in index.css stops all animation, so the animal just sits at the start.
 */

/** `leap`: the move from this point to the next is a quick jump (level, in an arc) instead of a walk. */
export type RoamPoint = { x: number; y: number; hold?: number; leap?: boolean };

type Props = {
  points: RoamPoint[];
  /** Seconds to travel 100% of the parent's width. */
  speed?: number;
  mode?: 'crawl' | 'fly' | 'jump';
  /** Parent width ÷ height, so diagonal speeds and angles look right. */
  aspect?: number;
  /** Hop height in px (jump mode). */
  arc?: number;
  className?: string;
  children: ReactNode;
  holdChildren?: ReactNode;
};

const pct = (n: number) => `${n.toFixed(3)}%`;
// Positions use container units (1cqw = 1% of the roaming area), so only a
// zero-size point moves and nothing ever pokes out of the page.
const cq = (x: number, y: number) => `translate(${x.toFixed(3)}cqw, ${y.toFixed(3)}cqh)`;

export default function Roamer({ points, speed = 20, mode = 'crawl', aspect = 1.6, arc = 50, className = '', children, holdChildren }: Props) {
  const raw = useId();
  const name = `roam${raw.replace(/[^a-zA-Z0-9]/g, '')}`;

  const { css, total } = useMemo(() => {
    const n = points.length;
    // Segment i goes from point i to point i+1 (looping back to the start).
    const segs = points.map((p, i) => {
      const q = points[(i + 1) % n];
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      // Length in "width units": y percentages are shorter by the aspect ratio.
      const len = Math.hypot(dx, dy / aspect);
      let orient: string;
      if (mode === 'crawl' && !p.leap) {
        const ang = (Math.atan2(dy / aspect, Math.abs(dx)) * 180) / Math.PI;
        orient = dx < 0 ? `scaleX(-1) rotate(${ang.toFixed(1)}deg)` : `rotate(${ang.toFixed(1)}deg)`;
      } else {
        orient = dx < 0 ? 'scaleX(-1)' : 'scaleX(1)';
      }
      const travel = p.leap ? 0.7 : (len / 100) * speed;
      return { p, q, travel, hold: p.hold ?? 0, orient, hops: mode === 'jump' || !!p.leap };
    });
    const T = segs.reduce((s, g) => s + g.hold + g.travel, 0) || 1;

    let t = 0;
    const pos: string[] = [];
    const ori: string[] = [];
    const hop: string[] = [];
    const mv: string[] = []; // moving pose visible?
    const hd: string[] = []; // holding pose visible?
    segs.forEach((g, i) => {
      const a = (t / T) * 100;
      const b = ((t + g.hold) / T) * 100;
      const c = ((t + g.hold + g.travel) / T) * 100;
      const at = cq(g.p.x, g.p.y);
      pos.push(`${pct(a)} { transform: ${at}; }`, `${pct(b)} { transform: ${at}; }`);
      ori.push(`${pct(a)} { transform: ${g.orient}; }`, `${pct(Math.max(a, c - 0.4))} { transform: ${g.orient}; }`);
      const e = Math.min(b, a + 0.05);
      mv.push(`${pct(a)} { opacity: 0; }`, `${pct(Math.max(a, b - 0.05))} { opacity: ${g.hold ? 0 : 1}; }`, `${pct(b)} { opacity: 1; }`, `${pct(Math.max(b, c - 0.05))} { opacity: 1; }`);
      hd.push(`${pct(a)} { opacity: ${g.hold ? 1 : 0}; }`, `${pct(e)} { opacity: ${g.hold ? 1 : 0}; }`, `${pct(Math.max(a, b - 0.05))} { opacity: ${g.hold ? 1 : 0}; }`, `${pct(b)} { opacity: 0; }`);
      hop.push(`${pct(b)} { transform: translateY(0); }`, `${pct((b + c) / 2)} { transform: translateY(-${g.hops ? arc : 0}px); }`, `${pct(c)} { transform: translateY(0); }`);
      t += g.hold + g.travel;
      if (i === segs.length - 1) {
        pos.push(`100% { transform: ${cq(g.q.x, g.q.y)}; }`);
        ori.push(`100% { transform: ${segs[0].orient}; }`);
      }
    });

    const css = `
@keyframes ${name}-pos { ${pos.join(' ')} }
@keyframes ${name}-ori { ${ori.join(' ')} }
@keyframes ${name}-hop { 0% { transform: translateY(0); } ${hop.join(' ')} }
.${name}-track { animation: ${name}-pos ${T.toFixed(2)}s linear infinite; }
.${name}-ori { animation: ${name}-ori ${T.toFixed(2)}s linear infinite; }
.${name}-hop { animation: ${name}-hop ${T.toFixed(2)}s ease-in-out infinite; }
@keyframes ${name}-mv { ${mv.join(' ')} 100% { opacity: ${segs[0].hold ? 0 : 1}; } }
@keyframes ${name}-hd { ${hd.join(' ')} 100% { opacity: ${segs[0].hold ? 1 : 0}; } }
.${name}-mv { animation: ${name}-mv ${T.toFixed(2)}s steps(1, end) infinite; }
.${name}-hd { animation: ${name}-hd ${T.toFixed(2)}s steps(1, end) infinite; position: absolute; inset: 0; }`;
    return { css, total: T };
  }, [points, speed, mode, aspect, arc, name]);

  return (
    <div
      className={`roamer absolute inset-0 pointer-events-none ${className}`}
      style={{ containerType: 'size' }}
      aria-hidden
      data-loop={total.toFixed(1)}
    >
      <style>{css}</style>
      <div className={`${name}-track absolute left-0 top-0 h-0 w-0`}>
        {/* anchor: feet (or, when flying, the middle) sit on the path point */}
        <div className="absolute left-0 top-0" style={{ transform: mode === 'fly' ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)' }}>
          <div className={`${name}-ori`} style={{ transformOrigin: mode === 'fly' ? '50% 50%' : '50% 100%' }}>
            <div className={`relative ${mode === 'jump' || points.some((p) => p.leap) ? `${name}-hop` : ''}`}>
              {holdChildren ? (
                <>
                  <div className={`${name}-mv`}>{children}</div>
                  <div className={`${name}-hd`}>{holdChildren}</div>
                </>
              ) : (
                children
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
