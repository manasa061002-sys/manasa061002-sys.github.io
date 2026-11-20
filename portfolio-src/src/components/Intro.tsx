import { profile } from '@/data/portfolio';
import Roamer from '@/components/Roamer';
import { Bird, Elephant, GlassesOwl, Monkey, WalkingCat } from '@/components/Critters';

/**
 * The welcome screen shown right after the front page: the name set large in
 * a fine serif, resting on a hairline. A few line-drawn animals keep it
 * company, and now and then the elephant sprays a high arc of water over the
 * name, which catches the light as it lands.
 */
export default function Intro() {
  const [first, ...rest] = profile.name.split(' ');
  const last = rest.join(' ');

  return (
    <section
      id="intro"
      data-section="intro"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <h1 className="sr-only">{profile.name}</h1>

      <div className="relative w-fit select-none" aria-hidden>
        {/* --- the name --- */}
        <div className="relative w-fit">
          <span className="glitter-name block font-serif font-normal leading-[0.92] tracking-[-0.01em] text-[15vw] sm:text-[12vw] lg:text-[9.5rem]">
            {first}
          </span>
          {/* a sparrow resting on the M */}
          <Bird className="absolute left-[3%] -top-[4%] w-[11%] min-w-[30px]" />
          {/* the owl, perched on the final letter */}
          <GlassesOwl className="owl-perch absolute -right-[4%] bottom-[46%] w-[15%] min-w-[38px]" />
        </div>
        <span
          className="glitter-name block font-serif font-normal italic leading-[1] tracking-[-0.01em] text-[15vw] sm:text-[12vw] lg:text-[9.5rem] pl-[0.35em] sm:pl-[0.6em] pr-[0.06em]"
          style={{ animationDelay: '0.35s' }}
        >
          {last}
        </span>

        {/* a sprinkle of light where the water lands */}
        {[
          { l: '22%', t: '14%' },
          { l: '58%', t: '6%' },
          { l: '78%', t: '48%' },
          { l: '44%', t: '58%' },
        ].map((p, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="sparkle ink-flip absolute w-3 h-3 sm:w-4 sm:h-4"
            style={{ left: p.l, top: p.t, animationDelay: `${0.25 + i * 0.15}s` }}
          >
            <path d="M10 0 L11.2 8.8 L20 10 L11.2 11.2 L10 20 L8.8 11.2 L0 10 L8.8 8.8 Z" fill="#ffffff" />
          </svg>
        ))}

        {/* --- the hairline the animals stand on --- */}
        <div className="relative mt-[4%] h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0">
          {/* elephant at the left end, spraying up over the name */}
          <Elephant spray="tall" className="absolute left-[-1%] bottom-0 w-[13%] min-w-[64px]" />
          {/* the cat strolling along the line */}
          <div className="absolute inset-x-[22%] bottom-0 h-8">
            <Roamer mode="crawl" speed={40} aspect={12} points={[{ x: 0, y: 100, hold: 2 }, { x: 100, y: 100, hold: 2 }]}>
              <WalkingCat tone="dark" className="w-12 sm:w-16" />
            </Roamer>
          </div>
          {/* the white monkey, sitting at the right end */}
          <Monkey className="absolute right-[2%] bottom-[-2px] w-[6%] min-w-[30px]" />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-3 text-white/40">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-white/40 to-transparent motion-safe:animate-pulse" />
      </div>
    </section>
  );
}
