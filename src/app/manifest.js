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
        "src": "/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
  }
}