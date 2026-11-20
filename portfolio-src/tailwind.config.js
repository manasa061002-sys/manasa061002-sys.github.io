import defaults from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/**
 * Analyst / Artist mode.
 *
 * Every colour class the site uses (white, black, gray-*, and the accent
 * palettes) reads a CSS variable instead of a fixed value. The page is split
 * into zones: `.zone-dark` (the black top half) and `.zone-light` (Products
 * onwards). `data-mode` on <html> re-maps the variables per zone:
 *
 * - analyst: the light zone is flipped to the same monochrome dark as the top
 *   half (white becomes near-black, grays and accents become inverted grays).
 * - artist:  both zones become ink on paper (warm stone grays), with the
 *   colourful accents of "The other side".
 *
 * `.zone-keep` puts the original palette back (used for the creative desk,
 * which is a physical object and looks the same in both modes).
 * Outside any zone (front page, palette, toasts) nothing changes.
 */

const PALETTES = ['gray', 'pink', 'cyan', 'violet', 'amber', 'yellow', 'emerald', 'green', 'red'];
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const MIRROR = Object.fromEntries(SHADES.map((s, i) => [s, SHADES[SHADES.length - 1 - i]]));

const rgb = (hex) => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.replace(/./g, (c) => c + c) : h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
  white: v('white'),
  black: v('black'),
};
for (const p of PALETTES) colors[p] = Object.fromEntries(SHADES.map((s) => [s, v(`${p}-${s}`)]));

/** The original palette. */
const original = () => {
  const out = { '--c-white': '255 255 255', '--c-black': '0 0 0' };
  for (const p of PALETTES) for (const s of SHADES) out[`--c-${p}-${s}`] = rgb(defaults[p][s]);
  return out;
};

/** Analyst, light zone: everything becomes the mirrored neutral gray (monochrome dark). */
const analystLight = () => {
  const out = { '--c-white': '17 17 17', '--c-black': '255 255 255' };
  for (const p of PALETTES) for (const s of SHADES) out[`--c-${p}-${s}`] = rgb(defaults.neutral[MIRROR[s]]);
  return out;
};

const INK = '28 25 23'; // stone-900, warm ink
const PAPER = '250 246 236';
const CARD = '255 253 247';

/** Artist: ink on paper. In the dark zone white/black swap and grays mirror. */
const artist = (zone) => {
  const out =
    zone === 'dark' ? { '--c-white': INK, '--c-black': PAPER } : { '--c-white': CARD, '--c-black': INK };
  for (const s of SHADES) out[`--c-gray-${s}`] = rgb(defaults.stone[zone === 'dark' ? MIRROR[s] : s]);
  return out;
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {
      fontFamily: { hand: ['Caveat', 'Cormorant Garamond', 'cursive'] },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root, .zone-keep': original(),
        'html[data-mode="analyst"] .zone-light': analystLight(),
        'html[data-mode="artist"] .zone-dark': artist('dark'),
        'html[data-mode="artist"] .zone-light': artist('light'),
        'html[data-mode="artist"] .zone-keep, html[data-mode="analyst"] .zone-keep': original(),
      });
    }),
  ],
};
