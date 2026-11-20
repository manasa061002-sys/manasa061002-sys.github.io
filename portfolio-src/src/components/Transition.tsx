import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useSite } from '@/lib/site';

const BANDS = [
  '#ec4899', '#f0609f', '#f59e0b', '#facc15', '#a3e635', '#22d3ee',
  '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
];
const ROWS = 6;
// How far the section stays pinned, in viewport heights.
const PIN_VH = 130;

/**
 * The bridge between the black professional half and the white "other side".
 * As it scrolls into view the grid draws itself in and colour starts to bleed
 * through the columns, so there is never a blank screen. Then it pins (GSAP
 * ScrollTrigger) while you scroll: the columns widen into colour bands, the
 * bands lift off the headline, which turns rainbow. It now invites you to try
 * the Analyst / Artist switch in the nav (with a button to flip it here too).
 * Colours come from the theme, so it works on black (Analyst) and paper (Artist).
 * The section ends 40vh early (negative margin), so Product Concepts slides up
 * under the headline while it is still pinned instead of after a blank half
 * screen. That bottom part of the stage is empty, so nothing is hidden.
 *
 * The section reserves its full scroll height in CSS (pinSpacing: false), and
 * the start state is plain CSS, so GSAP can load lazily without layout jumps.
 */
export default function Transition() {
  const { mode, switchMode } = useSite();
  const other = mode === 'analyst' ? 'artist' : 'analyst';
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const st = stage.current;
    if (!el || !st) return;
    let revert = () => {};
    let started = false;
    let cancelled = false;

    const start = async () => {
      if (started) return;
      started = true;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const q = gsap.utils.selector(st);

        // Arriving (section top from the bottom of the screen to the top):
        // grid lines draw in, then colour bleeds into the columns.
        gsap
          .timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: el, start: 'top bottom', end: 'top top', scrub: 0.5 } })
          .fromTo(q('[data-line]'), { scaleY: 0 }, { scaleY: 1, transformOrigin: '50% 0%', duration: 0.5, stagger: { each: 0.03, from: 'center' } }, 0)
          .fromTo(q('[data-row]'), { scaleX: 0 }, { scaleX: 1, transformOrigin: '0% 50%', duration: 0.5, stagger: 0.05 }, 0.1)
          .fromTo(q('[data-fill]'), { scaleX: 0 }, { scaleX: 0.14, duration: 0.45, stagger: { each: 0.03, from: 'center' } }, 0.45)
          .fromTo(q('[data-t-kicker]'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 }, 0.6);

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `+=${PIN_VH}%`,
            pin: st,
            pinSpacing: false,
            scrub: 0.6,
          },
        });

        tl.to(q('[data-row]'), { opacity: 0, duration: 0.25 }, 0)
          .to(q('[data-line]'), { opacity: 0, duration: 0.2 }, 0.05)
          .to(q('[data-fill]'), { scaleX: 1, duration: 0.4, stagger: { each: 0.02, from: 'center' } }, 0.02)
          .fromTo(q('[data-t-line1]'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.2)
          .fromTo(q('[data-t-line2]'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.28)
          .to(q('[data-fill]'), { scaleY: 0, duration: 0.22, stagger: { each: 0.01, from: 'edges' } }, 0.56)
          // The lettering turns rainbow once the colour bands have lifted away.
          .to(q('[data-t-text]'), { '--fill-a': 0, duration: 0.18 }, 0.7)
          .to(q('[data-t-arrow]'), { opacity: 0, duration: 0.1 }, 0.85);

      });

      revert = () => mm.revert();
    };

    // Wire up once the section is within ~2 screens. Its height is reserved in
    // CSS, so setting up late (even mid-scroll) never shifts the page.
    const io = new IntersectionObserver(([e]) => e.isIntersecting && start(), { rootMargin: '200% 0px' });
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      revert();
    };
  }, []);

  return (
    <section
      ref={root}
      data-section="transition"
      className="relative motion-safe:mb-[-40vh] motion-reduce:!h-[70vh]"
      style={{ height: `${100 + PIN_VH}vh` }}
    >
      <div ref={stage} className="relative h-screen overflow-hidden motion-reduce:h-[70vh] bg-black">
        {/* Static fallback for reduced motion */}
        <div
          className="hidden motion-reduce:block absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgb(var(--c-black)) 0%, #ec4899 35%, #facc15 50%, #06b6d4 65%, #a855f7 80%, rgb(var(--c-black)) 100%)',
          }}
        />

        {/* Grid lines → colour bands */}
        <div className="absolute inset-0 flex motion-reduce:hidden" aria-hidden>
          {BANDS.map((c) => (
            <div key={c} className="relative h-full flex-1">
              <div data-line className="absolute inset-y-0 left-1/2 w-px bg-white/[0.12]" />
              <div
                data-fill
                className="absolute inset-0 will-change-transform"
                style={{ background: c, transform: 'scaleX(0)', transformOrigin: '50% 0%' }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col justify-evenly motion-reduce:hidden" aria-hidden>
          {Array.from({ length: ROWS }).map((_, i) => (
            <div key={i} data-row className="h-px w-full bg-white/[0.08]" />
          ))}
        </div>

        <div
          className="transition-text relative z-10 h-full flex flex-col items-center justify-center px-6 text-white"
          style={{ ['--fill-a' as string]: 1 }}
          data-t-text
        >
          <p data-t-kicker className="rainbow-text text-[11px] tracking-[0.3em] uppercase opacity-80 mb-6">
            The other side
          </p>
          <h2 className="text-5xl sm:text-7xl font-medium text-center leading-[1.02] tracking-tight">
            <span data-t-line1 className="rainbow-text block pb-1">Where structure</span>
            <span data-t-line2 className="rainbow-text block italic pb-2 pr-2">meets color</span>
          </h2>
          {/* The invitation to try the mode switch in the nav. */}
          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-center text-white/80">Flip the switch up top.</p>
          <button
            type="button"
            onClick={(e) => switchMode(other, { x: e.clientX, y: e.clientY })}
            className="mt-4 rounded-full border border-white/30 px-5 py-2 text-[13px] text-white/80 hover:text-white hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            {other === 'artist' ? 'Or try Artist mode right here' : 'Or go back to Analyst mode'}
          </button>
          <ArrowDown data-t-arrow className="mt-8 h-5 w-5 opacity-60 motion-safe:animate-bounce" />
        </div>
      </div>
    </section>
  );
}
