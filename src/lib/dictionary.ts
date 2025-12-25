import 'server-only'

const dictionaries = {
  pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
  br: () => import('@/dictionaries/br.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (dictionaries[locale as keyof typeof dictionaries]) {
    return dictionaries[locale as keyof typeof dictionaries]()
  }
  return dictionaries.pt()
}
