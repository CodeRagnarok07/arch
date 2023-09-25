export default function sitemap() {
    return [
      {
        url: 'https://acme.com',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      }
    ]
  }

//   type Sitemap = Array<{
//     url: string
//     lastModified?: string | Date
//     changeFrequency?:
//       | 'always'
//       | 'hourly'
//       | 'daily'
//       | 'weekly'
//       | 'monthly'
//       | 'yearly'
//       | 'never'
//     priority?: number
//   }>