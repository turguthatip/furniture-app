import { MetadataRoute } from 'next'
import { productData } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = productData.map((product) => ({
    url: `https://assuva.com.tr/urunler/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://assuva.com.tr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://assuva.com.tr/koltuk-takimlari',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://assuva.com.tr/kose-takimlari',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...productPages,
  ]
}