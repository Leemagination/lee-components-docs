import { defineClientConfig } from 'vuepress/client'
import registerComponents from "../../config/register-components.js";

export default defineClientConfig({
  enhance({ app }) {
    registerComponents(app)
  },
})
