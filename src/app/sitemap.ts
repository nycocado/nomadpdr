import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nomadpdr.com' // Replace with your actual domain
  const languages = ['pt', 'br', 'en', 'es']
  
  const routes = [
    '',
    '/privacy',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    languages.forEach(lang => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemapEntries
}
