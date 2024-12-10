import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

export default defineUserConfig({
  lang: 'en-US',
  title: '一个用于学习的vue3组件库',
  description: '',
  theme: defaultTheme({
    colorModeSwitch: false,
    themePlugins: {
      backToTop: false
    },
    sidebar: [
      '/',
      '/button/',
      '/alert/',
      '/backTop/',
      '/breadcrumb/',
      '/calender/',
      '/card/',
      '/cascader/',
      '/checkbox/',
      '/collapse/',
      '/datePicker/',
      '/divider/',
      '/drawer/',
      '/dropdown/',
      '/input/',
      '/inputNumber/',
      '/list/',
      '/loading/',
      '/message/',
      '/modal/',
      '/notification/',
      '/pagination/',
      '/popconfirm/',
      '/popover/',
      '/progress/',
      '/radio/',
      '/rate/',
      '/select/',
      '/slider/',
      '/steps/',
      '/switch/',
      '/tabs/',
      '/tag/',
      '/timeline/',
      '/timePicker/',
      '/tooltip/',
      '/tree/'
    ],
    sidebarDepth: 0,
    //navbar: ['/', '/button/'],
  }),
  plugins: [
    prismjsPlugin({
      theme: 'one-dark',
      lineNumbers: false
    })
  ],
  bundler: viteBundler(),
})
