import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Portfolio Development Documentation, Research and Planning',
  description: 'Career research, brand strategy, and portfolio planning for IS218.',
  base: '/IS218-003-Review-1-Plan-Portfolio/',
  rewrites: {
    'project_record.md': 'project-record.md'
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Step 1: Target Direction', link: '/docs/target-direction' },
      { text: 'Step 2: Reader Persona & Promise', link: '/docs/reader-promise' },
      { text: 'Step 3: Brand & Design', link: '/docs/brand-design' },
      { text: 'Project Record', link: '/project-record' }
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Step 1: Target Direction', link: '/docs/target-direction' },
          { text: 'Step 2: Reader Persona & Promise', link: '/docs/reader-promise' },
          { text: 'Step 3: Brand & Design', link: '/docs/brand-design' },
          { text: 'Project Record', link: '/project-record' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shreek3724/IS218-003-Review-1-Plan-Portfolio' }
    ],
    footer: {
      message: 'IS218-003 — Review 1 — Plan — Portfolio',
      copyright: 'Built with VitePress'
    }
  }
})
