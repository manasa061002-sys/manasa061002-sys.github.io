import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { m, type Easing } from 'motion/react';
import { profile } from '@/data/portfolio';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';
import { useScrollLock, useSite } from '@/lib/site';
import IntroStory from '@/components/IntroStory';

/** How far (in px) the pointer's pull on a tile reaches. */
const REACH = 150;
/** How often the board switches between its white and its colourful letters. */
const FLIP_EVERY_MS = 5000;

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
const STEP_MS = 42;

/**
 * One tile of the name board. Each time the board switches between white and
 * colourful letters, the tile clacks quickly through a run of letters (like a
 * departure board) and lands on its own letter in the new style. Tiles start
 * one after another along the name.
 */
function FlapTile({ ch, colourful, index, fill, edge }: { ch: string; colourful: boolean; index: number; fill: string; edge: string }) {
  const [shown, setShown] = useState(ch);
  const [step, setStep] = useState(0);
  // rattle only when the style really changes (not on the first paint)
  const prev = useRef(colourful);
  useEffect(() => {
    if (prev.current === colourful) return;
    prev.current = colourful;
    const steps = 9 + (index % 5);
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
    timer = window.setTimeout(tick, index * 70);
    return () => window.clearTimeout(timer);
  }, [colourful, ch, index]);
  return (
    <span className={`nflap ${colourful ? 'is-colourful' : ''}`} style={{ ['--fill' as string]: fill, ['--edge' as string]: edge } as CSSProperties}>
      <span key={step} className={`nflap-char ${step ? 'flap-anim' : ''}`}>
        {shown}
      </span>
    </span>
  );
}

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
  const [colourful, setColourful] = useState(false);
  useScrollLock(!introDone);

  const letters = useRef<HTMLSpanElement[]>([]);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // Once the name has landed, the board keeps flipping between its two sides.
  // After the story the letters dance in colourful, so the first flip is to white.
  useEffect(() => {
    if (reduced || phase === 'story') return;
    let every = 0;
    const flip = () => setColourful((c) => !c);
    const start = window.setTimeout(
      () => {
        flip();
        every = window.setInterval(flip, FLIP_EVERY_MS);
      },
      // dance: about 2.5s of jumping, then a few seconds to enjoy the colours
      phase === 'dance' ? 2500 + 3500 : 2200,
    );
    return () => {
      window.clearTimeout(start);
      window.clearInterval(every);
    };
  }, [phase, reduced]);

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
            <FlapTile ch={ch} colourful={colourful && !reduced} index={idx} fill={c.fill} edge={c.edge} />
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
            setColourful(true);
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
