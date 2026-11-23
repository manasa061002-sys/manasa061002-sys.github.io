/**
 * Naive-style margin doodles for the paper half: flat bold colours, a thick
 * uneven marker line and a slight hand-drawn jitter (the "boiling line" of
 * hand-drawn animation). Purely decorative, hidden from screen readers and,
 * on small screens, hidden altogether so they never sit on the content.
 */
type Kind = 'daisy' | 'star' | 'heart' | 'squiggle' | 'cloud';

const INK = '#1c1917';

const SHAPES: Record<Kind, JSX.Element> = {
  daisy: (
    <g stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      {Array.from({ length: 7 }).map((_, i) => (
        <ellipse key={i} cx="30" cy="15" rx="7" ry="12" fill="#fff" transform={`rotate(${i * (360 / 7)} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="8" fill="#facc15" />
      <path d="M30 46 C 29 52, 31 56, 30 60" fill="none" />
    </g>
  ),
  star: (
    <path
      d="M30 5 L36 22 L54 23 L40 34 L45 52 L30 42 L15 52 L20 34 L6 23 L24 22 Z"
      fill="#fb7185"
      stroke={INK}
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
  ),
  heart: (
    <path
      d="M30 52 C 10 38, 4 26, 12 16 C 19 8, 28 12, 30 20 C 33 11, 42 8, 49 15 C 57 25, 50 38, 30 52 Z"
      fill="#f472b6"
      stroke={INK}
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
  ),
  squiggle: (
    <path
      d="M4 34 C 10 18, 18 18, 22 32 C 26 46, 34 46, 38 30 C 42 16, 50 16, 56 30"
      fill="none"
      stroke="#22c55e"
      strokeWidth="5"
      strokeLinecap="round"
    />
  ),
  cloud: (
    <path
      d="M16 42 C 6 42, 4 30, 13 27 C 12 17, 25 13, 30 21 C 35 12, 50 15, 48 27 C 57 28, 56 42, 46 42 Z"
      fill="#e0f2fe"
      stroke={INK}
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
  ),
};

export default function NaiveDoodle({ kind, className = '', delay = 0 }: { kind: Kind; className?: string; delay?: number }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`naive-doodle pointer-events-none absolute hidden lg:block ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    >
      {SHAPES[kind]}
    </svg>
  );
}
