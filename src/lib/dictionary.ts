import 'server-only';
import pt from '@/dictionaries/pt.json';

export type Dictionary = typeof pt;

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  pt: () =>
    import('@/dictionaries/pt.json').then(
      (module) => module.default as Dictionary,
    ),
  br: () =>
    import('@/dictionaries/br.json').then(
      (module) => module.default as unknown as Dictionary,
    ),
  en: () =>
    import('@/dictionaries/en.json').then(
      (module) => module.default as unknown as Dictionary,
    ),
  es: () =>
    import('@/dictionaries/es.json').then(
      (module) => module.default as unknown as Dictionary,
    ),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  }
  return dictionaries.pt();
};
