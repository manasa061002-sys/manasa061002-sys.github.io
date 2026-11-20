import { useEffect, type RefObject } from 'react';
import { useMotionValue, type MotionValue } from 'motion/react';

/**
 * Scroll progress as a motion value, measured only while scrolling (never on
 * mount), so it adds no layout work during page load.
 *
 * - Without a target: progress through the whole page.
 * - With a target: 0 when its top reaches `startAt` of the viewport height,
 *   1 when its bottom reaches `endAt`.
 */
export function useScrollProgress(
  target?: RefObject<HTMLElement>,
  startAt = 0.75,
  endAt = 0.6,
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const vh = window.innerHeight;
      let p: number;
      if (target) {
        const el = target.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        p = (startAt * vh - r.top) / (r.height + (startAt - endAt) * vh);
      } else {
        const max = document.documentElement.scrollHeight - vh;
        p = max > 0 ? window.scrollY / max : 0;
      }
      progress.set(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      // At the very top nothing has progressed yet; skip the (layout-reading) measure.
      if (window.scrollY <= 0) {
        progress.set(0);
        return;
      }
      if (!raf) raf = requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    // No measuring on mount: reading scroll position here would force a layout
    // of freshly mounted content. A restored scroll position fires a scroll event.
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [target, startAt, endAt, progress]);

  return progress;
}
