import type { CSSProperties, ReactNode } from 'react';
import Picture from '@/components/Picture';

/**
 * The Creative section as a designer's desk: real work laid out on a cutting
 * mat, plus the usual desk clutter. Hover lifts an item and straightens it;
 * click opens it. A chameleon wanders around the edge of the desk.
 * On small screens the work sits in a simple two-column layout instead.
 */

type Place = { x: string; y: string; w: string; r: string };

function Item({
  id,
  label,
  place,
  onOpen,
  children,
}: {
  id: string;
  label: string;
  place: Place;
  onOpen: (id: string) => void;
  children: ReactNode;
}) {
  const style = { '--x': place.x, '--y': place.y, '--w': place.w, '--r': place.r } as CSSProperties;
  return (
    <button
      type="button"
      onClick={() => onOpen(id)}
      aria-label={`Open ${label}`}
      className="desk-item group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-lg"
      style={style}
    >
      {children}
      <span className="desk-label">{label}</span>
    </button>
  );
}

/** Desk clutter: only shown on the full desk layout, never clickable. */
function Decor({ x, y, r = '0deg', w, children }: { x: string; y: string; r?: string; w?: string; children: ReactNode }) {
  return (
    <div className="hidden md:block absolute pointer-events-none" style={{ left: x, top: y, width: w, transform: `rotate(${r})` }} aria-hidden>
      {children}
    </div>
  );
}

const D = '/images/desk/';

