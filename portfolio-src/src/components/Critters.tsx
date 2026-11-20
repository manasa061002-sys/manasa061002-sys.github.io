import type { CSSProperties } from 'react';

/**
 * Little sketchbook animals, in the same hand-drawn style as the doodle guide.
 * Pure SVG + CSS animation; everything stops for prefers-reduced-motion via the
 * global rule in index.css. Movement around the page is done by <Roamer>.
 */

type Tone = { ink: string; paper: string };
const DARK: Tone = { ink: 'rgba(255,255,255,0.85)', paper: '#000000' };
const LIGHT: Tone = { ink: '#1f2937', paper: '#ffffff' };

const line = (t: Tone) => ({
  stroke: t.ink,
  fill: t.paper,
  strokeWidth: 2.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

/** A sparrow in flight, wings flapping. Faces right; <Roamer> flips it. */
export function Bird({ dark = true, className = '' }: { dark?: boolean; className?: string }) {
  const t = dark ? DARK : LIGHT;
  return (
    <svg viewBox="0 0 70 50" className={`overflow-visible bird-bob ${dark ? 'ink-flip' : ''} ${className}`} aria-hidden>
      <g {...line(t)}>
        <path d="M14 26 L2 20 L6 30 Z" />
        <path d="M12 28 C 14 16, 34 12, 44 20 C 50 26, 46 38, 32 40 C 20 41, 12 36, 12 28 Z" />
        <path className="bird-flap" d="M18 24 C 22 6, 34 2, 38 20 C 30 24, 24 26, 18 24 Z" style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }} />
        <circle cx="48" cy="18" r="8" />
        <path d="M55 17 L63 19 L55 21 Z" fill="#f59e0b" />
        <circle cx="50" cy="16" r="1.4" fill={t.ink} stroke="none" />
        <path d="M28 40 L24 44 M34 40 L32 45" fill="none" />
      </g>
    </svg>
  );
}

/** Line colours for an animal on a dark or a light background. */
type ToneName = 'dark' | 'light';
const TONE: Record<ToneName, Tone> = {
  dark: { ink: '#f5f5f4', paper: '#000000' },
  light: { ink: '#111827', paper: '#ffffff' },
};

/**
 * A white monkey sitting down, drawn like a sketchbook doodle: round head,
 * heart-shaped face, curled tail. Faces the viewer.
 */
export function Monkey({ className = '' }: { className?: string }) {
  const ink = '#1f2937';
  const fur = '#fafaf9';
  const s = { stroke: ink, strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 100 120" className={`overflow-visible ${className}`} aria-hidden>
      <g {...s}>
        {/* tail: an outlined tube that curls up behind */}
        <g className="monkey-tail" style={{ transformBox: 'view-box', transformOrigin: '34px 100px' }}>
          <path d="M34 100 C 14 100, 8 84, 10 66 C 11 56, 20 52, 23 58" fill="none" strokeWidth={8.5} />
          <path d="M34 100 C 14 100, 8 84, 10 66 C 11 56, 20 52, 23 58" fill="none" stroke={fur} strokeWidth={4} />
        </g>
        {/* body */}
        <path d="M50 60 C 30 60, 24 82, 27 98 C 29 110, 71 110, 73 98 C 76 82, 70 60, 50 60 Z" fill={fur} />
        {/* arms resting on the knees */}
        <path d="M35 68 C 29 78, 31 90, 39 94" fill="none" />
        <path d="M65 68 C 71 78, 69 90, 61 94" fill="none" />
        <path d="M39 93 C 43 91, 47 93, 45 97 C 43 100, 38 100, 36 97" fill={fur} />
        <path d="M61 93 C 57 91, 53 93, 55 97 C 57 100, 62 100, 64 97" fill={fur} />
        {/* feet */}
        <path d="M30 103 C 23 107, 26 114, 34 113 L 45 112 C 47 109, 44 105, 38 105" fill={fur} />
        <path d="M70 103 C 77 107, 74 114, 66 113 L 55 112 C 53 109, 56 105, 62 105" fill={fur} />
        {/* ears + head */}
        <circle cx="25" cy="36" r="9" fill={fur} />
        <circle cx="75" cy="36" r="9" fill={fur} />
        <path d="M27 31 C 22 33, 22 39, 27 41 M73 31 C 78 33, 78 39, 73 41" fill="none" strokeWidth={1.8} />
        <circle cx="50" cy="38" r="24" fill={fur} />
        {/* heart-shaped face */}
        <path d="M50 33 C 46 24, 32 24, 32 35 C 32 46, 40 54, 50 55 C 60 54, 68 46, 68 35 C 68 24, 54 24, 50 33 Z" fill="#ffffff" strokeWidth={2} />
        <g className="owl-blink" style={{ transformBox: 'view-box', transformOrigin: '50px 37px' }}>
          <circle cx="43" cy="37" r="2.6" fill={ink} stroke="none" />
          <circle cx="57" cy="37" r="2.6" fill={ink} stroke="none" />
        </g>
        <circle cx="48" cy="44" r="0.9" fill={ink} stroke="none" />
        <circle cx="52" cy="44" r="0.9" fill={ink} stroke="none" />
        <path d="M44.5 48 C 47 51, 53 51, 55.5 48" fill="none" strokeWidth={1.8} />
      </g>
    </svg>
  );
}

