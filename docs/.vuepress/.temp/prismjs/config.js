import "F:/myCode/lee-components-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "F:/myCode/lee-components-docs/node_modules/@vuepress/plugin-prismjs/lib/client/styles/one-dark.css"
import "F:/myCode/lee-components-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "F:/myCode/lee-components-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "F:/myCode/lee-components-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "F:/myCode/lee-components-docs/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
