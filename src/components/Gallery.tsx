import { useState } from 'react';
import { X, ImageOff } from 'lucide-react';
import { gallery, type GalleryItem } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories: ('All' | GalleryItem['category'])[] = [
  'All',
  'Travel',
  'Food',
  'Cats',
  'Personal',
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const [active, setActive] = useState<GalleryItem | null>(null);
  const ref = useScrollReveal<HTMLDivElement>();

  const items =
    filter === 'All' ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <section
      id="life"
      ref={ref}
      className="py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <div className="reveal mb-6">
        <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium">
          Beyond Work
        </span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight">
          Life & Interests
        </h2>
      </div>
      <p className="reveal text-[15px] text-gray-500 mb-10 max-w-xl font-light leading-relaxed">
        Photography, culinary exploration, travel, and feline companionship —
        the visual side of a life lived across continents.
      </p>

      {/* Filters */}
      <div className="reveal flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-[12px] px-4 py-1.5 rounded-full font-medium transition-all duration-300 ${
              filter === c
                ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-md'
                : 'bg-white text-gray-500 border border-gray-200 hover:border-pink-300'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
        {items.map((item, i) => {
          const overlays = [
            'from-pink-500/40',
            'from-cyan-500/40',
            'from-yellow-500/40',
            'from-violet-500/40',
          ];
          const overlay = overlays[i % overlays.length];
          return (
            <button
              key={item.src}
              onClick={() => setActive(item)}
              className="reveal group block w-full break-inside-avoid overflow-hidden rounded-[18px] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-[1.04] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-100 rounded-[18px]">
                  <ImageOff className="h-8 w-8 text-gray-400" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${overlay} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 right-3 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[9px] tracking-wide px-2 py-0.5 rounded-full bg-white/90 text-gray-800 font-medium">
                    {item.category}
                  </span>
                  <p className="mt-1.5 text-[13px] font-medium text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
          onClick={() => setActive(null)}
        >
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setActive(null)}
              className="absolute -top-11 right-0 text-white/60 hover:text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={active.src}
              alt={active.title}
              className="w-full rounded-[24px] shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full rounded-[24px] bg-gray-100 flex flex-col items-center justify-center gap-3 py-20">
              <ImageOff className="h-10 w-10 text-gray-300" />
              <span className="text-sm text-gray-400">Image not available</span>
            </div>
            <div className="mt-5">
              <span className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full bg-white text-gray-700 font-medium">
                {active.category}
              </span>
              <h3 className="mt-3 text-2xl font-medium text-white">
                {active.title}
              </h3>
              <p className="mt-1 text-[13px] text-white/60">{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