/**
 * A chameleon: curled tail, helmet head, turret eye and gripping feet.
 * Shifts colour very slowly. Faces right.
 */
export function Chameleon({ className = '' }: { className?: string }) {
  const ink = '#14532d';
  return (
    <svg viewBox="0 0 150 80" className={`overflow-visible ${className}`} aria-hidden>
      <defs>
        <linearGradient id="cham-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bbf7d0" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      <g className="chameleon-hue" stroke={ink} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        {/* legs (behind the body), stepping slowly */}
        <g className="cham-leg-a" style={{ transformBox: 'view-box', transformOrigin: '52px 50px' }}>
          <path d="M52 50 L46 63" fill="none" strokeWidth={5} />
          <path d="M52 50 L46 63" fill="none" stroke="#4ade80" strokeWidth={2} />
          <path d="M40 66 L46 63 L49 68" fill="none" strokeWidth={2.4} />
        </g>
        <g className="cham-leg-b" style={{ transformBox: 'view-box', transformOrigin: '88px 50px' }}>
          <path d="M88 50 L94 63" fill="none" strokeWidth={5} />
          <path d="M88 50 L94 63" fill="none" stroke="#4ade80" strokeWidth={2} />
          <path d="M90 68 L94 63 L100 66" fill="none" strokeWidth={2.4} />
        </g>
        {/* the famous curled tail */}
        <path d="M40 48 C 26 54, 12 50, 12 39 C 12 29, 25 26, 29 33 C 32 39, 24 43, 21 38" fill="none" strokeWidth={7} />
        <path d="M40 48 C 26 54, 12 50, 12 39 C 12 29, 25 26, 29 33 C 32 39, 24 43, 21 38" fill="none" stroke="#86efac" strokeWidth={3.2} />
        {/* body */}
        <path d="M38 48 C 38 32, 58 22, 80 24 C 94 26, 100 38, 98 48 C 88 56, 50 58, 38 48 Z" fill="url(#cham-skin)" />
        <path d="M56 27 C 53 37, 55 47, 59 54 M70 25 C 67 35, 69 46, 73 54 M84 26 C 82 35, 83 44, 86 51" fill="none" stroke="#16a34a" strokeWidth={1.4} opacity={0.7} />
        <path d="M42 50 C 60 56, 80 54, 96 48" fill="none" stroke="#f0fdf4" strokeWidth={1.6} opacity={0.8} />
        {/* head with its helmet (casque) */}
        <path d="M93 30 C 96 18, 104 11, 108 13 C 118 19, 128 30, 134 40 C 126 47, 108 49, 97 46 Z" fill="url(#cham-skin)" />
        <path d="M134 40 C 124 43, 113 43, 104 40" fill="none" strokeWidth={1.6} />
        {/* turret eye */}
        <circle cx="115" cy="31" r="7.5" fill="#bbf7d0" />
        <circle cx="115" cy="31" r="4.4" fill="none" strokeWidth={1.2} />
        <circle className="chameleon-eye" cx="116" cy="31" r="2" fill={ink} stroke="none" />
        {/* tongue, flicked out now and then */}
        <g className="chameleon-tongue" style={{ transformBox: 'view-box', transformOrigin: '134px 40px' }}>
          <path d="M134 40 L150 38" fill="none" stroke="#f472b6" strokeWidth={1.8} />
          <circle cx="150" cy="38" r="2.4" fill="#f472b6" stroke="none" />
        </g>
      </g>
    </svg>
  );
}

