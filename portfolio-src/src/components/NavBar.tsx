import { useState, useEffect } from 'react';
import { Home, Menu, X, Command } from 'lucide-react';
import { m, useSpring } from 'motion/react';
import { useScrollProgress } from '@/lib/useScrollProgress';
import { scrollToId, sections, useSite } from '@/lib/site';
import { paletteShortcut } from '@/lib/platform';

export default function NavBar({ onHome }: { onHome: () => void }) {
  const { setPaletteOpen, introDone } = useSite();
  // The nav lives in the dark zone: white on black over the whole page.
  const light = false;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // '⌘K' on a Mac, 'Ctrl K' elsewhere, hidden on touch screens.
  const [shortcut] = useState(paletteShortcut);
  const scrollYProgress = useScrollProgress();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  // Which section is on screen: the last one whose top has passed 45% of the viewport.
  const [here, setHere] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let cur: string | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) cur = s.id;
      }
      setHere(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  const bar = light
    ? 'bg-white/80 border-b border-black/[0.06]'
    : scrolled
      ? 'bg-black/80 border-b border-white/10'
      : 'bg-transparent border-b border-transparent';
  const text = light ? 'text-gray-900' : 'text-white';
  const muted = light
    ? 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
    : 'text-white/70 hover:text-white hover:bg-white/10';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-xl transition-[background-color,border-color,transform] duration-500 ${bar} ${introDone ? '' : '-translate-y-full pointer-events-none'}`}
      aria-hidden={!introDone}
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <button
          onClick={onHome}
          aria-label="Watch the opening story again"
          title="Watch the opening story again"
          className={`transition-colors duration-300 ${light ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
        >
          <Home className="h-4 w-4" />
        </button>
        <button
          onClick={() => go('top')}
          aria-label="MR, back to top"
          className={`text-base font-medium tracking-tight transition-colors duration-500 ${text}`}
        >
          <span className="font-serif text-lg">MR</span>
        </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {sections.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              aria-current={here === l.id ? 'location' : undefined}
              className={`relative px-2 lg:px-3 py-1.5 text-[13px] transition-colors duration-300 rounded-full ${here === l.id ? '!text-white' : ''} ${muted}`}
            >
              {l.label}
              {here === l.id && (
                <span aria-hidden className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-[rgb(var(--signature))]" />
              )}
            </button>
          ))}
          {shortcut && (
          <button
            onClick={() => setPaletteOpen(true)}
            aria-label={`Open command palette (${shortcut})`}
            title={`Jump anywhere (${shortcut})`}
            className={`ml-2 flex items-center gap-1 px-2.5 py-1 rounded-md border text-[12px] transition-colors duration-300 ${
              light ? 'border-black/10 text-gray-500 hover:text-gray-900' : 'border-white/15 text-white/50 hover:text-white'
            }`}
          >
            {shortcut === '⌘K' ? (
              <>
                <Command className="h-3 w-3" aria-hidden />K
              </>
            ) : (
              <kbd className="font-sans">Ctrl K</kbd>
            )}
          </button>
          )}
        </div>

        {/* Mobile: the menu */}
        <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`md:hidden ${light ? 'text-gray-700' : 'text-white/70'}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>
      </nav>

      {/* Scroll progress */}
      <m.div
        aria-hidden
        className="absolute left-0 right-0 bottom-0 h-[2px] origin-left"
        style={{
          scaleX: progress,
          background: 'rgb(255 255 255 / 0.85)',
        }}
      />

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden border-b px-6 py-4 flex flex-col gap-0.5 animate-[fadeIn_0.2s_ease] ${
            light ? 'bg-white/95 border-black/5' : 'bg-black/95 border-white/10'
          }`}
        >
          {sections.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`py-2.5 text-[14px] text-left transition-colors duration-300 ${
                light ? 'text-gray-700 hover:text-gray-900' : 'text-white/70 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
