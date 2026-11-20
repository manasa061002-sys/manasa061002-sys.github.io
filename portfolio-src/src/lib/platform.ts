/**
 * The command-palette shortcut as this visitor would press it:
 * '⌘K' on Apple devices, 'Ctrl K' elsewhere, or null on touch-only devices
 * (no keyboard to press it with). Client-only.
 */
export function paletteShortcut(): string | null {
  if (typeof window === 'undefined') return null;
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return null;
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const platform = nav.userAgentData?.platform || navigator.platform || navigator.userAgent;
  return /mac|iphone|ipad|ipod/i.test(platform) ? '⌘K' : 'Ctrl K';
}
