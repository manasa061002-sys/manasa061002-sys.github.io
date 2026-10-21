import { useEffect, useState } from 'react';
import Landing from '@/components/Landing';
import NavBar from '@/components/NavBar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Transition from '@/components/Transition';
import Creative from '@/components/Creative';
import ProductConcepts from '@/components/ProductConcepts';
import Skills from '@/components/Skills';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (unlocked) window.scrollTo(0, 0);
  }, [unlocked]);

  const returnHome = () => {
    window.scrollTo(0, 0);
    setUnlocked(false);
  };

  if (!unlocked) {
    return <Landing onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-black animate-[fadeIn_0.8s_ease]">
      <NavBar onHome={returnHome} />
      <main>
        {/* Professional — stark black & white */}
        <About />
        <Experience />
        <Research />

        {/* Bridge — black to vibrant color */}
        <Transition />

        {/* Personal — vibrant color explosion on white */}
        <div className="bg-white">
          <Creative />
          <ProductConcepts />
          <Skills />
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}
