import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

import starlight from '@astrojs/starlight'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: "koralle's Front-End Tech Memo",
      social: {
        github: 'https://github.com/koralle/front-end-tech-memo',
        twitter: 'https://twitter.com/koralle_tech',
        'x.com': 'https://x.com/koralle_tech'
      },
      logo: {
        src: './src/assets/logo.svg'
      },
      favicon: '/images/favicon.svg',
      lastUpdated: true,
      sidebar: [
        {
          label: 'Yamada UI',
          autogenerate: {
            directory: 'yamada-ui'
          }
        },
        {
          label: 'React',
          autogenerate: {
            directory: 'react'
          }
        },
        {
          label: 'UI/UX',
          autogenerate: {
            directory: 'uiux'
          }
        },
        {
          label: 'Next.js',
          autogenerate: {
            directory: 'nextjs'
          }
        },
        {
          label: 'Remix',
          autogenerate: {
            directory: 'remix'
          }
        },
        {
          label: 'Tanstack',
          autogenerate: {
            directory: 'tanstack'
          }
        },
        {
          label: 'TypeScript',
          autogenerate: {
            directory: 'typescript'
          }
        },
        {
          label: 'JavaScript',
          autogenerate: {
            directory: 'javascript'
          }
        },
        {
          label: 'Testing',
          autogenerate: {
            directory: 'testing'
          }
        },
        {
          label: 'Accessibility',
          autogenerate: {
            directory: 'accessibility'
          }
        },
        {
          label: 'HTML',
          autogenerate: {
            directory: 'html'
          }
        },
        {
          label: 'CSS',
          autogenerate: {
            directory: 'css'
          }
        },
        {
          label: 'npm',
          autogenerate: {
            directory: 'npm'
          }
        },
        {
          label: 'pnpm',
          autogenerate: {
            directory: 'pnpm'
          }
        },
        {
          label: 'Astro',
          autogenerate: {
            directory: 'astro'
          }
        },
        {
          label: 'Vue',
          autogenerate: {
            directory: 'vue'
          }
        },
        {
          label: 'Vite',
          autogenerate: {
            directory: 'vite'
          }
        },
        {
          label: 'Security',
          autogenerate: {
            directory: 'security'
          }
        },
        {
          label: 'Web',
          autogenerate: {
            directory: 'web'
          }
        }
      ]
    }),
    mdx()
  ]
})
