import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

console.log()
export default defineUserConfig({
  lang: 'en-US',
  title: '一个用于学习的vue3组件库',
  base: `/${process.env.buildBase}/`,
  description: '',
  theme: defaultTheme({
    editLink: false,
    repo: 'https://github.com/Leemagination/vue3-components',
    colorModeSwitch: false,
    themePlugins: {
      backToTop: false
    },
    sidebar: [
      '/',
      {
        text: '简单组件',
        collapsible: true,
        children: [
          '/button/',
          '/alert/',
          '/backTop/',
          '/breadcrumb/',
          '/card/',
          '/checkbox/',
          '/collapse/',
          '/divider/',
          '/list/',
          '/loading/',
          '/progress/',
          '/radio/',
          '/rate/',
          '/steps/',
          '/switch/',
          '/tag/',
          '/timeline/',
        ]
      },
      {
        text: '浮层组件',
        collapsible: true,
        children: [
          '/cascader/',
          '/datePicker/',
          '/dropdown/',
          '/popconfirm/',
          '/popover/',
          '/select/',
          '/timePicker/',
          '/tooltip/',
        ]
      },
      {
        text: '命令式组件',
        collapsible: true,
        children: [
          '/drawer/',
          '/message/',
          '/modal/',
          '/notification/',
        ]
      },
      {
        text: '复杂组件',
        collapsible: true,
        children: [
          '/input/',
          '/inputNumber/',
          '/slider/',
          '/pagination/',
          '/calender/',
          '/tabs/',
          '/tree/'
        ]
      }
    ],
    sidebarDepth: 0,
  }),
  plugins: [
    prismjsPlugin({
      theme: 'one-dark',
      lineNumbers: false
    })
  ],
  bundler: viteBundler(),
})
