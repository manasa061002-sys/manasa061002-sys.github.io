import { lazy, startTransition, Suspense, useEffect, useState } from 'react';
import { SiteProvider, useSite } from '@/lib/site';
import NavBar from '@/components/NavBar';
import About from '@/components/About';
import Intro from '@/components/Intro';
import DoodleGuide from '@/components/DoodleGuide';
import BehindIntro from '@/components/BehindIntro';
import SpiderGame from '@/components/SpiderGame';
// Handwriting for the margin notes on the paper half.
import '@fontsource/caveat/latin-500.css';
// The bubbly letters on the colourful side of the name board.
import '@fontsource/fredoka/latin-600.css';
// The name board's other letter styles: blackletter, drippy paint, a fat serif.
import '@fontsource/pirata-one/latin-400.css';
import '@fontsource/rubik-wet-paint/latin-400.css';
import '@fontsource/abril-fatface/latin-400.css';

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
      <div className="zone-dark relative min-h-screen bg-black animate-[fadeIn_0.8s_ease]">
        <BehindIntro>
          <NavBar onHome={onHome} />
        </BehindIntro>
        {/* Welcome: the opening story (first visit), then the name */}
        <Intro />
        <BehindIntro>
          {/* Professional — stark black & white */}
          <About />
          {showRest && (
            <Suspense fallback={<div className="h-screen" />}>
              <Below />
            </Suspense>
          )}
        </BehindIntro>
        <SpiderGameWhenReady />
        <DoodleGuide />
      </div>
    </SiteProvider>
  );
}

/** The spider joins once the opening story is over. */
function SpiderGameWhenReady() {
  const { introDone } = useSite();
  return introDone ? <SpiderGame /> : null;
}
