import { useEffect, useRef, type ReactNode } from 'react';
import { useSite } from '@/lib/site';

/**
 * Wraps the parts of the page that sit behind the opening story (the nav, the
 * sections below). While the story plays they are inert: no keyboard focus,
 * hidden from screen readers. React 18 has no `inert` prop, so it is set here.
 */
export default function BehindIntro({ children }: { children: ReactNode }) {
  const { introDone } = useSite();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (introDone) el.removeAttribute('inert');
    else el.setAttribute('inert', '');
  }, [introDone]);
  return <div ref={ref}>{children}</div>;
}
