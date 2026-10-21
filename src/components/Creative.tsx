import { useState } from 'react';
import { X, Calendar, Sparkles, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { creativeProjects, type CreativeProject } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CopyBankModal from '@/components/CopyBankModal';

export default function Creative() {
  const [active, setActive] = useState<CreativeProject | null>(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [showCopyBank, setShowCopyBank] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  const open = (proj: CreativeProject) => {
    if (proj.id === 'digital-content') {
      setShowCopyBank(true);
      return;
    }
    setActive(proj);
    setImgIdx(0);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!active) return;
    setImgIdx((i) => (i - 1 + active.images.length) % active.images.length);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!active) return;
    setImgIdx((i) => (i + 1) % active.images.length);
  };

  return (
    <section
      id="creative"
      ref={ref}
      className="py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <div className="reveal mb-10">
        <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium">
          Craft
        </span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight">
          Creative Projects & Decks
        </h2>
        <p className="mt-4 text-[15px] text-gray-500 max-w-xl font-light leading-relaxed">
          Where analysis gives way to aesthetics — decks, visual identities,
          and creative direction.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creativeProjects.map((proj, i) => {
          const accents = [
            'from-pink-400 to-rose-500',
            'from-cyan-400 to-blue-500',
            'from-yellow-400 to-orange-400',
            'from-violet-400 to-purple-500',
            'from-emerald-400 to-teal-500',
            'from-fuchsia-400 to-pink-500',
          ];
          const accent = accents[i % accents.length];
          return (
            <button
              key={proj.id}
              onClick={() => open(proj)}
              className="reveal group text-left rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-100">
                  <ImageOff className="h-8 w-8 text-gray-400" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-20 group-hover:opacity-35 transition-opacity duration-500 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-white/90 text-gray-800 font-medium backdrop-blur-md">
                    {proj.aesthetic}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-[11px] text-gray-400 mt-1">
                  {proj.context} · {proj.date}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {showCopyBank && <CopyBankModal onClose={() => setShowCopyBank(false)} />}

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[28px] bg-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image gallery */}
            <div className="relative aspect-video bg-gray-100">
              <img
                src={active.images[imgIdx]}
                alt={`${active.title} — slide ${imgIdx + 1}`}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-50 gap-2">
                <ImageOff className="h-10 w-10 text-gray-300" />
                <span className="text-xs text-gray-400">Image not available</span>
              </div>
              {active.images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {active.images.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === imgIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-9">
              <h3 className="text-3xl font-medium text-gray-900 leading-tight">
                {active.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-5 text-[13px] text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-pink-500" />
                  {active.date}
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
                  {active.aesthetic}
                </span>
              </div>
              <p className="mt-5 text-[14px] text-gray-600 leading-[1.75]">
                {active.description}
              </p>
              <p className="mt-2 text-[11px] text-gray-400">{active.context}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
