import { lazy, startTransition, Suspense, useEffect, useState } from 'react';
import { SiteProvider } from '@/lib/site';
import NavBar from '@/components/NavBar';
import About from '@/components/About';
import Intro from '@/components/Intro';
import DoodleGuide from '@/components/DoodleGuide';

// Everything below the hero arrives as its own chunk and mounts section by section.
const Below = lazy(() => import('./Below'));

/** The portfolio, shown once the front page is unlocked. */
export default function Site({ onHome }: { onHome: () => void }) {
  const [showRest, setShowRest] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    startTransition(() => setShowRest(true));
  }, []);

  return (
    <SiteProvider>
      <div className="min-h-screen bg-black animate-[fadeIn_0.8s_ease]">
        <NavBar onHome={onHome} />
        {/* Welcome: the name in big letters with all the animals */}
        <Intro />
        {/* Professional — stark black & white */}
        <About />
        {showRest && (
          <Suspense fallback={<div className="h-screen" />}>
            <Below />
          </Suspense>
        )}
        <DoodleGuide />
      </div>
    </SiteProvider>
  );
}
