import { useEffect, useRef, type ReactNode } from 'react';
import type { Critique } from '@/data/portfolio';

/**
 * Devil's advocate: a tiny horned button on each job and project flips its
 * card over to my own honest critique of the work. The hidden side is made
 * inert, so keyboard and screen-reader users only ever meet the visible one.
 * With reduced motion the sides swap without the 3D turn.
 */

/** A little horned face. */
export function DevilIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 9 C 4 5, 5 3, 7 2 C 7 4, 7.5 6, 9 7.5" />
      <path d="M19 9 C 20 5, 19 3, 17 2 C 17 4, 16.5 6, 15 7.5" />
      <circle cx="12" cy="14" r="7.5" />
      <path d="M9 13 l1.6 1 M15 13 l-1.6 1" />
      <path d="M9.5 17.5 Q 12 19.5 14.5 17.5" />
    </svg>
  );
}

/** The horned button. */
export function DevilButton({ flipped, onClick, label, className = '' }: { flipped: boolean; onClick: () => void; label: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={flipped}
      aria-label={flipped ? `Back to ${label}` : `Devil's advocate: my critique of ${label}`}
      title={flipped ? 'Back to the card' : "Devil's advocate"}
      className={`devil-btn inline-flex h-7 w-7 items-center justify-center rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${className}`}
    >
      <DevilIcon className="h-4 w-4" />
    </button>
  );
}

/** Make a subtree unreachable (keyboard, screen readers) while it is the hidden side. */
function useInert(ref: React.RefObject<HTMLElement>, on: boolean) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (on) el.setAttribute('inert', '');
    else el.removeAttribute('inert');
  }, [ref, on]);
}

/** A card with a front and a back that turns over when `flipped`. */
export function FlipCard({ flipped, front, back, className = '' }: { flipped: boolean; front: ReactNode; back: ReactNode; className?: string }) {
  const f = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  useInert(f, flipped);
  useInert(b, !flipped);
  return (
    <div className={`flip ${className}`}>
      <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
        <div ref={f} className="flip-face flip-front" aria-hidden={flipped}>
          {front}
        </div>
        <div ref={b} className="flip-face flip-back" aria-hidden={!flipped}>
          {back}
        </div>
      </div>
    </div>
  );
}

/** The back of a card: the critique (or a note that it isn't written yet). */
export function CritiqueBack({ critique, title, onBack, ink = 'white' }: { critique: Critique; title: string; onBack: () => void; ink?: 'white' | 'gray-900' }) {
  const strong = ink === 'white' ? 'text-white' : 'text-gray-900';
  const soft = ink === 'white' ? 'text-white/60' : 'text-gray-600';
  const faint = ink === 'white' ? 'text-white/40' : 'text-gray-400';
  const empty = !critique.counterpoint && !critique.differently;
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <p className={`text-[11px] uppercase tracking-[0.2em] ${faint}`}>Devil's advocate</p>
        <DevilButton flipped onClick={onBack} label={title} className={ink === 'white' ? 'border-white/20 text-white/70' : 'border-gray-300 text-gray-600'} />
      </div>
      <h3 className={`mt-2 font-serif text-2xl ${strong}`}>{title}</h3>
      {empty ? (
        <p className={`mt-4 text-[14px] italic ${faint}`}>Critique not written yet.</p>
      ) : (
        <dl className="mt-4 space-y-4 text-[14px] leading-[1.7]">
          {critique.counterpoint && (
            <div>
              <dt className={`font-medium ${strong}`}>Counterpoint</dt>
              <dd className={soft}>{critique.counterpoint}</dd>
            </div>
          )}
          {critique.differently && (
            <div>
              <dt className={`font-medium ${strong}`}>What I'd do differently</dt>
              <dd className={soft}>{critique.differently}</dd>
            </div>
          )}
        </dl>
      )}
    </div>
  );
}
