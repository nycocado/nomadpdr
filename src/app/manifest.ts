import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nomad PDR System',
    short_name: 'Nomad PDR',
    description: 'Especialistas em Martelinho de Ouro e PDR',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2A3375',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
