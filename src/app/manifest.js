import {meta} from './meta'


export default function manifest() {
  
  return {
    name: meta.title,
    short_name: meta.applicationName,
    description:  meta.description,
    start_url: meta.metadataBase,
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#000',
    icons: [
      {
        "src": "/icons/icon-144x144.svg",
        "sizes": "144x144",
        "type": "image/svg"
      },
      {
        "src": "/icons/icon-192x192.svg",
        "sizes": "192x192",
        "type": "image/svg",
        "purpose": "any maskable"
      },
      {
        "src": "/icons/icon-384x384.svg",
        "sizes": "384x384",
        "type": "image/svg"
      },
      {
        "src": "/icons/icon-512x512.svg",
        "sizes": "512x512",
        "type": "image/svg"
      }
    ],
  }
}