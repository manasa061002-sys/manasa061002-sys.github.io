import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';

/**
 * The opening story, played once per visit over the welcome screen.
 *
 * A blank page; the doodle girl draws herself line by line and tells how
 * Manasa was made (a flask, sugar, spice and everything nice, then Chemical X
 * and a photo of Manasa), gets a little flustered, and pops: she bursts into a
 * shower of huge confetti while the parent swaps in the name, whose letters
 * dance into place. She pops back up in her usual corner as the guide.
 * "Skip the dramatics" ends it at any point.
 *
 * The photo that pops out of the flask: Manasa on her birthday.
 */
const INTRO_PHOTO = '/images/opt/manasa-story-480.webp';

/** The confetti's colours: the name board's colourful letters, plus white. */
const CONFETTI_COLOURS = ['#9b2fd4', '#ff5ec4', '#e6f23b', '#7cc94a', '#ffcf5c', '#2fd0c4', '#ff5e8a', '#4f6bff', '#4fc3f7', '#ff4f9a', '#fff'];
const CONFETTI_COUNT = 140;

type Box = { left: number; top: number; width: number; height: number };
/** How long she swells up before she bursts. */
const SWELL_MS = 750;

/**
 * The girl, turned into huge confetti: the pieces start where her body was
 * (so she seems to break apart into them), fly out across the screen, then
 * tumble down.
 */
function Confetti({ from }: { from: Box }) {
  const pieces = useMemo(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = from.left + from.width / 2;
    const cy = from.top + from.height / 2;
    return Array.from({ length: CONFETTI_COUNT }, (_, i) => {
      // a spot inside her outline (an ellipse over her body)
      const a0 = Math.random() * Math.PI * 2;
      const r0 = Math.sqrt(Math.random());
      const x = cx + Math.cos(a0) * r0 * from.width * 0.42;
      const y = cy + Math.sin(a0) * r0 * from.height * 0.46;
      // fly outwards, away from her middle
      const angle = Math.atan2(y - cy, x - cx) + (Math.random() - 0.5) * 0.9;
      const power = 0.35 + Math.random() * 0.75;
      return {
        key: i,
        shape: ['is-dot', 'is-strip', ''][i % 3],
        style: {
          left: x,
          top: y,
          background: CONFETTI_COLOURS[i % CONFETTI_COLOURS.length],
          ['--s' as string]: `${14 + Math.random() * 22}px`,
          ['--dx' as string]: `${Math.cos(angle) * power * w * 0.55}px`,
          ['--dy' as string]: `${Math.sin(angle) * power * h * 0.5 - h * 0.12}px`,
          ['--fall' as string]: `${h * (0.55 + Math.random() * 0.5)}px`,
          ['--r' as string]: `${(Math.random() - 0.5) * 1080}deg`,
          animationDelay: `${Math.random() * 60}ms`,
          animationDuration: `${2.4 + Math.random() * 1.1}s`,
        } as CSSProperties,
      };
    });
  }, [from]);
  return (
    <div className="confetti" aria-hidden>
      {pieces.map((p) => (
        <span key={p.key} className={`confetti-piece ${p.shape}`} style={p.style} />
      ))}
    </div>
  );
}

type Prop = 'none' | 'flask' | 'ingredients' | 'chemx' | 'photo';
/** The flask's state: calm, taking ingredients, or bubbling up with Chemical X. */
type FlaskState = 'flask' | 'ingredients' | 'chemx';
/**
 * ask: the story waits here for the visitor to choose: skip or stay.
 * cheer: a big happy shout that pops in whole (not typed), and she jumps for joy.
 */
type Scene = { text?: string; prop?: Prop; mood?: 'happy' | 'flustered'; hold?: number; ask?: boolean; cheer?: boolean };

