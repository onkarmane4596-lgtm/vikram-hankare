import { MetadataRoute } from 'next';
import { SITE_NAME, DEFAULT_DESCRIPTION } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'SKYLINE Cyber',
    description: DEFAULT_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#02050a',
    theme_color: '#0055FF',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
