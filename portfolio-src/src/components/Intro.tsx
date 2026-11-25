import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { m, type Easing } from 'motion/react';
import { profile } from '@/data/portfolio';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';
import { useScrollLock, useSite } from '@/lib/site';
import IntroStory from '@/components/IntroStory';
import { playMotion, type MotionKind } from '@/heroMotion';

/** How far (in px) the pointer's pull on a tile reaches. */
const REACH = 150;
/** How often the board switches to its next letter style. */
const FLIP_EVERY_MS = 5000;
/** Colourful styles stay up longer, so their five hops can take their time. */
const COLOUR_STAYS_MS = 6000;

/**
 * The board's letter styles. It alternates: one black-and-white style, then one
 * colourful style, then black and white again, and so on. Within each group the
 * styles are shuffled and every one is used before any comes round again.
 */
const MONO = ['plain', 'gothic', 'ornate', 'scandi', 'outline'] as const;
const COLOUR = ['colour', 'candy', 'ransom', 'drip', 'dots', 'lines'] as const;
type Look = (typeof MONO)[number] | (typeof COLOUR)[number];

/** Hands out a group's styles in a shuffled order, never the same one twice in a row. */
function bag<T>(items: readonly T[], shownFirst?: T) {
  // the style the board opens on waits for the next round
  let left: T[] = [...items].filter((x) => x !== shownFirst).sort(() => Math.random() - 0.5);
  let last: T | undefined = shownFirst;
  return (): T => {
    if (!left.length) {
      left = [...items].sort(() => Math.random() - 0.5);
      // a fresh shuffle must not start with the style just shown
      if (left[0] === last) left.push(left.shift()!);
    }
    last = left.shift()!;
    return last;
  };
}

/**
 * Each letter's colour on the colourful side of the board: a bright fill and a
 * second colour for its offset edge, in the spirit of a hand-drawn alphabet.
 */
const LETTER_COLOURS: Record<string, { fill: string; edge: string }> = {
  M: { fill: '#9b2fd4', edge: '#ff5ec4' },
  A: { fill: '#e6f23b', edge: '#7cc94a' },
  N: { fill: '#ffcf5c', edge: '#2fd0c4' },
  S: { fill: '#ffd166', edge: '#ff5e8a' },
  R: { fill: '#7b22b8', edge: '#4f6bff' },
  O: { fill: '#4fc3f7', edge: '#3d5afe' },
  H: { fill: '#55c8f5', edge: '#ff4f9a' },
};

/** The letters a tile rattles through, and how fast: the same as the section labels. */
const FLAP_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const STEP_MS = 75;

/**
 * One tile of the name board. Each time the board switches between white and
 * colourful letters, the tile clacks quickly through a run of letters (like a
 * departure board) and lands on its own letter in the new style. Tiles start
 * one after another along the name.
 */
function FlapTile({ ch, look, index, fill, edge }: { ch: string; look: Look; index: number; fill: string; edge: string }) {
  const [shown, setShown] = useState(ch);
  const [step, setStep] = useState(0);
  // each tile takes on the new style only when its own flip starts, so the
  // change travels along the name in a wave instead of hitting every tile at once
  const [tileLook, setTileLook] = useState(look);
  // rattle only when the style really changes (not on the first paint)
  const prev = useRef(look);
  useEffect(() => {
    if (prev.current === look) return;
    prev.current = look;
    const steps = 4 + (index % 3);
    const from = (FLAP_CHARS.indexOf(ch) + 5 + index * 3) % FLAP_CHARS.length;
    let k = 0;
    let timer = 0;
    const tick = () => {
      k += 1;
      setStep((x) => x + 1);
      if (k >= steps) {
        setShown(ch);
        return;
      }
      setShown(FLAP_CHARS[(from + k) % FLAP_CHARS.length]);
      timer = window.setTimeout(tick, STEP_MS);
    };
    timer = window.setTimeout(() => {
      setTileLook(look);
      tick();
    }, index * 110);
    return () => window.clearTimeout(timer);
  }, [look, ch, index]);
  return (
    <span
      className="nflap"
      data-look={tileLook}
      data-v={index % 4}
      style={{ ['--fill' as string]: fill, ['--edge' as string]: edge } as CSSProperties}
    >
      <span key={step} className={`nflap-char ${step ? 'flap-anim' : ''}`}>
        {shown}
      </span>
    </span>
  );
}

