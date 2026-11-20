import { useEffect, useRef, useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowUpRight, FileText } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { productConcepts, type ProductConcept } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useScrollLock } from '@/lib/site';
import { Snail } from '@/components/Critters';
import Picture, { bgSet } from '@/components/Picture';
import Roamer from '@/components/Roamer';

/**
 * The screenshot inside a device. On hover (or keyboard focus) it scrolls from
 * the top of the page to the bottom, like someone browsing it.
 */
function Screen({ src, className = '' }: { src: string; className?: string }) {
  return (
    <div
      className={`screen-scroll bg-set absolute inset-0 bg-no-repeat ${className}`}
      style={{ ...bgSet(src, 960), backgroundSize: '100% auto' } as React.CSSProperties}
      role="img"
      aria-hidden
    />
  );
}

function BrowserMock({ p }: { p: ProductConcept }) {
  return (
    <div className="h-[92%] max-w-full aspect-[16/11] flex flex-col rounded-xl overflow-hidden bg-white shadow-xl ring-1 ring-black/10">
      <div className="flex items-center gap-1.5 px-3 h-7 shrink-0 bg-gray-100 border-b border-gray-200">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white px-2 py-0.5 text-[9px] text-gray-400">
          {p.screen.label}
        </span>
      </div>
      <div className="relative flex-1 bg-gray-50">
        <Screen src={p.screen.src} />
      </div>
    </div>
  );
}

function PhoneMock({ p }: { p: ProductConcept }) {
  return (
    <div className="phone-frame relative h-full aspect-[9/19.5] rounded-[22px] p-[3px]">
      <div className="relative h-full w-full rounded-[19px] overflow-hidden bg-white">
        <Screen src={p.screen.src} />
        <span className="absolute top-[3%] left-1/2 -translate-x-1/2 h-[3.5%] w-[30%] rounded-full bg-black" />
      </div>
    </div>
  );
}

function PdfMock({ p }: { p: ProductConcept }) {
  return (
    <div className="w-[85%] h-full rounded-lg overflow-hidden bg-gray-200 shadow-xl ring-1 ring-black/10 flex flex-col">
      <div className="flex items-center gap-2 px-3 h-7 bg-gray-700 text-white/80 text-[9px] shrink-0">
        <FileText className="h-3 w-3" />
        <span className="truncate flex-1">{p.screen.label}</span>
        <span className="text-white/50">PDF</span>
      </div>
      <div className="relative flex-1">
        <Screen src={p.screen.src} />
      </div>
    </div>
  );
}

function Device({ p }: { p: ProductConcept }) {
  if (p.screen.kind === 'phone') return <PhoneMock p={p} />;
  if (p.screen.kind === 'pdf') return <PdfMock p={p} />;
  return <BrowserMock p={p} />;
}

function Tile({ p, onClose }: { p: ProductConcept; onClose: () => void }) {
  useScrollLock(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <m.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <m.div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        data-lenis-prevent
        className="relative w-full max-w-2xl rounded-[28px] bg-white overflow-y-auto shadow-2xl"
        style={{ maxHeight: 'calc(100vh - 2rem)' }}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 text-white/90 hover:text-white bg-black/35 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
        >
          <X className="h-5 w-5" />
        </button>
        <div className={`group relative h-64 sm:h-72 flex items-center justify-center bg-gradient-to-br ${p.accent}`}>
          <div className="absolute inset-0 bg-white/70" />
          <div className="relative h-full w-full flex items-center justify-center py-6">
            <Device p={p} />
          </div>
        </div>
        <div className="p-7 sm:p-9">
          <h3 className="text-3xl font-medium text-gray-900 leading-tight">{p.title}</h3>
          <div className="mt-3 flex items-center gap-2 text-[13px] text-gray-500">
            <Calendar className="h-3.5 w-3.5 text-pink-500" />
            {p.period}
          </div>
          <p className="mt-5 text-[14px] text-gray-600 leading-[1.75]">{p.summary}</p>
          {p.note && (
            <p className="mt-3 px-3 py-2 rounded-[10px] bg-amber-100 text-amber-800 text-[12px] leading-relaxed">{p.note}</p>
          )}
          <div className="mt-7">
            <div className="text-[11px] tracking-wide uppercase text-gray-400 mb-3 font-medium">Key highlights</div>
            <ul className="space-y-2.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[14px] text-gray-700">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-black text-white px-5 py-2.5 text-[13px] font-medium hover:bg-gray-800 transition-colors"
            >
              {p.linkLabel || 'View prototype'}
              {!p.linkLabel && <ArrowUpRight className="h-4 w-4" />}
            </a>
          )}
        </div>
      </m.div>
    </m.div>
  );
}

const PDF_PAGES = 7;