export default function DesignDesk({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:block md:aspect-[2/1] max-h-[1100px]">
      {/* ---- clutter ---- */}
      {/* the scale (ruler) */}
      <Decor x="33%" y="46%" w="25%" r="-2deg">
        <div className="relative h-8 rounded-sm bg-amber-100 shadow-lg desk-ruler-ticks">
          <div className="absolute inset-x-2 bottom-0.5 flex justify-between text-[8px] text-amber-900/70 font-medium">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}>{i * 2}</span>
            ))}
          </div>
        </div>
      </Decor>
      {/* coffee */}
      <Decor x="52.5%" y="72%">
        <svg width="74" height="74" viewBox="0 0 74 74">
          <circle cx="37" cy="37" r="30" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="3" />
          <circle cx="37" cy="37" r="22" fill="#6b4226" />
          <ellipse cx="31" cy="31" rx="7" ry="4" fill="#a47148" opacity="0.6" />
          <path d="M66 30 q10 7 0 14" fill="none" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </Decor>
      {/* colour swatches */}
      <Decor x="70%" y="45%" r="-6deg">
        <div className="flex gap-0.5">
          {['#ec4899', '#f59e0b', '#facc15', '#22c55e', '#06b6d4', '#8b5cf6'].map((c) => (
            <span key={c} className="block w-4 h-12 rounded-sm shadow" style={{ background: c }} />
          ))}
        </div>
      </Decor>
      {/* power bank with a cable */}
      <Decor x="91%" y="70%" r="-12deg" w="7%">
        <svg viewBox="0 0 120 60" className="w-full h-auto">
          <rect x="4" y="10" width="78" height="40" rx="8" fill="#374151" stroke="#1f2937" strokeWidth="2" />
          <rect x="12" y="18" width="40" height="6" rx="3" fill="#4b5563" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} className="powerbank-led" cx={18 + i * 9} cy="38" r="2.6" fill="#4ade80" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
          <path d="M82 30 C 96 30, 92 10, 104 12 C 114 14, 110 30, 116 32" fill="none" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </Decor>
      {/* pencil pouch */}
      <Decor x="77%" y="60%" r="6deg" w="11%">
        <svg viewBox="0 0 120 90" className="w-full h-auto">
          {[
            { x: 22, c: '#facc15', h: 30 },
            { x: 36, c: '#ec4899', h: 38 },
            { x: 50, c: '#06b6d4', h: 26 },
            { x: 64, c: '#8b5cf6', h: 34 },
            { x: 78, c: '#22c55e', h: 28 },
          ].map((p) => (
            <g key={p.x}>
              <rect x={p.x} y={40 - p.h} width="9" height={p.h + 10} fill={p.c} />
              <path d={`M${p.x} ${40 - p.h} L${p.x + 4.5} ${32 - p.h} L${p.x + 9} ${40 - p.h} Z`} fill="#fde68a" />
              <path d={`M${p.x + 3} ${35 - p.h} L${p.x + 4.5} ${32 - p.h} L${p.x + 6} ${35 - p.h} Z`} fill="#1f2937" />
            </g>
          ))}
          <path d="M6 44 C 6 38, 114 38, 114 44 L 108 82 C 106 88, 14 88, 12 82 Z" fill="#f472b6" stroke="#be185d" strokeWidth="2" />
          <path d="M12 50 L108 50" stroke="#fdf2f8" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="104" cy="50" r="3.5" fill="#d1d5db" stroke="#6b7280" />
        </svg>
      </Decor>
      {/* pencil + paperclip */}
      <Decor x="19%" y="49%" r="-4deg">
        <svg width="150" height="14" viewBox="0 0 150 14">
          <rect x="0" y="2" width="120" height="10" rx="2" fill="#facc15" />
          <rect x="112" y="2" width="12" height="10" fill="#d4d4d8" />
          <path d="M124 2 L146 7 L124 12 Z" fill="#fde68a" />
          <path d="M140 5.6 L146 7 L140 8.4 Z" fill="#1f2937" />
          <rect x="0" y="2" width="8" height="10" rx="2" fill="#f472b6" />
        </svg>
      </Decor>
      <Decor x="20%" y="86%" r="-20deg">
        <svg width="40" height="16" viewBox="0 0 40 16">
          <path d="M4 8 h28 a4 4 0 0 0 0 -6 h-26 a3 3 0 0 0 0 6 h22" fill="none" stroke="#cbd5e1" strokeWidth="2" />
        </svg>
      </Decor>

      {/* ---- the work ---- */}
      <Item id="presentation-decks" label="Decks" place={{ x: '4%', y: '6%', w: '30%', r: '-2deg' }} onOpen={onOpen}>
        <div className="rounded-t-xl bg-gray-900 p-[3%] pb-[2.5%] shadow-2xl">
          <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
            <Picture src={`${D}deck-brand-pitch.jpg`} alt="" sizes="(min-width: 768px) 30vw, 50vw" className="absolute inset-0 h-full w-full object-cover" />
            <Picture
              sizes="(min-width: 768px) 30vw, 50vw"
              src={`${D}deck-house-money.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>
        <div className="mx-[-5%] h-3 rounded-b-xl bg-gradient-to-b from-gray-300 to-gray-400 shadow-lg" />
      </Item>

      <Item id="posters" label="Posters" place={{ x: '42.5%', y: '4%', w: '13%', r: '3deg' }} onOpen={onOpen}>
        <div className="relative">
          <Picture
            sizes="(min-width: 768px) 14vw, 50vw"
            src={`${D}poster-sustainable-energy.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full shadow-xl translate-x-[14%] translate-y-[5%] rotate-[6deg] transition-transform duration-500 group-hover:translate-x-[30%] group-hover:rotate-[10deg]"
          />
          <Picture src={`${D}poster-city-planning.jpg`} alt="" sizes="(min-width: 768px) 14vw, 50vw" className="relative w-full shadow-2xl" />
          <span className="desk-tape left-1/2 -translate-x-1/2 -top-2 rotate-[-4deg]" />
        </div>
      </Item>

      <Item id="banners" label="Banners" place={{ x: '8%', y: '57%', w: '9%', r: '-3deg' }} onOpen={onOpen}>
        <div className="flex flex-col items-center">
          <div className="w-full h-1.5 rounded-full bg-gray-400" />
          <Picture src={`${D}banner-vertical.jpg`} alt="" sizes="(min-width: 768px) 10vw, 45vw" className="w-[94%] shadow-xl" />
          <div className="w-[110%] h-3 rounded-md bg-gradient-to-b from-gray-300 to-gray-500 shadow-lg" />
        </div>
      </Item>

      <Item id="brochures" label="Brochures" place={{ x: '66%', y: '9%', w: '27%', r: '3deg' }} onOpen={onOpen}>
        <div className="relative">
          <Picture
            sizes="(min-width: 768px) 27vw, 50vw"
            src={`${D}brochure-asymmetrica.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full shadow-xl origin-bottom-left rotate-[-9deg] transition-transform duration-500 group-hover:rotate-[-18deg]"
          />
          <Picture
            sizes="(min-width: 768px) 27vw, 50vw"
            src={`${D}brochure-yes.jpg`}
            alt=""
            loading="lazy"
            className="relative w-full shadow-2xl origin-bottom-left rotate-[3deg] transition-transform duration-500 group-hover:rotate-[6deg]"
          />
        </div>
      </Item>

      <Item id="email-marketing" label="Emails" place={{ x: '26%', y: '58%', w: '24%', r: '-3deg' }} onOpen={onOpen}>
        <div className="relative pt-[18%]">
          <Picture
            sizes="(min-width: 768px) 24vw, 50vw"
            src={`${D}email-yes.jpg`}
            alt=""
            loading="lazy"
            className="absolute left-[5%] right-[5%] top-[6%] w-[90%] shadow-md transition-transform duration-500 group-hover:-translate-y-[22%]"
          />
          <div className="desk-envelope relative aspect-[16/8] shadow-2xl" />
        </div>
      </Item>

      <Item id="digital-content" label="Copy bank" place={{ x: '60%', y: '60%', w: '12%', r: '5deg' }} onOpen={onOpen}>
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-pink-300 shadow-lg rotate-[-8deg] translate-x-2" />
          <div className="relative h-full w-full bg-yellow-200 shadow-xl p-3 flex flex-col justify-between transition-transform duration-500 group-hover:-rotate-3">
            <span className="font-serif italic text-[17px] leading-tight text-gray-800">Captions, hooks & scripts</span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-600">Digital content</span>
          </div>
        </div>
      </Item>
    </div>
  );
}
