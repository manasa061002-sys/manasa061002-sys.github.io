import { useEffect, useMemo, useState } from 'react';
import { X, Shuffle, RotateCcw, Images } from 'lucide-react';
import { m, AnimatePresence, LayoutGroup } from 'motion/react';
import { gallery, photoGroups, type GalleryItem, type PhotoGroup } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useScrollLock } from '@/lib/site';
import { LickingCat, WalkingCat } from '@/components/Critters';
import Roamer from '@/components/Roamer';
import Scribble from '@/components/Scribble';
import Picture from '@/components/Picture';

/**
 * Life & Interests as a photo puzzle: sort 16 photos into four groups of four.
 * Pick four, press Check. Four tries. Afterwards, every photo can be browsed.
 */

const thumb = (src: string) => src.replace('/images/', '/images/thumbs/').replace(/\.jpe?g$/, '.jpg');
const itemFor = (src: string): GalleryItem =>
  gallery.find((g) => g.src === src) ?? { src, title: '', category: 'Travel', caption: '' };

const BAND: Record<string, string> = {
  pink: 'bg-pink-100 border-pink-300 text-pink-900',
  amber: 'bg-amber-100 border-amber-300 text-amber-900',
  emerald: 'bg-emerald-100 border-emerald-300 text-emerald-900',
  cyan: 'bg-cyan-100 border-cyan-300 text-cyan-900',
};

