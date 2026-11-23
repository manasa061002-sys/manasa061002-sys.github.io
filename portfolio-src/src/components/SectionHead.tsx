import { useEffect, useRef, useState, type ReactNode } from 'react';
import SplitFlap from '@/components/SplitFlap';
import Scribble from '@/components/Scribble';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';

/**
 * The one section header used by every section: a pink number, a label on a
 * small split-flap board that flips in once when the header reaches the
 * screen, an optional title, and an optional lead line. `tone` follows the zone the
 * section sits in (dark = the black top half, light = Products onwards).
 * The label letters must be A–Z, spaces, & - . (what the board can show).
 */
export default function SectionHead({
  no,
  label,
  title,
  lead,
  scribble,
  tone = 'dark',
}: {
  no: string;
  label: string;
  title?: ReactNode;
  lead?: ReactNode;
  scribble?: ReactNode;
  tone?: 'dark' | 'light';
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionSafe();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { rootMargin: '0px 0px -15% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ink = tone === 'light' ? 'text-gray-900' : 'text-white';
  const soft = tone === 'light' ? 'text-gray-600' : 'text-white/70';

  return (
    <header ref={ref} className="relative mb-10 sm:mb-12">
      <p className="flex items-center gap-3">
        <span className="section-no">{no}</span>
        <span className="sr-only">{label}</span>
        <SplitFlap text={shown || reduced ? label : ''} length={label.length} instant={reduced} className="flap-label" />
      </p>
      {title && <h2 className={`mt-4 text-4xl sm:text-6xl font-medium tracking-tight leading-[1.02] ${ink}`}>{title}</h2>}
      {lead && <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${soft}`}>{lead}</p>}
      {scribble && <Scribble className="lg:right-0 lg:-top-3">{scribble}</Scribble>}
    </header>
  );
}
