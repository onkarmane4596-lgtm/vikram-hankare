import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/admin/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/admin/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
