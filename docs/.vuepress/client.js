import { defineClientConfig } from 'vuepress/client'
import buttonDemo1 from "../button/buttonDemo1.vue"

export default defineClientConfig({
  enhance({ app }) {
    app.component('ButtonDemo1',buttonDemo1)
  },
})
