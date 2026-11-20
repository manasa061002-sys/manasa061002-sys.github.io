import { useEffect, useState, type ReactNode } from 'react';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Transition from '@/components/Transition';
import Creative from '@/components/Creative';
import ProductConcepts from '@/components/ProductConcepts';
import Skills from '@/components/Skills';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { useSite } from '@/lib/site';

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

// Sections in page order. They mount one per idle slot so no single task
// blocks the main thread for long (keeps Lighthouse TBT low).
const DARK: (() => ReactNode)[] = [() => <Experience />, () => <Research />, () => <Transition />];
const LIGHT: (() => ReactNode)[] = [() => <ProductConcepts />, () => <Creative />, () => <Skills />, () => <Gallery />];
const TOTAL = DARK.length + LIGHT.length + 2; // + footer + overlays

/** Everything below the hero. Loaded as its own chunk after first paint. */
export default function Below() {
  const { sectionsMounted } = useSite();
  const [n, setN] = useState(1);

  useEffect(() => {
    if (n >= TOTAL) {
      sectionsMounted();
      return;
    }
    const w = window as IdleWindow;
    const next = () => setN((x) => x + 1);
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(next, { timeout: 400 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(next, 30);
    return () => window.clearTimeout(t);
  }, [n, sectionsMounted]);

  const dark = DARK.slice(0, n);
  const light = LIGHT.slice(0, Math.max(0, n - DARK.length));

  return (
    <>
      <main>
        {dark.map((render, i) => (
          <div key={i}>{render()}</div>
        ))}
        {light.length > 0 && (
          <div className="bg-white">
            {light.map((render, i) => (
              <div key={i}>{render()}</div>
            ))}
          </div>
        )}
      </main>
      {n >= TOTAL - 1 && <Footer />}
      {n >= TOTAL && (
        <>
          <CommandPalette />
        </>
      )}
    </>
  );
}
