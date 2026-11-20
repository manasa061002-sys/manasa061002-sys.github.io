import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { profile } from '@/data/portfolio';
import Roamer from '@/components/Roamer';
import SplitFlap, { flapClick, primeFlapSound } from '@/components/SplitFlap';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';
import { Bird, Elephant, GlassesOwl, Monkey, WalkingCat } from '@/components/Critters';

/** Roughly when the name has finished flipping into place. */
const NAME_SETTLES_MS = 2300;
const ROLE_EVERY_MS = 3200;

/**
 * The welcome screen shown right after the front page: the name arrives on a
 * split-flap departure board, then the line underneath keeps flipping through
 * roles. The animals perch on the board and stand on the line under it, and
 * now and then the elephant sprays the board. Flap sound is off by default.
 */
export default function Intro() {
  const [first, ...rest] = profile.name.split(' ');
  const last = rest.join(' ');
  const roles = profile.flapRoles;
  const roleCells = Math.max(...roles.map((r) => r.length));
  const reduced = useReducedMotionSafe();
  const [role, setRole] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [sound, setSound] = useState(false);

  // After the name settles, flip through the roles (not with reduced motion).
  useEffect(() => {
    if (reduced) return;
    let every = 0;
    const start = window.setTimeout(() => {
      setRolling(true);
      every = window.setInterval(() => setRole((r) => (r + 1) % roles.length), ROLE_EVERY_MS);
    }, NAME_SETTLES_MS);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(every);
    };
  }, [reduced, roles.length]);

  const toggleSound = () => {
    if (!sound) primeFlapSound();
    setSound((s) => !s);
  };
  const onStep = sound ? flapClick : undefined;

  return (
    <section
      id="intro"
      data-section="intro"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      <h1 className="sr-only">{profile.name}</h1>
      <p className="sr-only">{roles.join(', ')}</p>

      <div className="relative w-fit select-none">
        {/* --- the board --- */}
        <div className="relative w-fit text-[11vw] sm:text-[8vw] lg:text-[6.5rem] leading-none">
          <SplitFlap text={first} startDelay={400} instant={reduced} onStep={onStep} />
          {/* a sparrow resting on the first flap */}
          <Bird className="absolute left-[1%] -top-[30%] w-[12%] min-w-[30px]" />
          {/* the owl, perched on the last flap */}
          <GlassesOwl className="owl-perch absolute -right-[3%] -top-[62%] w-[16%] min-w-[38px]" />
        </div>
        <div className="mt-[0.08em] pl-[1.2em] text-[11vw] sm:text-[8vw] lg:text-[6.5rem] leading-none">
          <SplitFlap text={last} startDelay={700} instant={reduced} onStep={onStep} />
        </div>

        {/* a sprinkle of light where the water lands */}
        {[
          { l: '22%', t: '8%' },
          { l: '58%', t: '2%' },
          { l: '82%', t: '44%' },
          { l: '44%', t: '54%' },
        ].map((p, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="sparkle ink-flip absolute w-3 h-3 sm:w-4 sm:h-4"
            style={{ left: p.l, top: p.t, animationDelay: `${0.25 + i * 0.15}s` }}
            aria-hidden
          >
            <path d="M10 0 L11.2 8.8 L20 10 L11.2 11.2 L10 20 L8.8 11.2 L0 10 L8.8 8.8 Z" fill="#ffffff" />
          </svg>
        ))}

        {/* --- the line the animals stand on --- */}
        <div className="relative mt-[6%] h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0" aria-hidden>
          <Elephant spray="tall" className="absolute left-[-2%] bottom-0 w-[13%] min-w-[64px]" />
          <div className="absolute inset-x-[22%] bottom-0 h-8">
            <Roamer mode="crawl" speed={40} aspect={12} points={[{ x: 0, y: 100, hold: 2 }, { x: 100, y: 100, hold: 2 }]}>
              <WalkingCat tone="dark" className="w-12 sm:w-16" />
            </Roamer>
          </div>
          <Monkey className="absolute right-[1%] bottom-[-2px] w-[6%] min-w-[30px]" />
        </div>

        {/* --- the role line: keeps flipping --- */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {reduced ? (
            <span className="text-[13px] sm:text-[15px] tracking-[0.3em] uppercase text-white/70">{roles.join(' · ')}</span>
          ) : (
            <SplitFlap
              text={rolling ? roles[role] : ''}
              length={roleCells}
              onStep={onStep}
              className="flap-small text-[5vw] sm:text-[2.6vw] lg:text-[1.75rem]"
            />
          )}
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={sound}
            aria-label={sound ? 'Turn flap sound off' : 'Turn flap sound on'}
            title={sound ? 'Flap sound: on' : 'Flap sound: off'}
            className="shrink-0 rounded-full border border-white/20 p-2 text-white/60 hover:text-white hover:border-white/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            {sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-3 text-white/40" aria-hidden>
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-white/40 to-transparent motion-safe:animate-pulse" />
      </div>
    </section>
  );
}