/** A snail. Faces right. */
export function Snail({ className = '' }: { className?: string }) {
  const t = LIGHT;
  return (
    <svg viewBox="0 0 80 46" className={`overflow-visible ${className}`} aria-hidden>
      <g {...line(t)}>
        <g className="snail-squish" style={{ transformBox: 'view-box', transformOrigin: '40px 44px' }}>
          <path d="M6 42 C 10 34, 60 34, 66 30 L70 20 M66 30 L74 22 M8 42 L72 42 C 74 38, 72 34, 66 30" />
          <circle cx="70" cy="19" r="2" fill={t.ink} stroke="none" />
          <circle cx="75" cy="21" r="2" fill={t.ink} stroke="none" />
          <circle cx="34" cy="24" r="16" fill="#fbcfe8" />
          <path d="M34 24 m0 -3 a3 3 0 1 1 -0.1 0 M34 24 m0 -8 a8 8 0 1 1 -0.1 0 M34 24 m0 -12 a12 12 0 0 1 12 12" fill="none" />
        </g>
      </g>
    </svg>
  );
}

/** A busy bee buzzing along a figure-eight. Use `variant` and `style` for variety. */
export function Bee({ className = '', variant = 'a', style }: { className?: string; variant?: 'a' | 'b' | 'c'; style?: CSSProperties }) {
  const t = LIGHT;
  return (
    <div className={`bee-zone pointer-events-none ${className}`} aria-hidden>
      <div className={`bee-flight bee-path-${variant} w-[30px]`} style={style}>
        <svg viewBox="0 0 40 30" className="w-full h-auto overflow-visible">
          <g {...line(t)} strokeWidth={1.8}>
            <ellipse className="bee-wing" cx="16" cy="8" rx="6" ry="8" fill="#e0f2fe" style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }} />
            <ellipse className="bee-wing" cx="24" cy="8" rx="6" ry="8" fill="#e0f2fe" style={{ transformBox: 'fill-box', transformOrigin: '50% 100%', animationDelay: '0.05s' }} />
            <ellipse cx="20" cy="19" rx="13" ry="8" fill="#facc15" />
            <path d="M15 12 L15 26 M21 11 L21 27" fill="none" strokeWidth={3} />
            <circle cx="31" cy="17" r="1.4" fill={t.ink} stroke="none" />
            <path d="M7 19 L3 19" fill="none" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/** A honey pot with honey dripping over the rim. */
export function HoneyPot({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`overflow-visible ${className}`} aria-hidden>
      <g stroke="#1f2937" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22 C 4 34, 8 56, 30 56 C 52 56, 56 34, 48 22 Z" fill="#f59e0b" />
        <rect x="10" y="14" width="40" height="9" rx="3" fill="#fbbf24" />
        <path d="M14 23 C 16 30, 20 30, 21 24 C 23 33, 28 33, 29 24 C 31 29, 35 29, 37 24 C 39 35, 44 35, 46 23" fill="#fde047" />
        <path className="honey-drip" d="M40 30 L40 36" stroke="#fde047" strokeWidth={4} style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }} />
        <path d="M30 2 L30 20" fill="none" stroke="#a16207" strokeWidth={3} />
        <ellipse cx="30" cy="10" rx="6" ry="3" fill="#a16207" />
        <text x="30" y="46" textAnchor="middle" fontSize="10" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fill="#78350f" stroke="none">
          honey
        </text>
      </g>
    </svg>
  );
}

