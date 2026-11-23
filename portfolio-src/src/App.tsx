import { lazy, Suspense, useCallback } from 'react';
import { LazyMotion, MotionConfig } from 'motion/react';

// The portfolio opens straight into the opening story (no gate in front of it).
// Until the app has loaded, the page is the story's own blank black page.
const Site = lazy(() => import('./Site'));
const loadFeatures = () => import('./lib/motion-features').then((r) => r.default);

export default function App() {
  // The home icon in the nav plays the opening story again (it plays on every load).
  const replayStory = useCallback(() => {
    window.scrollTo(0, 0);
    window.location.reload();
  }, []);

  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Site onHome={replayStory} />
        </Suspense>
      </MotionConfig>
    </LazyMotion>
  );
}