// The script (her words; punctuation tidied), one sentence to a speech bubble.
const SCENES: Scene[] = [
  { hold: 2600 }, // she draws herself
  { text: 'Hi, thank you for waking me up!' },
  { text: "I'll take you on a tour of Manasa's life." },
  { text: 'Do you want to skip the dramatics, or would you like to stay? (Pls stayy 🥹)', ask: true },
  { text: 'Yaayyy!', cheer: true, hold: 1400 }, // only reached by "I'll stay"
  { text: "Who is Manasa, you're asking?", prop: 'flask' },
  { text: "She's a bit of sugar, spice and everything nice.", prop: 'ingredients' },
  { text: 'But then there was also Chemical X…', prop: 'chemx', hold: 4800 },
  { text: '…and then came Manasa!!', prop: 'photo' },
  { text: 'She was a quirky young child who grew up not knowing what she wanted.', prop: 'photo' },
  { text: 'But her overly altruistic behaviour told us that she definitely wanted to help others one day.', prop: 'photo' },
  { text: 'But day one?' },
  { text: 'There is still nothing.' },
  { text: 'Wait, did I just overshare?', mood: 'flustered' },
  { text: "I'm starting to feel something right now…", mood: 'flustered' },
];

const TYPE_MS = 30; // per character
const READ_MS = 1500; // after the line is typed
const sceneMs = (s: Scene) => s.hold ?? (s.text ? s.text.length * TYPE_MS + READ_MS : 1200);

/** Text that types itself out. */
function Typed({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    const t = window.setInterval(() => setN((x) => (x >= text.length ? x : x + 1)), TYPE_MS);
    return () => window.clearInterval(t);
  }, [text]);
  return (
    <>
      <span aria-hidden>{text.slice(0, n)}</span>
      <span className="sr-only">{text}</span>
    </>
  );
}

/** The doodle girl (same drawing as the guide), drawn in line by line. */
function DrawnGirl({ mood }: { mood: 'happy' | 'flustered' }) {
  // Each stroke draws in turn (pathLength=1 lets one dash cover any path).
  let i = 0;
  const d = () => ({ style: { ['--d' as string]: `${0.15 + i++ * 0.16}s` }, pathLength: 1, className: 'draw-line' });
  return (
    <svg viewBox="0 0 120 160" className="h-auto w-full overflow-visible" aria-hidden>
      <g stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path {...d()} d="M60 16 C 76 15, 87 28, 86 43 C 85 59, 73 69, 59 68 C 44 68, 33 57, 34 42 C 35 27, 45 17, 60 16 Z" />
        <path {...d()} d="M36 36 C 40 20, 56 12, 70 15 C 79 17, 86 26, 86 37 M50 18 C 52 26, 47 31, 42 33 M62 16 C 63 24, 60 29, 56 31" />
        <path {...d()} d="M35 40 C 30 56, 31 70, 37 80 M85 40 C 90 56, 89 70, 83 80" />
        <circle {...d()} cx="51" cy="44" r="2.3" />
        <circle {...d()} cx="69" cy="44" r="2.3" />
        <path {...d()} d={mood === 'flustered' ? 'M54 57 Q57 54 60 57 Q63 60 66 57' : 'M53 55 Q60 60 67 55'} />
        <path {...d()} d="M60 68 L60 75" />
        <path {...d()} d="M46 76 C 55 74, 65 74, 74 76 L 78 113 C 66 115, 54 115, 42 113 Z" />
        <path {...d()} d="M54 76 L60 89 L66 76" />
        <path {...d()} d="M51 76 L57 99 M69 76 L63 99" />
        <path {...d()} d="M47 80 L35 104 M73 80 L85 104" />
        <path {...d()} d="M53 112 L50 142 L42 143 M67 112 L70 142 L78 143" />
      </g>
      {/* the eyes fill in once she is drawn */}
      <g className="draw-fill" fill="#fff">
        <circle cx="51" cy="44" r="2.3" />
        <circle cx="69" cy="44" r="2.3" />
      </g>
      {mood === 'flustered' && (
        <g className="intro-blush" fill="#fda4af" opacity="0.8">
          <ellipse cx="45" cy="52" rx="4" ry="2.4" />
          <ellipse cx="75" cy="52" rx="4" ry="2.4" />
        </g>
      )}
    </svg>
  );
}

/** The inside of the flask, so the rising liquid stays in the glass. */
const FLASK_INSIDE = 'M64 16 L64 66 L24 152 C 20 160, 26 166, 34 166 L126 166 C 134 166, 140 160, 136 152 L96 66 L96 16 Z';

/**
 * A lab flask, drawn simply. With Chemical X it shakes, boils harder, the
 * liquid climbs the neck and it bubbles up out of the top.
 */
