import { useState } from 'react';
import { useScrollLock } from '@/lib/site';
import { X, Calendar, Sparkles, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { creativeProjects, type CreativeProject } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CopyBankModal from '@/components/CopyBankModal';
import Picture from '@/components/Picture';
import SectionHead from '@/components/SectionHead';
import DesignDesk from '@/components/DesignDesk';

export default function Creative() {
  const [active, setActive] = useState<CreativeProject | null>(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [showCopyBank, setShowCopyBank] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();
  useScrollLock(!!active || showCopyBank);

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
      data-section="creative"
      ref={ref}
      className="zone-keep desk relative overflow-x-clip py-10 sm:py-14"
    >
      {/* ruler ticks along the top edge of the mat */}
      <div className="desk-ruler absolute top-0 inset-x-0 h-3" aria-hidden />
      <div className="relative px-6 sm:px-10 max-w-5xl mx-auto">
        <SectionHead no="05" title="Creative Decks" scribble="click anything on the desk" />
      </div>

      <div className="reveal px-6 sm:px-10 lg:px-14">
        <DesignDesk
          onOpen={(id) => {
            const proj = creativeProjects.find((p) => p.id === id);
            if (proj) open(proj);
          }}
        />
      </div>

      {showCopyBank && <CopyBankModal onClose={() => setShowCopyBank(false)} />}

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[28px] bg-white overflow-hidden shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image gallery */}
            <div className="relative aspect-video bg-gray-100">
              <Picture
                src={active.images[imgIdx]}
                sizes="(min-width: 1024px) 900px, 100vw"
                loading="eager"
                alt={`${active.title}, slide ${imgIdx + 1}`}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.closest('picture')?.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-50 gap-2">
                <ImageOff className="h-10 w-10 text-gray-500" />
                <span className="text-xs text-gray-500">Image not available</span>
              </div>
              {active.images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImg}
                    aria-label="Next image"
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
              <p className="mt-2 text-[12px] text-gray-500">{active.context}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
