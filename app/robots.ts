import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/*.json$',
      ],
    },
    sitemap: 'https://vlstudios.com/sitemap.xml', // Replace with your actual domain
    host: 'https://vlstudios.com', // Replace with your actual domain
  }
}