/** A black-and-white owl in round glasses (sketchbook style). Faces the viewer. */
export function GlassesOwl({ className = '', tone = 'dark' }: { className?: string; tone?: ToneName }) {
  const { ink, paper } = TONE[tone];
  return (
    <svg viewBox="0 0 80 80" className={`overflow-visible ${tone === 'dark' ? 'ink-flip' : ''} ${className}`} aria-hidden>
      <g stroke={ink} fill={paper} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        {/* wings */}
        <path className="owl-wing-l" d="M21 40 C 6 34, 4 54, 16 61 C 18 53, 20 47, 21 40 Z" style={{ transformBox: 'view-box', transformOrigin: '21px 42px' }} />
        <path className="owl-wing-r" d="M59 40 C 74 34, 76 54, 64 61 C 62 53, 60 47, 59 40 Z" style={{ transformBox: 'view-box', transformOrigin: '59px 42px' }} />
        {/* body with ear tufts */}
        <path d="M22 30 L19 12 L31 21 C 36 19, 44 19, 49 21 L61 12 L58 30 C 63 46, 58 66, 40 68 C 22 66, 17 46, 22 30 Z" />
        {/* chest feathers */}
        <path d="M33 53 l3 3 l3 -3 M41 53 l3 3 l3 -3 M37 60 l3 3 l3 -3" fill="none" strokeWidth={1.5} />
        {/* glasses */}
        <circle cx="31" cy="34" r="8.5" strokeWidth={2.6} />
        <circle cx="49" cy="34" r="8.5" strokeWidth={2.6} />
        <path d="M39.5 33 Q 40 31.5, 40.5 33 M22.5 33 L19 30.5 M57.5 33 L61 30.5" fill="none" strokeWidth={2.2} />
        <g className="owl-blink" style={{ transformBox: 'view-box', transformOrigin: '40px 35px' }}>
          <circle cx="32" cy="35" r="3" fill={ink} stroke="none" />
          <circle cx="50" cy="35" r="3" fill={ink} stroke="none" />
        </g>
        {/* beak + feet */}
        <path d="M37.5 43 L40 48.5 L42.5 43 Z" />
        <path d="M34 68 l-2 5 M36.5 68 l0 5 M43.5 68 l0 5 M46 68 l2 5" fill="none" strokeWidth={1.6} />
      </g>
    </svg>
  );
}

/**
 * An elephant that lifts its trunk and sprays an arc of water. Faces right.
 * `spray="tall"` sends the water in a high arc (over a big headline).
 */
export function Elephant({ className = '', tone = 'dark', spray = 'arc' }: { className?: string; tone?: ToneName; spray?: 'arc' | 'tall' }) {
  const { ink, paper } = TONE[tone];
  return (
    <svg viewBox="0 0 160 110" className={`overflow-visible ${tone === 'dark' ? 'ink-flip' : ''} ${className}`} aria-hidden>
      <g stroke={ink} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        {/* water spray: drops travel along an arc up and to the right */}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            className={spray === 'tall' ? 'spray-drop spray-tall' : 'spray-drop'}
            r={1.6 + (i % 3) * 0.8}
            fill={tone === 'dark' ? '#e0f2fe' : '#38bdf8'}
            stroke="none"
            style={{ animationDelay: `${i * 0.07}s` }}
          />
        ))}
        {/* tail */}
        <path className="cat-tail" d="M19 58 C 11 62, 9 70, 11 76" fill="none" style={{ transformBox: 'view-box', transformOrigin: '19px 58px' }} />
        {/* legs */}
        <path d="M30 80 L30 104 L42 104 L42 84 M70 84 L70 104 L82 104 L82 80" fill={paper} />
        {/* body */}
        <path d="M18 60 C 18 34, 48 26, 72 30 C 92 32, 100 50, 96 66 C 92 84, 30 90, 20 76 Z" fill={paper} />
        <path d="M33 101 L33 104 M37 101 L37 104 M73 101 L73 104 M77 101 L77 104" fill="none" strokeWidth={1.4} />
        {/* head */}
        <circle cx="100" cy="44" r="20" fill={paper} />
        {/* big ear */}
        <path d="M88 30 C 70 30, 70 62, 88 64 C 94 56, 94 38, 88 30 Z" fill={paper} />
        <path d="M84 38 C 78 42, 78 52, 84 56" fill="none" strokeWidth={1.4} />
        <circle cx="106" cy="40" r="2.2" fill={ink} stroke="none" />
        {/* trunk, raised to spray (an outlined tube) */}
        <g className="elephant-trunk" style={{ transformBox: 'view-box', transformOrigin: '116px 52px' }}>
          <path d="M116 52 C 128 54, 132 40, 128 28 C 126 22, 132 18, 136 22" fill="none" strokeWidth={10} />
          <path d="M116 52 C 128 54, 132 40, 128 28 C 126 22, 132 18, 136 22" fill="none" stroke={paper} strokeWidth={5.6} />
        </g>
        {/* tusk */}
        <path d="M112 58 C 118 64, 124 62, 126 58" fill={paper} strokeWidth={1.6} />
      </g>
    </svg>
  );
}

/* ---- the cat ---- */

const COAT = '#111827';

