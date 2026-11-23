import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { PAPER_EVENT } from '@/lib/site';

const BANDS = [
  '#ec4899', '#f0609f', '#f59e0b', '#facc15', '#a3e635', '#22d3ee',
  '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
];
const ROWS = 6;
// How far the section stays pinned, in viewport heights.
const PIN_VH = 80;
// Space between the arrow under the headline and the top of Product Concepts.
const GAP_PX = 10;

/**
 * The hinge of the page: the black professional half turns into the paper
 * creative half. As it scrolls into view the grid draws itself in and colour
 * starts to bleed through the columns. Then it pins (GSAP ScrollTrigger)
 * while you scroll: the columns widen into colour bands, paper sweeps up from
 * the bottom over them, and the headline turns rainbow ink on paper. Product
 * Concepts (also on paper) follows straight on.
 * The section ends early (a measured negative margin), so Product Concepts slides up
 * under the headline while it is still pinned instead of after a blank half
 * screen. That bottom part of the stage is plain paper by then, so nothing is hidden.
 *
 * The section reserves its full scroll height in CSS (pinSpacing: false), and
 * the start state is plain CSS, so GSAP can load lazily without layout jumps.
 * With reduced motion it is simply paper with a colour edge on top.
 */
export default function Transition() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const st = stage.current;
    if (!el || !st) return;
    let revert = () => {};
    let refresh = () => {};
    let started = false;
    let cancelled = false;

    const start = async () => {
      if (started) return;
      started = true;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      refresh = () => ScrollTrigger.refresh();
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

        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: el,
              start: 'top top',
              end: `+=${PIN_VH}%`,
              pin: st,
              pinSpacing: false,
              scrub: 0.6,
              // Tell the doodle guide once the paper covers the screen, so she switches to ink.
              onUpdate: (self) => window.dispatchEvent(new CustomEvent(PAPER_EVENT, { detail: self.progress > 0.62 })),
            },
          })
          .to(q('[data-row]'), { opacity: 0, duration: 0.2 }, 0)
          .to(q('[data-line]'), { opacity: 0, duration: 0.2 }, 0.05)
          .to(q('[data-fill]'), { scaleX: 1, duration: 0.35, stagger: { each: 0.02, from: 'center' } }, 0.02)
          .fromTo(q('[data-t-line1]'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.18 }, 0.18)
          .fromTo(q('[data-t-line2]'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.18 }, 0.26)
          // paper sweeps up over the colour bands
          .to(q('[data-paper]'), { scaleY: 1, duration: 0.3, ease: 'power1.inOut' }, 0.48)
          // the lettering turns rainbow, the arrow turns to ink
          .to(q('[data-t-text]'), { '--fill-a': 0, color: '#1c1917', duration: 0.18 }, 0.62);
      });

      revert = () => mm.revert();
    };

    // Wire up once the section is within ~2 screens. Its height is reserved in
    // CSS, so setting up late (even mid-scroll) never shifts the page.
    const io = new IntersectionObserver(([e]) => e.isIntersecting && start(), { rootMargin: '200% 0px' });
    io.observe(el);

    // Product Concepts starts right under the arrow, with the same small gap
    // at every screen size: the section's bottom margin pulls it up by
    // however much empty stage is left below the headline block.
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fit = () => {
      // Measured from the arrow's box (offsets ignore transforms, so the pin
      // and the bounce never skew the number).
      const arrow = st.querySelector<HTMLElement>('[data-t-arrow]');
      if (rm.matches || !arrow) {
        el.style.marginBottom = '';
        return;
      }
      const below = st.clientHeight - (arrow.offsetTop + arrow.offsetHeight);
      const next = `${-Math.max(0, Math.round(below - GAP_PX))}px`;
      if (el.style.marginBottom !== next) {
        el.style.marginBottom = next;
        refresh();
      }
    };
    const ro = new ResizeObserver(fit);
    ro.observe(st);
    fit();

    return () => {
      cancelled = true;
      ro.disconnect();
      io.disconnect();
      revert();
    };
  }, []);

  return (
    <section
      ref={root}
      data-section="transition"
      className="relative motion-reduce:!h-[70vh]"
      style={{ height: `${100 + PIN_VH}vh` }}
    >
      <div ref={stage} className="transition-stage relative h-screen overflow-hidden motion-reduce:h-[70vh] bg-black">
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
        {/* the paper of the creative half, sweeping up from the bottom */}
        <div
          data-paper
          aria-hidden
          className="absolute inset-0 motion-reduce:hidden"
          style={{ background: 'rgb(var(--paper))', transform: 'scaleY(0)', transformOrigin: '50% 100%' }}
        />

        <div
          className="transition-text relative z-10 h-full flex flex-col items-center justify-center px-6 text-white"
          style={{ ['--fill-a' as string]: 1 }}
          data-t-text
        >
          <p data-t-kicker className="rainbow-text text-[12px] tracking-[0.3em] uppercase opacity-80 mb-6">
            The other side
          </p>
          <h2 className="text-5xl sm:text-7xl font-medium text-center leading-[1.02] tracking-tight">
            <span data-t-line1 className="rainbow-text block pb-1">Where structure</span>
            <span data-t-line2 className="rainbow-text block italic pb-2 pr-2">meets color</span>
          </h2>
          <span data-t-arrow className="mt-8 block h-5 w-5">
            <ArrowDown className="h-5 w-5 opacity-60 motion-safe:animate-bounce" aria-hidden />
          </span>
        </div>
      </div>
    </section>
  );
}
