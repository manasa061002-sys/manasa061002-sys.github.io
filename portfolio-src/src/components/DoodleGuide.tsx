import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { m, AnimatePresence, useAnimationControls, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';
import { useSite } from '@/lib/site';
import { paletteShortcut } from '@/lib/platform';
import { useDayPart, visitorHello } from '@/lib/visitor';

/**
 * A sketchbook-style guide that follows you down the page.
 * - Each section gets a pose, a prop and a line of commentary.
 * - Eyes follow the pointer; legs run while you scroll.
 * - When you pause it does little tricks; leave it long enough and it naps.
 * - Now and then it moves to a new spot in the lower right of the screen
 *   (never off-screen, and not at all on phones).
 * - Click it for a quip and a trick. Click it too much and it pops into
 *   rainbow confetti, then drops back in a moment later.
 * Everything that moves is switched off for prefers-reduced-motion.
 */

type Pose = 'wave' | 'point' | 'think' | 'cheer' | 'rest' | 'carry' | 'magnify' | 'paint' | 'camera' | 'juggle' | 'idea';
type Prop = 'none' | 'briefcase' | 'magnifier' | 'brush' | 'camera' | 'balls' | 'bulb';
type Trick = 'jump' | 'spin' | 'dance' | 'look' | 'cartwheel' | 'wave' | 'roam';

const SCRIPT: Record<string, { text: string; pose: Pose; prop: Prop }> = {
  intro: { text: 'Hi, welcome to my Pandora!', pose: 'wave', prop: 'none' },
  about: { text: "Hi, I'm Manasa! Scroll down and I'll show you around.", pose: 'wave', prop: 'none' },
  experience: { text: "Briefcase packed. This is where I've worked.", pose: 'carry', prop: 'briefcase' },
  research: { text: 'My research papers. I looked very closely.', pose: 'magnify', prop: 'magnifier' },
  transition: { text: 'Hold on, things are about to get colorful…', pose: 'cheer', prop: 'none' },
  products: { text: 'Lightbulb moment! Unlock the laptop and pick an app.', pose: 'idea', prop: 'bulb' },
  creative: { text: 'Welcome to my desk! Click anything to look closer.', pose: 'paint', prop: 'brush' },
  skills: { text: 'My toolkit, all in one place.', pose: 'juggle', prop: 'balls' },
  life: { text: 'Say cheese! Can you sort my photos into four groups?', pose: 'camera', prop: 'camera' },
  footer: { text: 'Thanks for stopping by! Say hi anytime.', pose: 'wave', prop: 'none' },
};

// The shortcut tip names the right keys for this device, and is left out on touch screens.
const SHORTCUT = paletteShortcut();
const QUIPS = ['That tickles.', ...(SHORTCUT ? [`Psst… press ${SHORTCUT} to jump anywhere.`] : []), 'Wheee!', 'Okay, okay…', 'Catch me if you can!'];
const TRICKS: Trick[] = ['jump', 'spin', 'dance', 'look', 'cartwheel', 'wave'];
const TRICK_LINES: Partial<Record<Trick, string>> = {
  dance: '♪ Doo be doo… ♪',
  cartwheel: 'Ta-da!',
  spin: 'Wheee!',
};

// Arm angles in degrees (0 = hanging down). Negative lifts the right arm, positive the left.
const ARMS: Record<Pose, { l: number; r: number }> = {
  rest: { l: 0, r: 0 },
  wave: { l: 0, r: -140 },
  point: { l: 70, r: 0 },
  think: { l: 0, r: -150 },
  cheer: { l: 140, r: -140 },
  carry: { l: 15, r: 0 },
  magnify: { l: 0, r: -120 },
  paint: { l: 60, r: 0 },
  camera: { l: 60, r: -95 },
  juggle: { l: 55, r: -55 },
  idea: { l: 0, r: -155 },
};

const IDLE_TRICK_MS = 14000;
const SLEEP_AFTER_MS = 30000;

function useTyped(text: string, on: boolean) {
  const [n, setN] = useState(on ? 0 : text.length);
  useEffect(() => {
    if (!on) {
      setN(text.length);
      return;
    }
    setN(0);
    const t = window.setInterval(() => {
      setN((x) => {
        if (x >= text.length) {
          window.clearInterval(t);
          return x;
        }
        return x + 1;
      });
    }, 22);
    return () => window.clearInterval(t);
  }, [text, on]);
  return text.slice(0, n);
}

/** Only this tiny component re-renders while the text types out. */
function Typed({ text, on }: { text: string; on: boolean }) {
  return <span aria-hidden>{useTyped(text, on)}</span>;
}

const CONFETTI_COLORS = ['#ec4899', '#f59e0b', '#facc15', '#22c55e', '#06b6d4', '#6366f1', '#a855f7'];

/** A one-off burst of rainbow confetti from a point on screen. */
function Confetti({ x, y }: { x: number; y: number }) {
  const [pieces] = useState(() =>
    Array.from({ length: 80 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 120 + Math.random() * 260;
      return {
        id: i,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed - 140,
        rot: Math.random() * 720 - 360,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        w: 6 + Math.random() * 6,
        round: Math.random() < 0.3,
        delay: Math.random() * 0.08,
      };
    }),
  );
  return createPortal(
    <div className="fixed inset-0 z-[45] pointer-events-none overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={
            {
              left: x,
              top: y,
              width: p.w,
              height: p.round ? p.w : p.w * 0.45,
              borderRadius: p.round ? '50%' : 2,
              background: p.color,
              animationDelay: `${p.delay}s`,
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
              '--rot': `${p.rot}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>,
    document.body,
  );
}

const POP_AT = 6; // clicks within POP_WINDOW_MS
const POP_WINDOW_MS = 5000;

export default function DoodleGuide() {
  const { active, light, mode, introDone } = useSite();
  // When the opening story plays, the girl from the story walks to this corner herself,
  // so the guide then simply appears there (no second walk-in).
  const [afterStory] = useState(() => !introDone);
  // The visitor's own clock and language: pyjamas at night, coffee in the morning,
  // and "hello" in their language if it is one of mine.
  const part = useDayPart();
  const [hello] = useState(visitorHello);
  const night = part === 'night';
  const reduced = !!useReducedMotion();
  const [bubble, setBubble] = useState(true);
  const [quip, setQuip] = useState<string | null>(null);
  const [entered, setEntered] = useState(reduced);
  const [trick, setTrick] = useState<Trick | null>(null);
  const [asleep, setAsleep] = useState(false);
  const clicks = useRef<number[]>([]);
  const hop = useAnimationControls();
  const turb = useRef<SVGFETurbulenceElement>(null);
  const legs = useRef<SVGGElement>(null);
  const pupils = useRef<SVGGElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const lastActivity = useRef(Date.now());
  const asleepRef = useRef(false);
  // Where she stands along the bottom (px left of her home corner) and which way she faces.
  const [spot, setSpot] = useState({ x: 0, face: 1 });
  const [vw, setVw] = useState(1280);
  const roamTimer = useRef(0);
  const [popped, setPopped] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setSpot((s) => ({ ...s, x: Math.max(s.x, -roamRange()) }));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /** How far left she may go: the right part of the screen only, keeping the bubble visible. */
  const roamRange = () => {
    // She stays put on the right-hand side.
    return 0;
  };

  /** Move to a new spot along the bottom right of the screen. */
  const roam = useCallback(() => {
    if (reduced) return;
    const max = roamRange();
    if (max < 60) return;
    setSpot((s) => {
      // Go somewhere noticeably different, within the allowed range.
      const x = s.x > -max / 2 ? -Math.round(max * (0.55 + Math.random() * 0.45)) : -Math.round(Math.random() * max * 0.35);
      return { x, face: x < s.x ? -1 : 1 };
    });
    legs.current?.classList.add('doodle-walk');
    hop.start({ y: [0, -36, 0, -12, 0], transition: { duration: 1.2, times: [0, 0.35, 0.65, 0.82, 1] } });
    window.clearTimeout(roamTimer.current);
    roamTimer.current = window.setTimeout(() => {
      legs.current?.classList.remove('doodle-walk');
      setSpot((s) => ({ ...s, face: 1 }));
    }, 1350);
  }, [reduced, hop]);

  const scene = SCRIPT[active] || SCRIPT.intro;
  const welcome =
    part === 'night'
      ? `${hello}! Up late too? *yawn* Welcome to my Pandora!`
      : part === 'morning'
        ? `${hello}, good morning! Welcome to my Pandora. Coffee?`
        : `${hello}, welcome to my Pandora!`;
  const message = quip ?? (active === 'intro' || !SCRIPT[active] ? welcome : scene.text);
  const ink = light ? '#111111' : '#ffffff';
  const paper = light ? '#ffffff' : '#000000';

  let pose: Pose = quip ? 'cheer' : scene.pose;
  if (trick === 'wave') pose = 'wave';
  if (asleep) pose = 'rest';
  const prop: Prop = asleep || quip ? 'none' : scene.prop;
  const arms = ARMS[pose];

  // Hand-drawn "line boil": nudge the noise seed a few times a second.
  useEffect(() => {
    if (reduced) return;
    let seed = 1;
    const t = window.setInterval(() => {
      seed = (seed % 3) + 1;
      turb.current?.setAttribute('seed', String(seed));
    }, 140);
    return () => window.clearInterval(t);
  }, [reduced]);

  // Let the bubble get out of the way after a while.
  useEffect(() => {
    if (!bubble) return;
    const t = window.setTimeout(() => setBubble(false), 7000);
    return () => window.clearTimeout(t);
  }, [bubble, message]);

  // Hop + re-open the bubble whenever the section changes.
  useEffect(() => {
    setQuip(null);
    setBubble(true);
    // Only sometimes move on a section change; mostly just a little hop.
    if (!reduced && entered) {
      if (Math.random() < 0.35) roam();
      else hop.start({ y: [0, -14, 0], transition: { duration: 0.45, ease: 'easeOut' } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced, entered]);

  // Activity: run while scrolling, follow the pointer, wake up, reset the idle clock.
  useEffect(() => {
    if (reduced) return;
    let stopRun = 0;
    let raf = 0;
    let px = 0;
    let py = 0;
    const wake = () => {
      lastActivity.current = Date.now();
      if (!asleepRef.current) return;
      asleepRef.current = false;
      setAsleep(false);
      setQuip("Huh? I'm up, I'm up!");
      setBubble(true);
      hop.start({ y: [0, -22, 0], transition: { duration: 0.4 } });
    };
    const onScroll = () => {
      wake();
      legs.current?.classList.add('doodle-walk');
      window.clearTimeout(stopRun);
      stopRun = window.setTimeout(() => legs.current?.classList.remove('doodle-walk'), 260);
    };
    const aim = () => {
      raf = 0;
      const b = button.current?.getBoundingClientRect();
      if (!b || !pupils.current) return;
      const dx = px - (b.left + b.width / 2);
      const dy = py - (b.top + b.height * 0.28);
      const d = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, d / 300) * 1.8;
      pupils.current.style.transform = `translate(${(dx / d) * k}px, ${(dy / d) * k}px)`;
    };
    const onPointer = (e: PointerEvent) => {
      wake();
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(aim);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('keydown', wake);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('keydown', wake);
      window.clearTimeout(stopRun);
      cancelAnimationFrame(raf);
    };
  }, [reduced, hop]);

  // Idle: a trick every few seconds, a nap after a long pause.
  useEffect(() => {
    if (reduced || !entered) return;
    const t = window.setInterval(() => {
      const idle = Date.now() - lastActivity.current;
      if (idle > SLEEP_AFTER_MS) {
        asleepRef.current = true;
        setAsleep(true);
        setBubble(false);
        return;
      }
      if (asleepRef.current || idle < 4000 || Math.random() < 0.5) return;
      const next = TRICKS[Math.floor(Math.random() * TRICKS.length)];
      setTrick(next);
      if (TRICK_LINES[next]) {
        setQuip(TRICK_LINES[next]!);
        setBubble(true);
        window.setTimeout(() => setQuip(null), 2500);
      }
      if (next === 'roam') roam();
      if (next === 'jump') hop.start({ y: [0, -26, 0, -10, 0], transition: { duration: 0.8 } });
      if (next === 'spin') hop.start({ rotateY: [0, 360], transition: { duration: 0.8, ease: 'easeInOut' } });
      if (next === 'cartwheel') hop.start({ rotate: [0, 360], x: [0, -20, 0], transition: { duration: 0.9, ease: 'easeInOut' } });
      window.setTimeout(() => setTrick(null), 2400);
    }, IDLE_TRICK_MS / 2);
    return () => window.clearInterval(t);
  }, [reduced, entered, hop, roam]);

  const pop = () => {
    const b = button.current?.getBoundingClientRect();
    if (!b) return;
    clicks.current = [];
    setBubble(false);
    setPopped({ x: b.left + b.width / 2, y: b.top + b.height / 2 });
    // Back after a moment: drop in from above.
    window.setTimeout(() => {
      setPopped(null);
      setQuip('Ta-da! Good as new.');
      setBubble(true);
      hop.start({ y: [-500, 0, -40, 0, -12, 0], scale: 1, transition: { duration: 1.1, times: [0, 0.45, 0.62, 0.78, 0.9, 1] } });
    }, 3200);
  };

  const onPoke = () => {
    if (popped) return;
    lastActivity.current = Date.now();
    asleepRef.current = false;
    setAsleep(false);
    const now = Date.now();
    clicks.current = [...clicks.current.filter((t) => now - t < POP_WINDOW_MS), now];
    const n = clicks.current.length;
    setBubble(true);
    if (!reduced && n >= POP_AT) {
      setQuip('POP!');
      pop();
      return;
    }
    if (n === POP_AT - 2) setQuip("Careful, I'm getting dizzy…");
    else if (n === POP_AT - 1) setQuip("Stop it, I'm gonna pop!");
    else setQuip(QUIPS[(n - 1) % QUIPS.length]);
    if (reduced) return;
    const moves = [
      () => hop.start({ rotate: [0, 360], transition: { duration: 0.8, ease: 'easeInOut' } }),
      () => hop.start({ rotateY: [0, 360], transition: { duration: 0.7 } }),
      () => hop.start({ y: [0, -40, 0, -16, 0], transition: { duration: 0.8 } }),
    ];
    // Puffs up as you keep clicking.
    if (n >= POP_AT - 2) hop.start({ scale: [1, 1.25 + (n - POP_AT + 2) * 0.1, 1.1], transition: { duration: 0.35 } });
    else moves[Math.floor(Math.random() * moves.length)]();
  };

  // After the story she takes over in her corner: start fresh (awake, welcome bubble showing).
  useEffect(() => {
    if (!introDone || !afterStory) return;
    // her idle clock starts now, not when the page loaded (or she would nap at once)
    lastActivity.current = Date.now();
    asleepRef.current = false;
    setAsleep(false);
    setQuip(null);
    setBubble(true);
    setEntered(true);
  }, [introDone, afterStory]);

  if (!introDone) return null;

  const anim = (cls: string) => (reduced ? '' : cls);
  // The speech bubble sits above her head; on the left half of the screen it lines up with her left edge.
  const onLeft = spot.x < -vw * 0.45;
  const rightArmAnim = trick === 'dance' ? 'doodle-dance-r' : pose === 'wave' ? 'doodle-wave' : '';
  const leftArmAnim = trick === 'dance' ? 'doodle-dance-l' : '';

  return (
    <m.div
      className={`fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-30 flex flex-col gap-3 pointer-events-none select-none ${
        onLeft ? 'items-start' : 'items-end'
      }`}
      initial={reduced || afterStory ? false : { x: 160 }}
      animate={{ x: spot.x }}
      transition={entered ? { duration: 1.3, ease: [0.45, 0, 0.55, 1] } : { delay: 1.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => setEntered(true)}
    >
      <AnimatePresence>
        {bubble && entered && (
          <m.div
            key="bubble"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            style={{ color: ink, background: paper, borderColor: ink, originX: onLeft ? 0.2 : 0.8, originY: 1 }}
            className="doodle-bubble pointer-events-auto relative max-w-[170px] sm:max-w-[220px] border-2 px-3.5 py-2.5 pr-6 font-serif italic text-[14px] sm:text-[16px] leading-snug transition-colors duration-500"
            role="status"
            aria-live="polite"
          >
            <Typed text={message} on={!reduced && entered} />
            <span className="sr-only">{message}</span>
            <button
              onClick={() => setBubble(false)}
              aria-label="Hide message"
              className="absolute top-1 right-1 opacity-50 hover:opacity-100"
            >
              <X className="h-3 w-3" />
            </button>
            {/* tail */}
            <svg
              className={`absolute -bottom-[14px] ${onLeft ? 'left-[30px] sm:left-[46px]' : 'right-[30px] sm:right-[46px]'}`}
              width="14"
              height="16"
              viewBox="0 0 14 16"
              aria-hidden
            >
              <path d="M2 0 L7 15 L12 0" fill={paper} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </m.div>
        )}
      </AnimatePresence>

      {popped && <Confetti x={popped.x} y={popped.y} />}
      <m.button
        ref={button}
        animate={hop}
        onClick={onPoke}
        style={{ transformPerspective: 400, visibility: popped ? 'hidden' : 'visible' }}
        aria-label="Doodle guide. Click for a tip."
        className="doodle-btn pointer-events-auto w-[84px] sm:w-[118px] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-xl"
      >
        <svg
          viewBox="0 0 120 160"
          className="w-full h-auto overflow-visible"
          style={{ transform: `scaleX(${spot.face})`, transition: 'transform 0.2s' }}
          aria-hidden
        >
          <defs>
            <filter id="doodle-boil" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence ref={turb} type="fractalNoise" baseFrequency="0.035" numOctaves="1" seed="1" />
              <feDisplacementMap in="SourceGraphic" scale={reduced ? 0 : 2.2} />
            </filter>
          </defs>
          <g
            filter="url(#doodle-boil)"
            stroke={ink}
            fill={paper}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-[stroke,fill] duration-500"
          >
            <g
              className={`${anim(asleep ? 'doodle-snooze' : 'doodle-idle')} ${anim(trick === 'dance' ? 'doodle-groove' : '')}`}
              style={{ transformBox: 'view-box', transformOrigin: '60px 150px' }}
            >
              {/* legs */}
              <g ref={legs} className={entered || reduced ? '' : 'doodle-walk'}>
                <path className="doodle-leg-l" d="M53 112 L50 142 L42 143" fill="none" />
                <path className="doodle-leg-r" d="M67 112 L70 142 L78 143" fill="none" />
              </g>

              {/* left arm */}
              <g
                className={`doodle-arm ${anim(leftArmAnim)}`}
                style={{ transformOrigin: '47px 80px', transform: `rotate(${arms.l}deg)` }}
              >
                <path d="M47 80 L35 104" fill="none" />
                {/* morning coffee (unless that hand holds the paintbrush) */}
                {part === 'morning' && prop !== 'brush' && !asleep && (
                  <g strokeWidth="2">
                    <path d="M28 103 L39 103 L38 114 C 37 116, 30 116, 29 114 Z" fill="#fafaf9" />
                    <path d="M29 105.5 H38" fill="none" stroke="#7c4a1e" strokeWidth="2.4" />
                    <path d="M38.5 106 C 43 106, 43 112, 38 112" fill="none" />
                    <path className={anim('doodle-steam')} d="M31 99 C 29 96, 33 94, 31 91 M35.5 99 C 33.5 96, 37.5 94, 35.5 91" fill="none" strokeWidth="1.4" />
                  </g>
                )}
                {prop === 'brush' && (
                  <g strokeWidth="2.2">
                    <path d="M35 104 L30 114" fill="none" />
                    <path d="M30 114 L27.5 119" stroke="#ec4899" strokeWidth="3.5" fill="none" />
                  </g>
                )}
              </g>

              {/* right arm, with whatever it is holding */}
              <g
                className={`doodle-arm ${anim(rightArmAnim)}`}
                style={{ transformOrigin: '73px 80px', transform: `rotate(${arms.r}deg)` }}
              >
                <path d="M73 80 L85 104" fill="none" />
                {prop === 'briefcase' && (
                  <g strokeWidth="2.2">
                    <path d="M82 106 L82 103 L88 103 L88 106" fill="none" />
                    <rect x="77" y="106" width="16" height="11" rx="1.5" fill={paper} />
                  </g>
                )}
                {prop === 'magnifier' && (
                  <g strokeWidth="2.2">
                    <path d="M85 104 L88 110" fill="none" />
                    <circle cx="90.5" cy="115" r="6" fill="none" />
                  </g>
                )}
              </g>

              {/* body */}
              <path d="M46 76 C 55 74, 65 74, 74 76 L 78 113 C 66 115, 54 115, 42 113 Z" />
              {/* outfit: a blazer on the dark half, paint-splattered overalls on the paper half */}
              {night ? (
                // pyjamas (late at night, whatever the mode)
                <g strokeWidth="2">
                  <path d="M46 76 C 55 74, 65 74, 74 76 L 78 113 C 66 115, 54 115, 42 113 Z" fill="#e0e7ff" />
                  <path d="M46 84 H74 M45 92 H75 M44 100 H76 M43 108 H77" fill="none" stroke="#6366f1" strokeWidth="1.6" />
                  <circle cx="60" cy="88" r="1.3" fill="#312e81" stroke="none" />
                  <circle cx="60" cy="96" r="1.3" fill="#312e81" stroke="none" />
                </g>
              ) : mode === 'analyst' ? (
                <g strokeWidth="2">
                  <path d="M46 76 C 55 74, 65 74, 74 76 L 78 113 C 66 115, 54 115, 42 113 Z" fill="#27272a" />
                  <path d="M54 76 L60 89 L66 76 Z" fill="#ffffff" />
                  <path d="M51 76 L57 99 M69 76 L63 99" fill="none" />
                  <circle cx="60" cy="101" r="1.5" fill={ink} stroke="none" />
                  <circle cx="60" cy="107" r="1.5" fill={ink} stroke="none" />
                  <path d="M66 104 L73 103" fill="none" />
                </g>
              ) : (
                <g strokeWidth="2">
                  <path d="M49 91 L71 91 L77 113 C 66 115, 54 115, 43 113 Z" fill="#7dd3fc" />
                  <path d="M51 91 L48 77 M69 91 L72 77" fill="none" stroke="#0369a1" strokeWidth="2.6" />
                  <rect x="55" y="95" width="10" height="7" rx="1" fill="#bae6fd" />
                  <circle cx="51" cy="106" r="2.2" fill="#ec4899" stroke="none" />
                  <circle cx="67" cy="99" r="1.8" fill="#facc15" stroke="none" />
                  <circle cx="71" cy="109" r="1.6" fill="#22c55e" stroke="none" />
                  <circle cx="58" cy="110" r="1.4" fill="#a855f7" stroke="none" />
                  <circle cx="63" cy="106" r="1.1" fill="#ec4899" stroke="none" />
                  <circle cx="47" cy="111" r="1.2" fill="#f59e0b" stroke="none" />
                </g>
              )}
              <path d="M60 68 L60 75" fill="none" />
              {/* hair, back layer */}
              <path d="M35 40 C 30 56, 31 70, 37 80 M85 40 C 90 56, 89 70, 83 80" fill="none" />
              {/* head */}
              <path d="M60 16 C 76 15, 87 28, 86 43 C 85 59, 73 69, 59 68 C 44 68, 33 57, 34 42 C 35 27, 45 17, 60 16 Z" />
              {/* fringe */}
              <path d="M36 36 C 40 20, 56 12, 70 15 C 79 17, 86 26, 86 37 M50 18 C 52 26, 47 31, 42 33 M62 16 C 63 24, 60 29, 56 31" fill="none" />
              {/* nightcap */}
              {night && (
                <g strokeWidth="2">
                  <path d="M37 31 C 44 14, 68 8, 84 24 C 90 18, 96 12, 103 12 C 94 6, 76 4, 62 9 C 50 13, 41 21, 37 31 Z" fill="#a5b4fc" />
                  <circle cx="104" cy="12" r="4.5" fill="#ffffff" />
                </g>
              )}

              {/* eyes: open (following the pointer) or shut when napping */}
              {asleep ? (
                <path d="M47 45 Q51 48 55 45 M65 45 Q69 48 73 45" fill="none" strokeWidth="2.2" />
              ) : (
                <g className={anim('doodle-blink')} style={{ transformOrigin: '60px 44px' }}>
                  <g
                    ref={pupils}
                    className={trick === 'look' ? anim('doodle-look') : ''}
                    stroke="none"
                    fill={ink}
                    style={{ transition: 'transform 0.15s ease-out' }}
                  >
                    <circle className="doodle-eye" cx="51" cy="44" r="2.3" />
                    <circle className="doodle-eye" cx="69" cy="44" r="2.3" />
                  </g>
                </g>
              )}

              {/* reading glasses for the research papers */}
              {active === 'research' && (
                <g className="doodle-glasses" fill="none" strokeWidth="2">
                  <circle cx="51" cy="44" r="6.5" />
                  <circle cx="69" cy="44" r="6.5" />
                  <path d="M57.5 43.5 Q60 41.5 62.5 43.5 M44.5 43 L36 40.5 M75.5 43 L84 40.5" />
                </g>
              )}

              {/* mouth */}
              {asleep ? (
                <circle cx="60" cy="56" r="1.8" fill="none" strokeWidth="1.8" />
              ) : night ? (
                // a sleepy mouth that keeps yawning
                <ellipse className={anim('doodle-yawn')} cx="60" cy="56" rx="3.6" ry="4.2" fill={ink} style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
              ) : (
                <path
                  d={pose === 'cheer' || trick === 'dance' ? 'M52 54 Q60 63 68 54 Z' : 'M53 55 Q60 60 67 55'}
                  fill={pose === 'cheer' || trick === 'dance' ? ink : 'none'}
                />
              )}

              {/* props that are not in the hand */}
              {prop === 'bulb' && (
                <g className={anim('doodle-bulb')} strokeWidth="2">
                  <circle cx="60" cy="0" r="7" fill="#fde047" />
                  <path d="M57 7 L57 10 L63 10 L63 7" fill="#d4d4d4" />
                  <path d="M48 -6 L44 -9 M72 -6 L76 -9 M60 -12 L60 -16" fill="none" stroke="#facc15" />
                </g>
              )}
              {prop === 'camera' && (
                <g strokeWidth="2">
                  <rect x="80" y="48" width="18" height="12" rx="2" fill="#374151" />
                  <circle cx="89" cy="54" r="3.5" fill="#93c5fd" />
                  <path className={anim('doodle-flash')} d="M100 44 L104 40 M101 49 L107 49 M100 54 L104 58" stroke="#facc15" fill="none" />
                </g>
              )}
              {prop === 'brush' && (
                <g stroke="none">
                  <circle className={anim('doodle-splat')} cx="16" cy="122" r="3" fill="#ec4899" />
                  <circle className={anim('doodle-splat')} style={{ animationDelay: '0.6s' }} cx="10" cy="112" r="2.2" fill="#06b6d4" />
                  <circle className={anim('doodle-splat')} style={{ animationDelay: '1.2s' }} cx="21" cy="131" r="2.6" fill="#facc15" />
                </g>
              )}
              {prop === 'balls' && (
                <g stroke="none">
                  {['#ec4899', '#facc15', '#06b6d4'].map((c, i) => (
                    <g key={c} className={anim('doodle-juggle-x')} style={{ animationDelay: `${i * -0.4}s` }}>
                      <circle
                        className={anim('doodle-juggle-y')}
                        style={{ animationDelay: `${i * -0.4}s` }}
                        cx="60"
                        cy="10"
                        r="4"
                        fill={c}
                      />
                    </g>
                  ))}
                </g>
              )}
              {asleep && (
                <g stroke="none" fill={ink} fontFamily="Cormorant Garamond, serif" fontStyle="italic">
                  <text className={anim('doodle-z')} x="84" y="20" fontSize="12">z</text>
                  <text className={anim('doodle-z')} style={{ animationDelay: '0.8s' }} x="90" y="12" fontSize="15">z</text>
                  <text className={anim('doodle-z')} style={{ animationDelay: '1.6s' }} x="97" y="2" fontSize="18">Z</text>
                </g>
              )}
            </g>
          </g>
        </svg>
      </m.button>
    </m.div>
  );
}