/** How many letters hop on each colourful style, when the first goes, and the gap between them (ms). */
const HOPS = 5;
const HOP_START_MS = 1780;
const HOP_GAP_MS = 250;
/** How long a ripple takes to travel one tile width outward from where it starts (ms). */
const RIPPLE_STEP_MS = 120;

/**
 * Picks the letters that hop on a colourful style, and their order, so it
 * really looks random: no two hoppers sit next to each other (in either row),
 * one hop never follows a letter close by, and none of the letters that hopped
 * last time hop again. Distances come from where the tiles really are on screen.
 */
function pickHoppers(tiles: HTMLElement[], before: number[]): number[] {
  const boxes = tiles.map((t) => t?.getBoundingClientRect());
  const w = boxes[0]?.width || 1;
  const apart = (a: number, b: number) => {
    const p = boxes[a];
    const q = boxes[b];
    if (!p || !q) return Math.abs(a - b);
    return Math.hypot(p.left - q.left, p.top - q.top) / w; // in tile widths
  };
  const shuffled = (xs: number[]) => xs.sort(() => Math.random() - 0.5);
  const all = [...Array(tiles.length).keys()];
  // try the strict rules first, then ease off so a pick is always found
  for (const [near, follow, avoidBefore] of [
    [1.7, 2.6, true],
    [1.7, 1.7, true],
    [1.7, 1.7, false],
    [0, 0, false],
  ] as const) {
    for (let tries = 0; tries < 60; tries++) {
      const pool = shuffled(all.filter((i) => !avoidBefore || !before.includes(i)));
      const picks: number[] = [];
      for (const i of pool) {
        if (picks.length === HOPS) break;
        if (picks.some((p) => apart(p, i) < near)) continue;
        if (picks.length && apart(picks[picks.length - 1], i) < follow) continue;
        picks.push(i);
      }
      if (picks.length === HOPS) return picks;
    }
  }
  return shuffled(all).slice(0, HOPS);
}

/**
 * The ways letters can move on a colourful style (played by heroMotion). Each
 * colourful style gets one, shuffled so every kind has a turn before any comes round again.
 */
const MOTIONS: readonly MotionKind[] = ['hop', 'bounce', 'stretch', 'morph', 'orbit', 'ripple', 'flip', 'glitch'];

/** When each keyframe of a tile's jumps falls: take-off, peak, land, small peak, land, settle. */
const HOP_TIMES = [0, 0.32, 0.62, 0.76, 0.9, 1];
const UP: Easing = [0.25, 0.55, 0.45, 1]; // easing off as it rises
const DOWN: Easing = [0.55, 0, 0.75, 0.45]; // gathering speed as it falls
const HOP_EASE: Easing[] = [UP, DOWN, UP, DOWN, 'easeOut'];
/** How long each tile's jump takes, and the gap between one tile and the next (s). */
const HOP_S = 1.2;
const HOP_GAP_S = 0.09;

