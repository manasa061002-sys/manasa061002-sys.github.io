import { useEffect, useMemo, useRef, useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { ArrowRight, Copy, Download, Search, CornerDownLeft } from 'lucide-react';
import { scrollToId, sections, useScrollLock, useSite } from '@/lib/site';

type Item = { id: string; label: string; hint: string; icon: JSX.Element; run: () => void };

function Palette({ onClose }: { onClose: () => void }) {
  const { copyEmail, downloadCv } = useSite();
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(
    () => [
      ...sections.map((s) => ({
        id: s.id,
        label: s.label,
        hint: 'Jump to section',
        icon: <ArrowRight className="h-4 w-4" />,
        run: () => scrollToId(s.id),
      })),
      { id: 'copy', label: 'Copy email', hint: 'Action', icon: <Copy className="h-4 w-4" />, run: copyEmail },
      { id: 'cv', label: 'Download CV', hint: 'Action', icon: <Download className="h-4 w-4" />, run: downloadCv },
    ],
    [copyEmail, downloadCv],
  );

  const shown = items.filter((i) => i.label.toLowerCase().includes(q.trim().toLowerCase()));

  useEffect(() => {
    input.current?.focus();
  }, []);
  useEffect(() => setSel(0), [q]);

  const run = (item?: Item) => {
    if (!item) return;
    onClose();
    // Closing releases the scroll lock on the next commit; act right after.
    window.setTimeout(item.run, 30);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, shown.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(shown[sel]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <m.div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[14vh] px-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <m.div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-black/5"
        initial={{ y: -12, scale: 0.97, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -8, scale: 0.98, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-gray-100">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="Jump to a section or run an action…"
            aria-label="Search commands"
            className="flex-1 py-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
          />
          <kbd className="text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">Esc</kbd>
        </div>
        <ul role="listbox" className="max-h-[50vh] overflow-y-auto py-2" data-lenis-prevent>
          {shown.length === 0 && <li className="px-4 py-6 text-center text-[13px] text-gray-400">No matches.</li>}
          {shown.map((item, i) => (
            <li key={item.id} role="option" aria-selected={i === sel}>
              <button
                onMouseEnter={() => setSel(i)}
                onClick={() => run(item)}
                className={`relative w-full flex items-center gap-3 px-4 py-2.5 text-left text-[14px] ${
                  i === sel ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                {i === sel && (
                  <m.span
                    layoutId="palette-sel"
                    className="absolute inset-x-2 inset-y-0 rounded-lg bg-gray-100"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <span className="relative text-gray-400">{item.icon}</span>
                <span className="relative flex-1">{item.label}</span>
                <span className="relative text-[11px] text-gray-400">{item.hint}</span>
                {i === sel && <CornerDownLeft className="relative h-3.5 w-3.5 text-gray-400" />}
              </button>
            </li>
          ))}
        </ul>
      </m.div>
    </m.div>
  );
}

export default function CommandPalette() {
  const { paletteOpen, setPaletteOpen } = useSite();
  useScrollLock(paletteOpen);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen(!paletteOpen);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [paletteOpen, setPaletteOpen]);

  return <AnimatePresence>{paletteOpen && <Palette onClose={() => setPaletteOpen(false)} />}</AnimatePresence>;
}
