import { LineChart, Palette } from 'lucide-react';
import { useSite } from '@/lib/site';

/**
 * The Analyst / Artist lever in the nav. A real switch (role="switch"), so it
 * works with Space/Enter and screen readers announce on/off. The colour wipe
 * grows out of the knob. Colours are fixed here (not theme-driven) so it reads
 * as a physical object in both modes. `compact` shows icons only (phones).
 */
export default function ModeSwitch({ compact = false }: { compact?: boolean }) {
  const { mode, switchMode } = useSite();
  const artist = mode === 'artist';

  const flip = (e: React.MouseEvent<HTMLButtonElement>) => {
    const knob = e.currentTarget.querySelector('[data-knob]')?.getBoundingClientRect();
    const r = knob ?? e.currentTarget.getBoundingClientRect();
    // Grow the wipe from where the knob is about to land.
    const x = artist ? r.left + r.width / 2 : e.currentTarget.getBoundingClientRect().right - r.width / 2;
    switchMode(artist ? 'analyst' : 'artist', { x, y: r.top + r.height / 2 });
  };

  const w = compact ? 64 : 164;
  const knobW = compact ? 28 : 80;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={artist}
      aria-label="Artist mode"
      title={artist ? 'Artist mode: switch to Analyst' : 'Analyst mode: switch to Artist'}
      onClick={flip}
      className="relative shrink-0 rounded-full p-[3px] text-[11px] font-medium tracking-wide select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
      style={{
        width: w,
        height: compact ? 30 : 32,
        background: artist ? '#efe6d2' : '#141414',
        boxShadow: artist
          ? 'inset 0 2px 4px rgba(120, 90, 40, 0.25), 0 0 0 1.5px #1c1917'
          : 'inset 0 2px 5px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.18)',
        transition: 'background 0.4s, box-shadow 0.4s',
      }}
    >
      {/* labels under the knob */}
      <span className="absolute inset-0 flex items-center justify-between px-3" aria-hidden>
        {compact ? (
          <>
            <LineChart className="h-3.5 w-3.5" style={{ color: artist ? '#57534e' : 'transparent' }} />
            <Palette className="h-3.5 w-3.5" style={{ color: artist ? 'transparent' : '#a1a1aa' }} />
          </>
        ) : (
          <>
            <span style={{ color: artist ? '#57534e' : 'transparent' }}>Analyst</span>
            <span style={{ color: artist ? 'transparent' : '#a1a1aa' }}>Artist</span>
          </>
        )}
      </span>
      {/* the knob */}
      <span
        data-knob
        aria-hidden
        className="relative z-10 flex h-full items-center justify-center gap-1.5 rounded-full"
        style={{
          width: knobW,
          transform: `translateX(${artist ? w - knobW - 6 : 0}px)`,
          transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s',
          background: artist ? 'linear-gradient(120deg, #ec4899, #f59e0b 45%, #06b6d4)' : 'linear-gradient(180deg, #fafafa, #d4d4d4)',
          color: artist ? '#ffffff' : '#111111',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        }}
      >
        {artist ? <Palette className="h-3.5 w-3.5" /> : <LineChart className="h-3.5 w-3.5" />}
        {!compact && <span>{artist ? 'Artist' : 'Analyst'}</span>}
      </span>
    </button>
  );
}
