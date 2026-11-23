import defaults from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/**
 * One page, two halves.
 *
 * Every colour class the site uses (white, black, gray-*, and the accent
 * palettes) reads a CSS variable instead of a fixed value, and the page is
 * split into zones:
 *
 * - `.zone-dark` (the professional top half, up to Research): the original
 *   palette, white on black.
 * - `.zone-light` (Products onwards, after "Where structure meets color"):
 *   ink on paper, with warm stone greys and the colourful accents.
 *
 * `.zone-keep` puts the original palette back (used for the creative desk,
 * which is a physical object, and for overlays that must stay black and white).
 */

const PALETTES = ['gray', 'pink', 'cyan', 'violet', 'amber', 'yellow', 'emerald', 'green', 'red'];
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

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

const INK = '28 25 23'; // stone-900, warm ink
const CARD = '255 253 247';

/** The light half: ink on paper, greys from the warm stone scale. */
const paper = () => {
  const out = { '--c-white': CARD, '--c-black': INK };
  for (const s of SHADES) out[`--c-gray-${s}`] = rgb(defaults.stone[s]);
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
        '.zone-light': paper(),
        '.zone-light .zone-keep': original(),
      });
    }),
  ],
};
