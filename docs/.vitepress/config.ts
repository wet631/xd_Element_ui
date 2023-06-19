import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `xd_Element_ui`,
  description: '前端笔记文档',

  // head: [ // 网站图标
  //   ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  //   // ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  // ],

  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
  markdown: {
    lineNumbers: false // 是否显示行数，默认false
  },
  themeConfig: {

    editLink: {
      pattern: 'https://github.com/wet631/xd_Element_ui/tree/master/docs/:path',
      text: 'Suggest changes to this page',
    },
    // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wet631/xd_Element_ui.git' },
      // 自定义icon
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: 'https://www.npmjs.com/package/front-end-notes'
      // }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher',
    },

    nav: [
      { text: '组件', link: '/elements/started', activeMatch: '/elements/' },
      { text: '工具', link: '/utils/started', activeMatch: '/utils/' },
      {
        text: '链接',
        items: [
          { text: 'My Github', link: 'https://github.com/wet631/xd_Element_ui' },
          {
            items: [
              {
                text: 'Vue 2 Docs',
                link: 'https://v2.cn.vuejs.org/v2/guide/',
              },
              {
                text: 'Vue 3 Docs',
                link: 'https://cn.vuejs.org/guide/introduction.html',
              },
              {
                text: 'TypeScript Docs',
                link: 'https://www.tslang.cn/docs/home.html',
              },
              {
                text: 'MDN Web Docs',
                link: 'https://developer.mozilla.org/zh-CN/',
              }
            ]
          },
          {
            items: [
              {
                text: 'npm',
                link: 'https://www.npmjs.com/',
              },
              {
                text: 'vite',
                link: 'https://cn.vitejs.dev/',
              },
              {
                text: 'markdown',
                link: 'https://markdown.com.cn/',
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/',
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/elements/': [
        {
          text: '指引',
          items: [
            {
              text: '开始',
              link: '/elements/started'
            }
          ]
        },
        {
          text: '组件列表',
          items: [
            {
              text: 'note-1',
              link: '/elements/note-1'
            },
            {
              text: 'note-2',
              link: '/elements/note-2'
            },

          ]
        }
      ],
      '/utils/': [
        {
          text: '指引',
          items: [
            {
              text: '开始',
              link: '/utils/started'
            }
          ]
        },
        {
          text: '工具列表',
          items: [
            {
              text: 'note-1',
              link: '/utils/note-1'
            },
            {
              text: 'note-2',
              link: '/utils/note-2'
            },

          ]
        }
      ]
    }
  }
})
