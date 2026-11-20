import type { CSSProperties, ImgHTMLAttributes } from 'react';
import manifest from '@/data/images.json';

type Entry = { w: number; h: number; widths: number[] };
const images = manifest as Record<string, Entry>;

/** Optimised copies live in /images/opt/ (made by `npm run images`). */
const variant = (src: string, w: number, fmt: 'avif' | 'webp') =>
  encodeURI(`/images/opt/${src.replace(/^\/images\//, '').replace(/\.(jpe?g|png)$/i, '')}-${w}.${fmt}`);

const srcSet = (src: string, e: Entry, fmt: 'avif' | 'webp') => e.widths.map((w) => `${variant(src, w, fmt)} ${w}w`).join(', ');

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'srcSet'> & {
  src: string;
  /** Required: describe the image, or pass "" for a purely decorative one. */
  alt: string;
  /** How wide the image is shown, e.g. "(min-width: 768px) 30vw, 50vw". */
  sizes?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * CSS variables for a background image (use with the `bg-set` class): the
 * closest width to `want`, as AVIF/WebP where image-set() is supported.
 */
export function bgSet(src: string, want: number) {
  const e = images[src];
  const plain = `url("${encodeURI(src)}")`;
  if (!e) return { '--bg': plain, '--bg-set': plain };
  const w = e.widths.find((x) => x >= want) ?? e.widths[e.widths.length - 1];
  const t = (fmt: 'avif' | 'webp') => `url("${variant(src, w, fmt)}") type("image/${fmt}")`;
  return { '--bg': plain, '--bg-set': `image-set(${t('avif')}, ${t('webp')}, ${plain} type("image/${/png$/i.test(src) ? 'png' : 'jpeg'}"))` };
}

/**
 * An <img> that serves AVIF, then WebP, at the right width for the screen,
 * falling back to the original file. Width and height come from the manifest,
 * so the browser reserves space before the image arrives.
 */
export default function Picture({ src, alt, sizes = '100vw', loading = 'lazy', decoding = 'async', ...rest }: Props) {
  const e = images[src];
  if (!e) return <img src={src} alt={alt} loading={loading} decoding={decoding} {...rest} />;
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(src, e, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(src, e, 'webp')} sizes={sizes} />
      <img src={encodeURI(src)} alt={alt} width={e.w} height={e.h} loading={loading} decoding={decoding} {...rest} />
    </picture>
  );
}
