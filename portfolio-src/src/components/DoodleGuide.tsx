import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { m, AnimatePresence, useAnimationControls, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';
import { useSite } from '@/lib/site';
import { paletteShortcut } from '@/lib/platform';

/**
 * A sketchbook-style guide that keeps you company down the page.
 *
 * Where she lives (so she never covers any content):
 * - 1024px and wider: in her own margin on the right (the page reserves it via
 *   the --rail width), standing at the bottom with her speech bubble above her.
 * - Narrower screens: small, in the nav bar next to the menu button. Her
 *   bubble only opens when you tap her.
 *
 * What she does:
 * - The first time each section comes into view she says one line (shown
 *   whole, with a short fade), keeps it up for about 4 seconds, then the
 *   bubble folds away. On small screens she just changes pose and prop.
 * - Click/tap her to hear the current section's line again. Keep clicking
 *   for quips; click six times in a few seconds and she pops into confetti.
 * - Eyes follow the pointer, legs run while you scroll, little tricks when
 *   you pause, a nap if you leave her alone for long.
 * Everything that moves is switched off for prefers-reduced-motion.
 */

type Pose = 'wave' | 'point' | 'think' | 'cheer' | 'rest' | 'carry' | 'magnify' | 'paint' | 'camera' | 'juggle' | 'idea';
type Prop = 'none' | 'briefcase' | 'magnifier' | 'brush' | 'camera' | 'balls' | 'bulb';
type Trick = 'jump' | 'spin' | 'dance' | 'look' | 'cartwheel' | 'wave';

const SCRIPT: Record<string, { text: string; pose: Pose; prop: Prop }> = {
  intro: { text: 'Hi, welcome to my Pandora!', pose: 'wave', prop: 'none' },
  about: { text: "Hi, I'm Manasa! Scroll down and I'll show you around.", pose: 'wave', prop: 'none' },
  experience: { text: "Briefcase packed. This is where I've worked.", pose: 'carry', prop: 'briefcase' },
  research: { text: 'My research papers. I looked very closely.', pose: 'magnify', prop: 'magnifier' },
  transition: { text: 'Hold on, things are about to get colorful…', pose: 'cheer', prop: 'none' },
  products: { text: 'Lightbulb moment! Pick a device below to try a project live.', pose: 'idea', prop: 'bulb' },
  creative: { text: 'Welcome to my desk! Click anything to look closer.', pose: 'paint', prop: 'brush' },
  skills: { text: 'My toolkit, all in one place.', pose: 'juggle', prop: 'balls' },
  life: { text: 'Say cheese! Can you sort my photos into four groups?', pose: 'camera', prop: 'camera' },
  footer: { text: 'Thanks for stopping by! Say hi anytime.', pose: 'wave', prop: 'none' },
};

const QUIPS = ['That tickles.', 'Psst… press {KEY} to jump anywhere.', 'Wheee!', 'Okay, okay…', 'Catch me if you can!'];
const TRICKS: Trick[] = ['jump', 'spin', 'dance', 'look', 'cartwheel', 'wave'];

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
/** How long a line stays up before the bubble folds away. */
const SAY_MS = 4000;
/** Below this width she sits in the nav bar instead of her own margin. */
const DOCK_QUERY = '(max-width: 1023px)';

function useDocked() {
  const [docked, setDocked] = useState(() => typeof window !== 'undefined' && window.matchMedia(DOCK_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(DOCK_QUERY);
    const on = () => setDocked(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return docked;
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
  const { active, light } = useSite();
  const reduced = !!useReducedMotion();
  const docked = useDocked();
  // What the bubble says right now (null = folded away).
  const [said, setSaid] = useState<string | null>(null);
  const [entered, setEntered] = useState(reduced);
  const [trick, setTrick] = useState<Trick | null>(null);
  const [asleep, setAsleep] = useState(false);
  const [popped, setPopped] = useState<{ x: number; y: number } | null>(null);
  const spoken = useRef(new Set<string>());
  const clicks = useRef<number[]>([]);
  const hideTimer = useRef(0);
  const hop = useAnimationControls();
  const turb = useRef<SVGFETurbulenceElement>(null);
  const legs = useRef<SVGGElement>(null);
  const pupils = useRef<SVGGElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const lastActivity = useRef(Date.now());
  const asleepRef = useRef(false);
  const dockedRef = useRef(docked);
  dockedRef.current = docked;

  const scene = SCRIPT[active] || SCRIPT.intro;
  const ink = light ? '#111111' : '#ffffff';
  const paper = light ? '#ffffff' : '#000000';

  /** Say a line, then fold the bubble away after a few seconds. */
  const say = (text: string, ms = SAY_MS) => {
    setSaid(text);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setSaid(null), ms);
  };
  const hush = () => {
    window.clearTimeout(hideTimer.current);
    setSaid(null);
  };
  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

  /** Hops are much smaller in the nav bar, so she never leaves the screen. */
  const jump = (y: number[], duration: number) => {
    if (reduced) return;
    const k = dockedRef.current ? 0.2 : 1;
    hop.start({ y: y.map((v) => v * k), transition: { duration } });
  };

  const quip = (n: number) => {
    const key = paletteShortcut();
    const lines = QUIPS.filter((q) => key || !q.includes('{KEY}')).map((q) => q.replace('{KEY}', key ?? ''));
    return lines[(n - 1) % lines.length];
  };

  let pose: Pose = scene.pose;
  if (trick === 'wave') pose = 'wave';
  if (asleep) pose = 'rest';
  const prop: Prop = asleep ? 'none' : scene.prop;
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

  // A new section: speak its line once (only in the margin, never over content).
  useEffect(() => {
    if (!entered) return;
    if (!spoken.current.has(active)) {
      spoken.current.add(active);
      if (!docked) say(scene.text);
    } else {
      hush();
    }
    jump([0, -14, 0], 0.45);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, entered]);

  // Moving to a small screen: fold the bubble so it never sits over content.
  useEffect(() => {
    if (docked) hush();
  }, [docked]);

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
      jump([0, -22, 0], 0.4);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  // Idle: a silent trick now and then, a nap after a long pause.
  useEffect(() => {
    if (reduced || !entered) return;
    const t = window.setInterval(() => {
      const idle = Date.now() - lastActivity.current;
      if (idle > SLEEP_AFTER_MS) {
        asleepRef.current = true;
        setAsleep(true);
        return;
      }
      if (asleepRef.current || idle < 4000 || Math.random() < 0.5) return;
      const next = TRICKS[Math.floor(Math.random() * TRICKS.length)];
      setTrick(next);
      if (next === 'jump') jump([0, -26, 0, -10, 0], 0.8);
      if (next === 'spin') hop.start({ rotateY: [0, 360], transition: { duration: 0.8, ease: 'easeInOut' } });
      if (next === 'cartwheel') hop.start({ rotate: [0, 360], transition: { duration: 0.9, ease: 'easeInOut' } });
      window.setTimeout(() => setTrick(null), 2400);
    }, IDLE_TRICK_MS / 2);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, entered, hop]);

  const pop = () => {
    const b = button.current?.getBoundingClientRect();
    if (!b) return;
    clicks.current = [];
    hush();
    setPopped({ x: b.left + b.width / 2, y: b.top + b.height / 2 });
    // Back after a moment: drop in from above.
    window.setTimeout(() => {
      setPopped(null);
      say('Ta-da! Good as new.');
      const k = dockedRef.current ? 0.1 : 1;
      hop.start({ y: [-500 * k, 0, -40 * k, 0, -12 * k, 0], scale: 1, transition: { duration: 1.1, times: [0, 0.45, 0.62, 0.78, 0.9, 1] } });
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
    // Bubble closed: tapping her re-opens the line for this section.
    if (said === null && n === 1) {
      say(scene.text, docked ? 5000 : SAY_MS);
      jump([0, -14, 0], 0.45);
      return;
    }
    if (!reduced && n >= POP_AT) {
      say('POP!', 800);
      pop();
      return;
    }
    if (n === POP_AT - 2) say("Careful, I'm getting dizzy…");
    else if (n === POP_AT - 1) say("Stop it, I'm gonna pop!");
    else say(quip(n));
    if (reduced) return;
    const moves = [
      () => hop.start({ rotate: [0, 360], transition: { duration: 0.8, ease: 'easeInOut' } }),
      () => hop.start({ rotateY: [0, 360], transition: { duration: 0.7 } }),
      () => jump([0, -40, 0, -16, 0], 0.8),
    ];
    // Puffs up as you keep clicking.
    if (n >= POP_AT - 2) hop.start({ scale: [1, 1.25 + (n - POP_AT + 2) * 0.1, 1.1], transition: { duration: 0.35 } });
    else moves[Math.floor(Math.random() * moves.length)]();
  };

  const anim = (cls: string) => (reduced ? '' : cls);
  const rightArmAnim = trick === 'dance' ? 'doodle-dance-r' : pose === 'wave' ? 'doodle-wave' : '';
  const leftArmAnim = trick === 'dance' ? 'doodle-dance-l' : '';

  const bubble = (
    <AnimatePresence>
      {said !== null && entered && (
        <m.div
          key="bubble"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: docked ? -6 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.15 : 0.25, ease: 'easeOut' }}
          style={{ color: ink, background: paper, borderColor: ink }}
          className={`doodle-bubble pointer-events-auto border-2 px-3 py-2 pr-6 font-serif italic leading-snug transition-colors duration-500 ${
            docked
              ? 'fixed top-[68px] right-3 z-50 max-w-[min(260px,calc(100vw-24px))] text-[15px] shadow-lg'
              : 'absolute left-2 right-2 bottom-[calc(100%+10px)] text-[14px] xl:text-[15px]'
          }`}
        >
          {said}
          <button onClick={hush} aria-label="Hide message" className="absolute top-1 right-1 opacity-50 hover:opacity-100 focus-visible:opacity-100">
            <X className="h-3 w-3" />
          </button>
          {/* tail, pointing at her */}
          <svg
            className={`absolute ${docked ? '-top-[13px] right-[30px] rotate-180' : '-bottom-[13px] left-1/2 -translate-x-1/2'}`}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            aria-hidden
          >
            <path d="M1 0 L7 13 L13 0" fill={paper} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </m.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Her margin (wide screens): the page reserves this strip, so nothing sits under it. */}
      {!docked && (
        <div
          aria-hidden
          className="fixed top-0 right-0 bottom-0 z-30 border-l transition-colors duration-500 pointer-events-none"
          style={{ width: 'var(--rail)', background: paper, borderColor: light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)' }}
        />
      )}
      {/* Screen readers get each line once, without the visual timing. */}
      <p className="sr-only" aria-live="polite">{said ?? ''}</p>
      <m.div
        className={
          docked
            ? 'fixed top-[6px] right-[52px] sm:right-[70px] z-50 w-[38px] pointer-events-none select-none'
            : 'fixed bottom-4 right-0 z-30 flex justify-center pointer-events-none select-none'
        }
        style={docked ? undefined : { width: 'var(--rail)' }}
        initial={reduced ? false : { opacity: 0, y: docked ? 0 : 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => setEntered(true)}
      >
        {!docked && bubble}
        <div className={docked ? 'relative' : 'relative w-[96px] xl:w-[108px]'}>
          {popped && <Confetti x={popped.x} y={popped.y} />}
          <m.button
            ref={button}
            animate={hop}
            onClick={onPoke}
            style={{ transformPerspective: 400, visibility: popped ? 'hidden' : 'visible' }}
            aria-label={`Doodle guide. ${said === null ? 'Tap to hear what she says about this section.' : 'Tap for a quip.'}`}
            className="doodle-btn pointer-events-auto w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-xl"
          >
        <svg
          viewBox="0 0 120 160"
          className="w-full h-auto overflow-visible"
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
                    <rect x="77" y="106" width="16" height="11" rx="1.5" fill="#a16207" />
                  </g>
                )}
                {prop === 'magnifier' && (
                  <g strokeWidth="2.2">
                    <path d="M85 104 L88 110" fill="none" />
                    <circle cx="90.5" cy="115" r="6" fill="#bae6fd" fillOpacity="0.5" />
                  </g>
                )}
              </g>

              {/* body */}
              <path d="M46 76 C 55 74, 65 74, 74 76 L 78 113 C 66 115, 54 115, 42 113 Z" />
              <path d="M60 68 L60 75" fill="none" />
              {/* hair, back layer */}
              <path d="M35 40 C 30 56, 31 70, 37 80 M85 40 C 90 56, 89 70, 83 80" fill="none" />
              {/* head */}
              <path d="M60 16 C 76 15, 87 28, 86 43 C 85 59, 73 69, 59 68 C 44 68, 33 57, 34 42 C 35 27, 45 17, 60 16 Z" />
              {/* fringe */}
              <path d="M36 36 C 40 20, 56 12, 70 15 C 79 17, 86 26, 86 37 M50 18 C 52 26, 47 31, 42 33 M62 16 C 63 24, 60 29, 56 31" fill="none" />

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

              {/* mouth */}
              {asleep ? (
                <circle cx="60" cy="56" r="1.8" fill="none" strokeWidth="1.8" />
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
        </div>
      </m.div>
      {docked && bubble}
    </>
  );
}