/** A repeatable pseudo-random number per letter, so the dance is the same each render. */
const rand = (i: number, k: number) => {
  const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

/**
 * The welcome screen. The opening story (IntroStory) plays first; at its POP
 * the name's tiles jump around the screen and land on a split-flap board,
 * which then flips, tile by tile, between white letters and colourful ones.
 * The tiles rise as the pointer passes and squash when clicked.
 */
export default function Intro() {
  const [first, ...rest] = profile.name.toUpperCase().split(' ');
  const last = rest.join(' ');
  const reduced = useReducedMotionSafe();
  const { introDone, finishIntro } = useSite();
  // story: the story is playing; dance: the tiles dance in; drop: no story (reduced motion); still: skipped
  const [phase, setPhase] = useState<'story' | 'dance' | 'drop' | 'still'>(introDone ? 'drop' : 'story');
  const [shown, setShown] = useState<Look>('plain');
  const look: Look = reduced ? 'plain' : shown;
  const nextMono = useRef(bag(MONO, 'plain' as Look));
  const nextColour = useRef(bag(COLOUR, 'colour' as Look));
  const current = useRef<Look>('plain');
  const isColour = (l: Look) => (COLOUR as readonly string[]).includes(l);
  // on a colourful style, five letters picked at random move one after another, then the board moves on.
  // The moves are played straight onto the letters' wrappers, so the board never re-renders for them.
  const movers = useRef<HTMLSpanElement[]>([]);
  const nextMotion = useRef(bag(MOTIONS));
  const lastHoppers = useRef<number[]>([]);
  useScrollLock(!introDone);

  useEffect(() => {
    if (reduced || phase === 'story' || !isColour(look)) return;
    const kind = nextMotion.current();
    const play = (idx: number) => {
      const el = movers.current[idx];
      if (el) playMotion(kind, el);
    };
    let timers: number[];
    if (kind === 'ripple') {
      // a ripple spreads outward from one random letter, reaching each letter by its distance
      const boxes = letters.current.map((el) => el?.getBoundingClientRect());
      const w = boxes[0]?.width || 1;
      const from = Math.floor(Math.random() * boxes.length);
      const o = boxes[from];
      timers = boxes.map((b, idx) => {
        const d = o && b ? Math.hypot(b.left - o.left, b.top - o.top) / w : Math.abs(idx - from);
        return window.setTimeout(() => play(idx), 2000 + d * RIPPLE_STEP_MS);
      });
    } else {
      const order = pickHoppers(letters.current, lastHoppers.current);
      lastHoppers.current = order;
      // a letter only moves once it has finished flipping into the new style
      let at = 0;
      timers = order.map((idx, k) => {
        at = Math.max(HOP_START_MS + k * HOP_GAP_MS, idx * 110 + 700, at + HOP_GAP_MS);
        return window.setTimeout(() => play(idx), at);
      });
    }
    return () => timers.forEach((x) => window.clearTimeout(x));
  }, [look, phase, reduced, first, last]);

  const letters = useRef<HTMLSpanElement[]>([]);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // Once the name has landed, the board keeps flipping through its letter styles.
  // After the story the letters dance in colour, so the next flip is to black and white.
  useEffect(() => {
    if (reduced || phase === 'story') return;
    let timer = 0;
    const flip = () => {
      // picked outside the state setter, so each flip draws from the bag exactly once
      current.current = isColour(current.current) ? nextMono.current() : nextColour.current();
      setShown(current.current);
      timer = window.setTimeout(flip, isColour(current.current) ? COLOUR_STAYS_MS : FLIP_EVERY_MS);
    };
    // dance: about 2.5s of jumping, then the colours stay for their hops
    timer = window.setTimeout(flip, phase === 'dance' ? COLOUR_STAYS_MS : 2200);
    return () => window.clearTimeout(timer);
  }, [phase, reduced, first, last]);

  // How each tile jumps home, calmly: one easy hop from a spot not far off,
  // then a little bounce on its tile, with a soft squash on each landing.
  // Values are in px from the tile's own place.
  const dance = useMemo(() => {
    const w = typeof window === 'undefined' ? 1200 : window.innerWidth;
    const h = typeof window === 'undefined' ? 800 : window.innerHeight;
    return [...(first + last)].map((_, i) => {
      const gx = (rand(i, 0) - 0.5) * Math.min(w * 0.4, 520);
      const gy = (rand(i, 7) - 0.2) * Math.min(h * 0.22, 180);
      const lift = Math.min(h * 0.16, 130) * (0.8 + rand(i, 4) * 0.4);
      const tilt = (rand(i, 3) - 0.5) * 24;
      return {
        // take-off, peak, land, small peak, land, settle
        x: [gx, gx / 2, 0, 0, 0, 0],
        y: [gy, Math.min(gy, 0) - lift, 0, -lift * 0.22, 0, 0],
        rotate: [tilt, -tilt / 3, 0, 0, 0, 0],
        scaleX: [0.85, 0.97, 1.1, 0.99, 1.04, 1],
        scaleY: [0.85, 1.04, 0.9, 1.02, 0.97, 1],
      };
    });
  }, [first, last]);

  /** Tiles near the pointer rise. */
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduced || phase === 'story') return;
    const { clientX: x, clientY: y } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      for (const el of letters.current) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const d = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2));
        const lift = d < REACH ? Math.cos(((d / REACH) * Math.PI) / 2) ** 2 : 0;
        el.style.setProperty('--lift', lift.toFixed(3));
      }
    });
  };
  const onPointerLeave = () => {
    cancelAnimationFrame(frame.current);
    for (const el of letters.current) el?.style.setProperty('--lift', '0');
  };

  /** A clicked (or tapped) tile squashes and springs back. */
  const squash = (el: HTMLElement) => {
    if (reduced) return;
    el.classList.remove('is-squashed');
    void el.offsetWidth;
    el.classList.add('is-squashed');
  };

  let n = 0;
  const row = (text: string) =>
    [...text].map((ch, i) => {
      const idx = n++;
      const c = LETTER_COLOURS[ch] ?? { fill: '#fde047', edge: '#22c55e' };
      const tile = (
        <span
          className="name-lift"
          ref={(el) => {
            if (el) letters.current[idx] = el;
          }}
        >
          <span
            className="name-squash"
            onPointerDown={(e) => squash(e.currentTarget)}
            onAnimationEnd={(e) => e.currentTarget.classList.remove('is-squashed')}
          >
            <span
              className="inline-block"
              style={{ transformOrigin: '50% 100%' }}
              ref={(el) => {
                if (el) movers.current[idx] = el;
              }}
            >
              <FlapTile ch={ch} look={look} index={idx} fill={c.fill} edge={c.edge} />
            </span>
          </span>
        </span>
      );
      if (phase === 'dance') {
        const d = dance[idx];
        return (
          <m.span
            key={i}
            className="relative inline-block"
            initial={{ x: d.x[0], y: d.y[0], rotate: d.rotate[0], scaleX: 0.85, scaleY: 0.85, opacity: 0 }}
            animate={{ x: d.x, y: d.y, rotate: d.rotate, scaleX: d.scaleX, scaleY: d.scaleY, opacity: [0, 1, 1, 1, 1, 1] }}
            transition={{
              // gravity: rising and easing off, then falling and gathering speed
              default: { duration: HOP_S, times: HOP_TIMES, ease: HOP_EASE, delay: 0.1 + idx * HOP_GAP_S },
              x: { duration: HOP_S, times: HOP_TIMES, ease: 'linear', delay: 0.1 + idx * HOP_GAP_S },
              rotate: { duration: HOP_S, times: HOP_TIMES, ease: 'easeInOut', delay: 0.1 + idx * HOP_GAP_S },
              opacity: { duration: HOP_S * 0.2, delay: 0.1 + idx * HOP_GAP_S },
            }}
            style={{ transformOrigin: '50% 100%' }}
          >
            {tile}
          </m.span>
        );
      }
      return (
        <span
          key={i}
          className={phase === 'drop' ? 'name-drop' : 'relative inline-block'}
          style={phase === 'drop' ? { animationDelay: `${150 + idx * 55}ms` } : undefined}
        >
          {tile}
        </span>
      );
    });

  const showName = phase !== 'story';

  return (
    <section
      id="intro"
      data-section="intro"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {/* just the name, big, in the middle of the screen */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-10 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* --- the name, on a split-flap board --- */}
          <h1 className="name-board relative select-none">
            <span className="sr-only">{profile.name}</span>
            {showName && (
              <>
                <span aria-hidden className="name-row">
                  {row(first)}
                </span>
                <span aria-hidden className="name-row name-row-2">
                  {row(last)}
                </span>
              </>
            )}
          </h1>
        </div>
      </div>

      {/* the opening story */}
      {!introDone && (
        <IntroStory
          onPop={() => {
            // the colourful letters are the ones that jump around
            current.current = 'colour';
            setShown('colour');
            setPhase('dance');
          }}
          onDone={finishIntro}
          onSkip={() => {
            setPhase('still');
            finishIntro();
          }}
        />
      )}
    </section>
  );
}