function Flask({ state }: { state: FlaskState }) {
  const boiling = state === 'chemx';
  return (
    <svg viewBox="0 0 160 170" className={`h-auto w-full overflow-visible ${state === 'chemx' ? 'flask-boil' : ''}`} aria-hidden>
      <defs>
        <clipPath id="flask-inside">
          <path d={FLASK_INSIDE} />
        </clipPath>
      </defs>
      <g clipPath="url(#flask-inside)">
        {/* the liquid: low and calm, then rising up the neck */}
        <rect className={`flask-liquid ${boiling ? 'is-rising' : ''}`} x="0" y="0" width="160" height="166" fill="rgb(255 255 255 / 0.2)" />
      </g>
      <g stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M62 14 L62 66 L22 152 C 18 162, 24 168, 34 168 L126 168 C 136 168, 142 162, 138 152 L98 66 L98 14" />
        <path d="M54 14 L106 14" />
        {/* bubbles: a few when calm, lots and fast when boiling */}
        {Array.from({ length: boiling ? 9 : 4 }).map((_, b) => (
          <circle
            key={b}
            className={`intro-bubble ${boiling ? 'is-boiling' : ''}`}
            cx={boiling ? 40 + ((b * 23) % 80) : 60 + b * 13}
            cy={boiling ? 155 - (b % 3) * 10 : 150}
            r={2.5 + (b % 3)}
            style={{ animationDelay: `${b * (boiling ? 0.12 : 0.35)}s` }}
          />
        ))}
      </g>
      {/* foam bubbling up at the rim, and bubbles floating up out of it */}
      {boiling && (
        <g className="flask-overflow" fill="#fff">
          {[
            [66, 10, 7],
            [76, 5, 9],
            [88, 7, 8],
            [97, 11, 6],
            [80, -4, 6],
          ].map(([cx, cy, r], i) => (
            <circle key={i} className="flask-foam" cx={cx} cy={cy} r={r} style={{ ['--d' as string]: `${i * 0.08}s` }} />
          ))}
          {/* bubbles floating up out of the mouth */}
          {[
            [72, 2],
            [86, -2],
            [79, 6],
            [92, 4],
            [68, -4],
          ].map(([cx, cy], i) => (
            <circle key={`up-${i}`} className="flask-rise" cx={cx} cy={cy} r={2.5 + (i % 3)} fill="none" stroke="#fff" strokeWidth="1.8" style={{ ['--d' as string]: `${i * 0.22}s` }} />
          ))}
        </g>
      )}
      {/* sugar, spice and everything nice, dropping in */}
      {state === 'ingredients' && (
        <g stroke="#fff" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" fill="#000">
          <g className="intro-drop" style={{ animationDelay: '0s' }}>
            <rect x="66" y="-40" width="16" height="16" rx="2" transform="rotate(-12 74 -32)" />
          </g>
          <g className="intro-drop" style={{ animationDelay: '0.7s' }}>
            <path d="M78 -44 C 90 -40, 92 -24, 82 -16 C 80 -26, 76 -34, 70 -38 Z M78 -44 L82 -50" />
          </g>
          <g className="intro-drop" style={{ animationDelay: '1.4s' }}>
            <path d="M80 -14 C 70 -22, 66 -30, 71 -35 C 75 -39, 79 -36, 80 -32 C 81 -36, 85 -39, 89 -35 C 94 -30, 90 -22, 80 -14 Z" />
          </g>
        </g>
      )}
      {/* Chemical X: a little vial, tipping in */}
      {state === 'chemx' && (
        <g className="intro-vial" stroke="#fff" strokeWidth="2.6" strokeLinejoin="round" fill="#000">
          <rect x="112" y="-46" width="22" height="40" rx="4" />
          <path d="M117 -34 L129 -20 M129 -34 L117 -20" />
        </g>
      )}
    </svg>
  );
}

