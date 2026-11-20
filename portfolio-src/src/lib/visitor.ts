import { useEffect, useState } from 'react';
import { greetings } from '@/data/portfolio';

/**
 * Small things the guide knows about the visitor, all from their own browser
 * (nothing is sent anywhere): their local time of day and their language.
 */

export type DayPart = 'night' | 'morning' | 'day';

/** Night is roughly 23:00 to 05:00, morning 05:00 to 11:00, by the visitor's clock. */
export function dayPart(d = new Date()): DayPart {
  const h = d.getHours();
  if (h >= 23 || h < 5) return 'night';
  if (h < 11) return 'morning';
  return 'day';
}

/** The visitor's part of the day, re-checked every few minutes. */
export function useDayPart() {
  const [part, setPart] = useState<DayPart>(() => dayPart());
  useEffect(() => {
    const t = window.setInterval(() => setPart(dayPart()), 5 * 60 * 1000);
    return () => window.clearInterval(t);
  }, []);
  return part;
}

// Browser language codes for the languages Manasa speaks (see `greetings`).
const LANGS: Record<string, string> = {
  en: 'English',
  hi: 'Hindi',
  ta: 'Tamil',
  kn: 'Kannada',
  de: 'German',
  ja: 'Japanese',
  ko: 'Korean',
};

/**
 * "Hello" in the visitor's browser language, if it is one of Manasa's
 * languages (first match in their preference list); otherwise English "Hi".
 */
export function visitorHello(): string {
  const prefs = typeof navigator === 'undefined' ? [] : navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of prefs) {
    const lang = LANGS[tag.toLowerCase().split('-')[0]];
    if (!lang) continue;
    if (lang === 'English') return 'Hi';
    const g = greetings.find((x) => x.lang === lang);
    if (g) return g.word;
  }
  return 'Hi';
}