/** An iframe rendered at a real device size, scaled down to fit its box. */
function ScaledFrame({ src, w, h, title }: { src: string; w: number; h: number; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / w));
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={box} className="relative w-full overflow-hidden bg-white" style={{ aspectRatio: `${w} / ${h}` }}>
      {scale > 0 && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="absolute left-0 top-0 border-0 bg-white"
          style={{ width: w, height: h, transform: `scale(${scale})`, transformOrigin: '0 0' }}
        />
      )}
    </div>
  );
}

/** The selected project, live and usable inside its device. */
function LiveStage({ p }: { p: ProductConcept }) {
  const src = p.link ?? '';
  if (p.screen.kind === 'phone') {
    return (
      <div className="phone-frame relative mx-auto w-[300px] max-w-full rounded-[46px] p-[5px]">
        {/* side buttons */}
        <span className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l bg-gray-700" />
        <span className="absolute -left-[3px] top-[26%] h-12 w-[3px] rounded-l bg-gray-700" />
        <span className="absolute -right-[3px] top-[22%] h-16 w-[3px] rounded-r bg-gray-700" />
        <div className="relative rounded-[41px] overflow-hidden bg-white">
          <ScaledFrame src={src} w={390} h={844} title={`${p.title} (live app)`} />
          <span className="pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black" />
        </div>
      </div>
    );
  }
  if (p.screen.kind === 'pdf') {
    // The PDF's pages as plain images: one smooth scroll, no viewer chrome.
    return (
      <div className="h-[70vh] max-h-[680px] overflow-y-auto rounded-xl bg-gray-100 shadow-2xl ring-1 ring-black/5 p-3 sm:p-5 space-y-3 sm:space-y-5 overscroll-contain">
        {Array.from({ length: PDF_PAGES }).map((_, i) => (
          <Picture
            key={i}
            sizes="(min-width: 768px) 700px, 100vw"
            src={`/images/pdf/blockchain-land-registry/page-${i + 1}.jpg`}
            alt={`${p.title}, page ${i + 1}`}
            loading="lazy"
            className="block w-full rounded-md shadow"
          />
        ))}
      </div>
    );
  }
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white">
      <div className="flex items-center gap-1.5 px-4 h-9 bg-gray-100 border-b border-gray-200">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-gray-500">{p.screen.label}</span>
      </div>
      <ScaledFrame src={src} w={1280} h={800} title={`${p.title} (live site)`} />
    </div>
  );
}

export default function ProductConcepts() {
  const [current, setCurrent] = useState<ProductConcept>(productConcepts[0]);
  const [info, setInfo] = useState<ProductConcept | null>(null);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="products"
      data-section="products"
      ref={ref}
      className="relative overflow-x-clip py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      {/* a snail making its slow way around the section */}
      <Roamer
        mode="crawl"
        speed={160}
        aspect={0.7}
        className="z-20"
        points={[
          { x: 2, y: 2 }, { x: 98, y: 2 }, { x: 98, y: 98, hold: 4 }, { x: 50, y: 98 },
          { x: 50, y: 22 }, { x: 2, y: 22 }, { x: 2, y: 98, hold: 4 }, { x: 2, y: 50 },
        ]}
      >
        <Snail className="w-12 sm:w-14" />
      </Roamer>

      <div className="reveal mb-8">
        <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium">Innovation</span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight">
          Product Concepts & Prototypes
        </h2>
      </div>

      {/* The selected project, live: click around, scroll, read. */}
      <div className="reveal" data-lenis-prevent>
        <LiveStage key={current.id} p={current} />
      </div>
      <div className="reveal mt-4 flex flex-wrap items-center justify-center gap-3 text-[13px]">
        <span className="text-gray-500">Live: {current.title.split(':')[0]}</span>
        <button
          onClick={() => setInfo(current)}
          className="px-4 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:border-gray-500"
        >
          About this project
        </button>
        {current.link && (
          <a
            href={current.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gray-900 text-white hover:bg-gray-700"
          >
            Open in new tab <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {/* Pick a project: only the devices are shown */}
      <div className="reveal mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {productConcepts.map((p) => {
          const on = p.id === current.id;
          return (
            <button
              key={p.id}
              onClick={() => setCurrent(p)}
              aria-pressed={on}
              aria-label={`Show ${p.title}`}
              className={`group relative h-[150px] flex items-center justify-center rounded-2xl transition-all duration-300 ${
                on ? 'bg-gray-100 ring-2 ring-gray-900' : 'hover:bg-gray-50'
              }`}
            >
              <div className="h-full w-full flex items-center justify-center p-3 transition-transform duration-300 group-hover:-translate-y-1">
                <Device p={p} />
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>{info && <Tile key={info.id} p={info} onClose={() => setInfo(null)} />}</AnimatePresence>
    </section>
  );
}
