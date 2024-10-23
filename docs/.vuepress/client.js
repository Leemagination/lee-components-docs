import { defineClientConfig } from 'vuepress/client'
import ButtonDemo1 from "../button/ButtonDemo1.vue"
import ButtonDemo2 from "../button/ButtonDemo2.vue"
import ButtonDemo3 from "../button/ButtonDemo3.vue"
import ButtonDemo4 from "../button/ButtonDemo4.vue"

export default defineClientConfig({
  enhance({ app }) {
    app.component('ButtonDemo1', ButtonDemo1)
    app.component('ButtonDemo2', ButtonDemo2)
    app.component('ButtonDemo3', ButtonDemo3)
    app.component('ButtonDemo4', ButtonDemo4)
  },
})
