import { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'creative', label: 'Creative' },
  { id: 'products', label: 'Products' },
  { id: 'skills', label: 'Skills' },
  { id: 'life', label: 'Life' },
];

export default function NavBar({ onHome }: { onHome: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onHome}
            aria-label="Return to home"
            title="Return to home"
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <Home className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="text-base font-medium text-white tracking-tight"
          >
            <span className="font-serif text-lg">M</span>R
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-3.5 py-1.5 text-[13px] text-white/50 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-0.5 animate-[fadeIn_0.2s_ease]">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="py-2.5 text-[14px] text-white/70 hover:text-white transition-colors duration-300 text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