const MAX_TRIES = 4;

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useScrollLock(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <m.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <m.div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="relative max-w-2xl w-full bg-white p-3 pb-6 shadow-2xl rounded-[6px]"
        initial={{ scale: 0.9, rotate: -3, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-11 right-0 text-white/70 hover:text-white transition-colors duration-300"
        >
          <X className="h-6 w-6" />
        </button>
        <Picture src={item.src} alt={item.title} sizes="(min-width: 768px) 768px, 100vw" className="w-full max-h-[70vh] object-contain bg-gray-50" />
        <div className="mt-4 px-2 flex items-baseline justify-between gap-4">
          <h3 className="text-2xl italic text-gray-900">{item.title}</h3>
          <span className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
            {item.category}
          </span>
        </div>
        <p className="mt-1 px-2 text-[13px] text-gray-500">{item.caption}</p>
      </m.div>
    </m.div>
  );
}

function SolvedRow({ group, onOpen }: { group: PhotoGroup; onOpen: (src: string) => void }) {
  return (
    <m.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className={`col-span-4 rounded-2xl border-2 px-4 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-3 ${BAND[group.color]}`}
    >
      <div className="sm:w-56 shrink-0">
        <div className="font-serif text-2xl leading-tight">{group.title}</div>
        <div className="text-[12px] opacity-75 mt-0.5">{group.hint}</div>
      </div>
      <div className="flex gap-2 sm:ml-auto">
        {group.photos.map((src) => (
          <button
            key={src}
            onClick={() => onOpen(src)}
            aria-label={`Open photo: ${itemFor(src).title}`}
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg overflow-hidden ring-2 ring-white/70 hover:scale-105 transition-transform"
          >
            <Picture sizes="160px" src={thumb(src)} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </m.div>
  );
}

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();
  const allPuzzlePhotos = useMemo(() => photoGroups.flatMap((g) => g.photos), []);
  const [tiles, setTiles] = useState<string[]>(() => shuffled(allPuzzlePhotos));
  const [selected, setSelected] = useState<string[]>([]);
  const [solved, setSolved] = useState<string[]>([]);
  const [tries, setTries] = useState(MAX_TRIES);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [message, setMessage] = useState('Find four groups of four. Pick four photos, then press Check.');
  const [shake, setShake] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<GalleryItem | null>(null);

  const done = solved.length === photoGroups.length;
  const lost = tries === 0 && !done;
  const over = done || lost;

  const toggle = (src: string) => {
    if (over) return;
    setSelected((sel) => (sel.includes(src) ? sel.filter((s) => s !== src) : sel.length < 4 ? [...sel, src] : sel));
  };

  const check = () => {
    if (selected.length !== 4 || over) return;
    const key = [...selected].sort().join('|');
    if (guesses.includes(key)) {
      setMessage('You already tried that combination.');
      return;
    }
    setGuesses((g) => [...g, key]);
    const hit = photoGroups.find((g) => !solved.includes(g.id) && g.photos.every((p) => selected.includes(p)));
    if (hit) {
      setSolved((s) => [...s, hit.id]);
      setTiles((t) => t.filter((p) => !hit.photos.includes(p)));
      setSelected([]);
      setMessage(solved.length + 1 === photoGroups.length ? 'All four! You know me better than I thought.' : `Yes! ${hit.title}.`);
      return;
    }
    const best = Math.max(...photoGroups.map((g) => g.photos.filter((p) => selected.includes(p)).length));
    const left = tries - 1;
    setTries(left);
    setShake((n) => n + 1);
    if (left === 0) {
      // Out of tries: reveal the rest.
      const rest = photoGroups.filter((g) => !solved.includes(g.id)).map((g) => g.id);
      setSolved((s) => [...s, ...rest]);
      setTiles([]);
      setSelected([]);
      setMessage('Out of tries. Here is how they go together.');
    } else {
      setMessage(best === 3 ? 'So close: three of those belong together.' : 'Not quite. Try another combination.');
    }
  };

  const restart = () => {
    setTiles(shuffled(allPuzzlePhotos));
    setSelected([]);
    setSolved([]);
    setTries(MAX_TRIES);
    setGuesses([]);
    setMessage('Find four groups of four. Pick four photos, then press Check.');
  };

  const open = (src: string) => setActive(itemFor(src));

  return (
    <section id="life" data-section="life" ref={ref} className="relative overflow-x-clip py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto">
      {/* Lucy the cat strolls along each row, stops to lick a letter or a photo, then hops down. */}
      <Roamer
        mode="crawl"
        speed={38}
        aspect={0.75}
        arc={40}
        className="z-20"
        holdChildren={<LickingCat className="w-16 sm:w-20" />}
        points={[
          { x: 6, y: 11, hold: 3 }, { x: 40, y: 11, hold: 2.5, leap: true },
          { x: 46, y: 24 }, { x: 70, y: 24, hold: 3 }, { x: 30, y: 24, hold: 2.5, leap: true },
          { x: 26, y: 47 }, { x: 70, y: 47, hold: 3, leap: true },
          { x: 66, y: 70 }, { x: 26, y: 70, hold: 2.5, leap: true },
          { x: 22, y: 47, leap: true }, { x: 18, y: 24, leap: true },
        ]}
      >
        <WalkingCat className="w-16 sm:w-20" />
      </Roamer>
      <div className="relative reveal mb-8">
        <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium">Beyond Work</span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight">Life & Interests</h2>
        <Scribble className="lg:right-0 lg:bottom-2">can you find all four groups?</Scribble>
      </div>

      <div className="reveal max-w-2xl mx-auto">
        <p aria-live="polite" className="text-center text-[14px] text-gray-600 min-h-[1.5em] mb-5">
          {message}
        </p>

        <LayoutGroup>
          <m.div
            key={shake}
            animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : undefined}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-4 gap-2 sm:gap-3"
          >
            {solved.map((id) => (
              <SolvedRow key={id} group={photoGroups.find((g) => g.id === id)!} onOpen={open} />
            ))}
            <AnimatePresence mode="popLayout">
              {tiles.map((src) => {
                const on = selected.includes(src);
                return (
                  <m.button
                    key={src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: on ? 0.94 : 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    onClick={() => toggle(src)}
                    aria-pressed={on}
                    aria-label={`${itemFor(src).title}${on ? ', selected' : ''}`}
                    className={`relative aspect-square rounded-xl overflow-hidden ring-offset-2 transition-shadow ${
                      on ? 'ring-4 ring-gray-900 shadow-lg' : 'ring-0 hover:shadow-md'
                    }`}
                  >
                    <Picture sizes="160px" src={thumb(src)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    {on && (
                      <span className="absolute inset-0 bg-gray-900/25 flex items-start justify-end p-1.5">
                        <span className="h-5 w-5 rounded-full bg-gray-900 text-white text-[11px] grid place-items-center">✓</span>
                      </span>
                    )}
                  </m.button>
                );
              })}
            </AnimatePresence>
          </m.div>
        </LayoutGroup>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {!over ? (
            <>
              <div className="flex items-center gap-1.5 mr-2 text-[12px] text-gray-500" aria-label={`${tries} tries left`}>
                Tries
                {Array.from({ length: MAX_TRIES }).map((_, i) => (
                  <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < tries ? 'bg-gray-800' : 'bg-gray-200'}`} />
                ))}
              </div>
              <button
                onClick={() => setTiles((t) => shuffled(t))}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-[13px] text-gray-700 hover:border-gray-500"
              >
                <Shuffle className="h-3.5 w-3.5" /> Shuffle
              </button>
              <button
                onClick={() => setSelected([])}
                disabled={selected.length === 0}
                className="px-4 py-2 rounded-full border border-gray-300 text-[13px] text-gray-700 hover:border-gray-500 disabled:opacity-40"
              >
                Clear
              </button>
              <button
                onClick={check}
                disabled={selected.length !== 4}
                className="px-5 py-2 rounded-full bg-gray-900 text-white text-[13px] font-medium disabled:opacity-30"
              >
                Check
              </button>
            </>
          ) : (
            <button
              onClick={restart}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-[13px] text-gray-700 hover:border-gray-500"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Play again
            </button>
          )}
          <button
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] text-gray-500 hover:text-gray-900"
          >
            <Images className="h-3.5 w-3.5" /> {showAll ? 'Hide photos' : 'See all photos'}
          </button>
        </div>
      </div>

      {/* Every photo, for browsing */}
      <AnimatePresence initial={false}>
        {showAll && (
          <m.div
            key="all"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-3">
              {gallery.map((g) => (
                <button
                  key={g.src}
                  onClick={() => setActive(g)}
                  aria-label={`Open photo: ${g.title}`}
                  className="group relative aspect-square rounded-xl overflow-hidden"
                >
                  <Picture sizes="160px" src={thumb(g.src)} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute inset-x-0 bottom-0 p-1.5 text-[11px] text-white bg-gradient-to-t from-black/60 to-transparent text-left opacity-0 group-hover:opacity-100 transition-opacity">
                    {g.title}
                  </span>
                </button>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{active && <Lightbox key={active.src} item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