/** One cat leg: an outlined tube with a paw; `phase` (0–1) sets its place in the walk cycle. */
function CatLeg({ x, ink, phase, walking }: { x: number; ink: string; phase?: number; walking: boolean }) {
  return (
    <g
      className={walking ? 'cat-step' : undefined}
      style={walking ? { transformBox: 'view-box', transformOrigin: `${x}px 38px`, animationDelay: `${-(phase ?? 0) * 0.9}s` } : undefined}
    >
      <path d={`M${x} 38 L${x} 65 L${x + 4} 66`} fill="none" stroke={ink} strokeWidth={7} />
      <path d={`M${x} 38 L${x} 65 L${x + 4} 66`} fill="none" stroke={COAT} strokeWidth={4} />
    </g>
  );
}

function CatBody({ ink, walking }: { ink: string; walking: boolean }) {
  return (
    <>
      {/* far legs, a little faded for depth */}
      <g opacity={0.7}>
        <CatLeg x={36} ink={ink} phase={0.5} walking={walking} />
        <CatLeg x={82} ink={ink} phase={0.75} walking={walking} />
      </g>
      <CatLeg x={42} ink={ink} phase={0} walking={walking} />
      <CatLeg x={88} ink={ink} phase={0.25} walking={walking} />
      {/* tail, held up with a soft curl */}
      <g className="cat-tail" style={{ transformBox: 'view-box', transformOrigin: '30px 32px' }}>
        <path d="M30 32 C 18 30, 12 20, 16 8 C 17 5, 20 5, 21 8" fill="none" stroke={ink} strokeWidth={7} />
        <path d="M30 32 C 18 30, 12 20, 16 8 C 17 5, 20 5, 21 8" fill="none" stroke={COAT} strokeWidth={4} />
      </g>
      {/* body */}
      <path d="M30 30 C 38 22, 74 21, 88 26 C 96 29, 97 40, 89 44 C 75 47, 42 47, 32 44 C 25 41, 25 34, 30 30 Z" fill={COAT} stroke={ink} strokeWidth={2} />
    </>
  );
}

const CAT_HEAD = 'M86 30 C 85 20, 90 14, 96 14 L98 5 L103 12 L107 12 L113 5 L113 15 C 118 21, 115 31, 105 32 C 97 33, 88 34, 86 30 Z';

/** A black cat walking, legs in a real four-beat walk. Faces right. */
export function WalkingCat({ className = '', tone = 'light' }: { className?: string; tone?: ToneName }) {
  const ink = tone === 'dark' ? '#e7e5e4' : '#111827';
  return (
    <svg viewBox="0 0 122 72" className={`overflow-visible ${className}`} aria-hidden>
      <g strokeLinecap="round" strokeLinejoin="round">
        <g className="cat-walk-bob">
          <CatBody ink={ink} walking />
          <g className="cat-head-bob" style={{ transformBox: 'view-box', transformOrigin: '88px 30px' }}>
            <path d={CAT_HEAD} fill={COAT} stroke={ink} strokeWidth={2} />
            <ellipse cx="101" cy="21" rx="1.7" ry="2.2" fill="#fde047" />
            <ellipse cx="108" cy="21" rx="1.7" ry="2.2" fill="#fde047" />
            <path d="M111 26 L120 24 M111 27.5 L120 29" fill="none" stroke={ink} strokeWidth={0.8} opacity={0.7} />
          </g>
        </g>
      </g>
    </svg>
  );
}

/** The same cat stopped, head lowered, licking. Faces right. */
export function LickingCat({ className = '', tone = 'light' }: { className?: string; tone?: ToneName }) {
  const ink = tone === 'dark' ? '#e7e5e4' : '#111827';
  return (
    <svg viewBox="0 0 122 72" className={`overflow-visible ${className}`} aria-hidden>
      <g strokeLinecap="round" strokeLinejoin="round">
        <CatBody ink={ink} walking={false} />
        <g transform="rotate(34 88 30)">
          <g className="cat-lick-head" style={{ transformBox: 'view-box', transformOrigin: '88px 30px' }}>
            <path d={CAT_HEAD} fill={COAT} stroke={ink} strokeWidth={2} />
            <path d="M99 21 q2 2 4 0 M106 21 q2 2 4 0" fill="none" stroke="#e5e7eb" strokeWidth={1.3} />
            <path className="cat-tongue" d="M109 31 q2 7 4 0 Z" fill="#f472b6" stroke="#be185d" strokeWidth={1} style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }} />
          </g>
        </g>
      </g>
    </svg>
  );
}
