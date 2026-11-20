import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { skillEvidence } from '@/data/skillEvidence';
import { scrollToEl } from '@/lib/site';
import { Bee } from '@/components/Critters';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';

/**
 * Skills that prove themselves. Hovering, focusing or tapping a skill sends
 * the bees to every place on the page where it was used (from
 * data/skillEvidence.ts): each spot gets a highlight and a bee buzzing on it,
 * and a "Seen in" list appears under the skill with links to jump there.
 */

/** Which skill is active, shared by all chips in the Skills section. */
export function useActiveSkill() {
  const [active, set] = useState<string | null>(null);
  const [from, setFrom] = useState<DOMRect | null>(null);
  const setActive = (s: string | null, rect?: DOMRect) => {
    setFrom(rect ?? null);
    set(s);
  };
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && set(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);
  return { active, setActive, from };
}

/** A skill chip. `tone` holds the chip's colour classes. */
export function SkillChip({
  skill,
  tone,
  active,
  setActive,
}: {
  skill: string;
  tone: string;
  active: string | null;
  setActive: (s: string | null, from?: DOMRect) => void;
}) {
  const on = active === skill;
  const hover = useRef(0);
  const n = skillEvidence[skill]?.length ?? 0;
  return (
    <button
      type="button"
      aria-pressed={on}
      aria-describedby={on ? 'seen-in' : undefined}
      title={n ? `Show where this was used (${n})` : 'Nothing linked yet'}
      onClick={(e) => setActive(on ? null : skill, e.currentTarget.getBoundingClientRect())}
      onFocus={(e) => !on && setActive(skill, e.currentTarget.getBoundingClientRect())}
      onPointerEnter={(e) => {
        if (e.pointerType !== 'mouse') return; // taps use click
        const rect = e.currentTarget.getBoundingClientRect();
        window.clearTimeout(hover.current);
        hover.current = window.setTimeout(() => setActive(skill, rect), 180);
      }}
      onPointerLeave={() => window.clearTimeout(hover.current)}
      className={`text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${tone} ${
        on ? '!border-yellow-500 ring-2 ring-yellow-300/60' : ''
      }`}
    >
      {skill}
      {n > 0 && (
        <span aria-hidden className="ml-1.5 text-[10px] text-gray-400 tabular-nums">
          {n}
        </span>
      )}
    </button>
  );
}

/** A bee that settles on a highlighted spot. */
function SpotBee() {
  return (
    <span className="evidence-bee" aria-hidden>
      <Bee className="w-16 h-10" variant="c" style={{ animationDuration: '2.6s' }} />
    </span>
  );
}

/** The "Seen in" list, plus the highlights and bees out on the page. */
export function SeenIn({ skill, onClose, chipFrom }: { skill: string; onClose: () => void; chipFrom?: DOMRect | null }) {
  const items = skillEvidence[skill] ?? [];
  const [spots, setSpots] = useState<HTMLElement[]>([]);
  const reduced = useReducedMotionSafe();

  // Highlight every spot (a spot can be listed for more than one reason).
  useEffect(() => {
    const els = [...new Set(items.map((e) => document.querySelector<HTMLElement>(`[data-evidence="${e.target}"]`)))].filter(
      (x): x is HTMLElement => !!x,
    );
    els.forEach((el) => {
      el.classList.add('evidence-hit');
      if (getComputedStyle(el).position === 'static') el.classList.add('evidence-rel');
    });
    setSpots(els);
    return () => els.forEach((el) => el.classList.remove('evidence-hit', 'evidence-rel'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skill]);

  const jump = (target: string) => {
    const el = document.querySelector(`[data-evidence="${target}"]`);
    if (el) scrollToEl(el);
  };

  return (
    <div id="seen-in" role="status" className="mt-4 rounded-2xl border border-yellow-300/70 bg-yellow-50/70 px-4 py-3 text-[13px] text-gray-700">
      <div className="flex items-start justify-between gap-3">
        <p className="font-medium text-gray-900">
          <span aria-hidden>🐝 </span>
          {skill}: seen in
        </p>
        <button type="button" onClick={onClose} aria-label="Call the bees back" className="text-gray-400 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded">
          <X className="h-4 w-4" />
        </button>
      </div>
      {items.length ? (
        <ul className="mt-2 space-y-1">
          {items.map((e) => (
            <li key={e.target + e.label}>
              <button type="button" onClick={() => jump(e.target)} className="text-left underline decoration-yellow-400 decoration-2 underline-offset-2 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded">
                {e.label}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-1 text-gray-500">Nothing linked yet.</p>
      )}
      {/* bees on every spot */}
      {spots.map((el, i) => createPortal(<SpotBee key={i} />, el))}
      {/* and a few leaving the chip to go there */}
      {!reduced && chipFrom && items.length > 0 && <BeeLaunch from={chipFrom} key={skill} />}
    </div>
  );
}

/** Three bees zooming off from the chip (purely decorative). */
function BeeLaunch({ from }: { from: DOMRect }) {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setGone(true), 1400);
    return () => window.clearTimeout(t);
  }, []);
  if (gone) return null;
  return createPortal(
    <div className="fixed inset-0 z-[45] pointer-events-none" aria-hidden>
      {[-1, 0, 1].map((k) => (
        <span
          key={k}
          className="bee-launch absolute w-8"
          style={{ left: from.left + from.width / 2, top: from.top, '--dx': `${k * 160}px`, '--dy': `${-260 - Math.abs(k) * 60}px`, animationDelay: `${(k + 1) * 0.08}s` } as React.CSSProperties}
        >
          <svg viewBox="0 0 40 30" className="w-full h-auto">
            <ellipse cx="16" cy="8" rx="6" ry="8" fill="#e0f2fe" stroke="#1f2937" strokeWidth="1.8" />
            <ellipse cx="24" cy="8" rx="6" ry="8" fill="#e0f2fe" stroke="#1f2937" strokeWidth="1.8" />
            <ellipse cx="20" cy="19" rx="13" ry="8" fill="#facc15" stroke="#1f2937" strokeWidth="1.8" />
            <path d="M15 12 L15 26 M21 11 L21 27" stroke="#1f2937" strokeWidth="3" />
          </svg>
        </span>
      ))}
    </div>,
    document.body,
  );
}