export default function IntroStory({ onPop, onDone, onSkip }: { onPop: () => void; onDone: () => void; onSkip: () => void }) {
  const [scene, setScene] = useState(0);
  const [popped, setPopped] = useState(false);
  const girl = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const stay = useRef<HTMLButtonElement>(null);
  const asking = !!SCENES[scene]?.ask;
  // keyboard focus: the story itself (so keys work), or "I'll stay" while she asks
  useEffect(() => {
    (asking ? stay : root).current?.focus({ preventScroll: true });
  }, [asking]);
  /** Keys: Enter, Space or → for the next line; Escape skips the story. */
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (popped) return;
    if (e.key === 'Escape') onSkip();
    else if ((e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') && e.target === e.currentTarget) {
      e.preventDefault();
      next();
    }
  };
  /** A tap or click anywhere on the story moves on to the next line. */
  const next = () => {
    // (the skip-or-stay question waits for an answer)
    if (!popped && scene < SCENES.length && !SCENES[scene].ask) setScene((x) => x + 1);
  };
  const s = SCENES[Math.min(scene, SCENES.length - 1)];
  const prop = s.prop ?? 'none';

  // Step through the script. After the last line: she swells up, bursts into
  // confetti, and only then do the name's letters jump around and settle.
  const [burst, setBurst] = useState<Box | null>(null);
  useEffect(() => {
    if (scene < SCENES.length) {
      if (s.ask) return;
      const t = window.setTimeout(() => setScene((x) => x + 1), sceneMs(s));
      return () => window.clearTimeout(t);
    }
    setPopped(true);
    const timers = [
      // 1. she swells and trembles, then bursts
      window.setTimeout(() => {
        const r = girl.current?.getBoundingClientRect();
        setBurst(r ? { left: r.left, top: r.top, width: r.width, height: r.height } : { left: window.innerWidth / 2 - 80, top: window.innerHeight / 2 - 120, width: 160, height: 240 });
      }, SWELL_MS),
      // 2. once the confetti has flown out, the letters start their dance
      window.setTimeout(onPop, SWELL_MS + 900),
      // 3. when they have settled, she pops back up in her corner as the guide
      window.setTimeout(onDone, SWELL_MS + 900 + 2700),
    ];
    return () => timers.forEach((t) => window.clearTimeout(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene]);

  return (
    // the whole screen is one big "next" target (keys: see onKey)
    <div
      ref={root}
      tabIndex={-1}
      className={`intro-story ${popped ? 'is-popped' : ''}`}
      role="region"
      aria-label="Opening story. Press Enter for the next line, or Escape to skip."
      onClick={next}
      onKeyDown={onKey}
    >
      <div className="intro-stage">
        <div ref={girl} className={`intro-girl ${s.mood === 'flustered' && !popped ? 'is-flustered' : ''} ${popped && !burst ? 'is-swelling' : ''} ${burst ? 'is-burst' : ''} ${s.cheer ? 'is-cheering' : ''}`}>
          <DrawnGirl mood={s.mood === 'flustered' ? 'flustered' : 'happy'} />
        </div>

        {/* hidden (not removed) when she pops, so she stays where she is */}
        {(
          <div className="intro-side" style={popped ? { visibility: 'hidden' } : undefined}>
            {s.text && !popped && (
              <p key={scene} className={`doodle-bubble intro-bubble-box ${s.cheer ? 'is-cheer' : ''}`} aria-live="polite">
                {s.cheer ? s.text : <Typed text={s.text} />}
              </p>
            )}
            {s.ask && !popped && (
              // the two answers come in once she has finished asking
              <div className="intro-choices" style={{ ['--after' as string]: `${s.text!.length * TYPE_MS}ms` }} onClick={(e) => e.stopPropagation()}>
                <button ref={stay} type="button" className="intro-choice is-stay" onClick={() => setScene((x) => x + 1)}>
                  I'll stay
                </button>
                <button type="button" className="intro-choice" onClick={onSkip}>
                  Skip the dramatics
                </button>
              </div>
            )}
            <div className="intro-prop">
              {(prop === 'flask' || prop === 'ingredients' || prop === 'chemx') && (
                <div className="intro-flask">
                  <Flask state={prop} />
                </div>
              )}
              {prop === 'photo' && (
                <div className="intro-photo">
                  <span className="intro-burst" aria-hidden />
                  <img src={INTRO_PHOTO} alt="Manasa on her birthday, with a slice of cake" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {!popped && scene > 0 && !s.ask && (
        <p className="intro-hint" aria-hidden>
          Tap anywhere to go faster
        </p>
      )}

      {burst && <Confetti from={burst} />}
    </div>
  );
}
