import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { LazyMotion, MotionConfig } from 'motion/react';
import Landing from '@/components/Landing';

// The front page (tic-tac-toe gate) is pre-rendered and loads first. The
// portfolio itself is a separate chunk, fetched in the background meanwhile.
const loadSite = () => import('./Site');
const Site = lazy(loadSite);
const loadFeatures = () => import('./lib/motion-features').then((r) => r.default);

const HASH = '#portfolio';

export default function App() {
  // Always false on the first render so it matches the pre-rendered HTML.
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const sync = () => setUnlocked(window.location.hash === HASH);
    sync();
    window.addEventListener('hashchange', sync);
    // Warm up the portfolio chunk as soon as there is a real visitor on the
    // front page (not during page load, so it never slows the first paint).
    const evs = ['pointermove', 'pointerdown', 'touchstart', 'keydown'];
    const warm = () => {
      evs.forEach((e) => window.removeEventListener(e, warm));
      loadSite();
    };
    evs.forEach((e) => window.addEventListener(e, warm, { once: true, passive: true }));
    return () => {
      window.removeEventListener('hashchange', sync);
      evs.forEach((e) => window.removeEventListener(e, warm));
    };
  }, []);

  const unlock = useCallback(() => {
    window.location.hash = HASH;
  }, []);

  const returnHome = useCallback(() => {
    history.pushState('', '', window.location.pathname + window.location.search);
    setUnlocked(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        {unlocked ? (
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Site onHome={returnHome} />
          </Suspense>
        ) : (
          <Landing onUnlock={unlock} />
        )}
      </MotionConfig>
    </LazyMotion>
  );
}
