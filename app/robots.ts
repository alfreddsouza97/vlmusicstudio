// import { MetadataRoute } from 'next'

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//       disallow: [
//         '/api/',
//         '/admin/',
//         '/private/',
//         '/*.json$',
//       ],
//     },
//     sitemap: 'https://vlstudios.com/sitemap.xml', // Replace with your actual domain
//     host: 'https://vlstudios.com', // Replace with your actual domain
//   }
// }

import { MetadataRoute } from 'next'

// Add revalidation configuration
export const revalidate = 3600 // Revalidate every hour

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