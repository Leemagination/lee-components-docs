import{_ as k,c as r,b as c,d as s,e as a,a as d,r as o,o as g,f as n}from"./app-BarsDtmn.js";const m={},v=a("h1",{id:"分页器-pagination",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#分页器-pagination"},[a("span",null,"分页器 Pagination")])],-1),h=a("p",null,"多用于表格分页的一个组件",-1),P=a("h3",{id:"基础",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基础"},[a("span",null,"基础")])],-1),_=a("div",{class:"language-vue","data-highlighter":"prismjs","data-ext":"vue","data-title":"vue"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" LeePagination "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"lee-vue3-components"'),a("span",{class:"token punctuation"},";")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue"'),a("span",{class:"token punctuation"},";")]),n(`
`),a("span",{class:"line"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),n(" currentPage "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")")]),n(`
`),a("span",{class:"line"})]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")]),n("当前页码: {{ currentPage }}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("LeePagination")]),n(),a("span",{class:"token attr-name"},":pageCount"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("9"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("page")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentPage"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"showQuickJumper"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("LeePagination")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"})])])],-1),b=a("h3",{id:"其他配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#其他配置"},[a("span",null,"其他配置")])],-1),f=a("div",{class:"language-vue","data-highlighter":"prismjs","data-ext":"vue","data-title":"vue"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" LeePagination "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"lee-vue3-components"'),a("span",{class:"token punctuation"},";")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue"'),a("span",{class:"token punctuation"},";")]),n(`
`),a("span",{class:"line"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),n(" currentPage "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),n(" currentSize "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},")")]),n(`
`),a("span",{class:"line"})]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")]),n("当前页码: {{ currentPage }}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")]),n("当前分页数量: {{ currentSize }}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("LeePagination")])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageCount"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("9"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("page")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentPage"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentSize"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageSizeOptions"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("[10,20,50,100,1000]"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"jump-text"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("立马跳转"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"showQuickJumper")]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"showSizePicker"),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("LeePagination")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("br")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")]),n("禁用状态"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("LeePagination")])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"disabled")]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageCount"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("9"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("page")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentPage"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentSize"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageSizeOptions"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("[10,20,50,100,1000]"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"showQuickJumper")]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"showSizePicker"),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("LeePagination")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"})])])],-1),S=a("h3",{id:"页码展示个数",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#页码展示个数"},[a("span",null,"页码展示个数")])],-1),q=a("div",{class:"language-vue","data-highlighter":"prismjs","data-ext":"vue","data-title":"vue"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" LeePagination "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"lee-vue3-components"'),a("span",{class:"token punctuation"},";")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue"'),a("span",{class:"token punctuation"},";")]),n(`
`),a("span",{class:"line"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),n(" currentPage "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),n(" currentSize "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},")")]),n(`
`),a("span",{class:"line"})]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"}),n(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("LeePagination")])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("page")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentPage"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentSize"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageCount"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":display-count"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("7"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageSizeOptions"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("[10,20,50,100,1000]"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"showSizePicker"),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("LeePagination")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("br")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("LeePagination")])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("page")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentPage"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentSize"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageCount"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":display-count"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("10"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageSizeOptions"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("[10,20,50,100,1000]"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"showSizePicker"),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("LeePagination")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("br")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("LeePagination")])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("page")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentPage"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("currentSize"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageCount"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":display-count"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("15"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},":pageSizeOptions"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("[10,20,50,100,1000]"),a("span",{class:"token punctuation"},'"')])]),n(`
`),a("span",{class:"line"},[n("      "),a("span",{class:"token attr-name"},"showSizePicker"),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("LeePagination")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[n("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")])]),n(`
`),a("span",{class:"line"})])])],-1),w=d('<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1><h4 id="pagination-props" tabindex="-1"><a class="header-anchor" href="#pagination-props"><span>Pagination props</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>page</td><td><code>number</code></td><td><code>1</code></td><td>当前页码的值</td></tr><tr><td>pageSize</td><td><code>number</code></td><td><code>10</code></td><td>分页数量的值</td></tr><tr><td>pageCount</td><td><code>number</code></td><td><code>1</code></td><td>总页数</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr><tr><td>showSizePicker</td><td><code>boolean</code></td><td><code>false</code></td><td>是否展示分页数量选择器</td></tr><tr><td>pageSizeOptions</td><td><code>number[]</code></td><td><code>[10]</code></td><td>分页数量可选数组</td></tr><tr><td>displayCount</td><td><code>number</code></td><td><code>9</code></td><td>页码展示的个数</td></tr><tr><td>showQuickJumper</td><td><code>boolean</code></td><td><code>false</code></td><td>是否展示快速跳转</td></tr><tr><td>jumpText</td><td><code>string</code></td><td><code>跳转</code></td><td>是否展示快速跳转</td></tr></tbody></table>',3);function z(y,x){const l=o("PaginationDemo1"),p=o("Tabs"),u=o("PaginationDemo2"),i=o("PaginationDemo3");return g(),r("div",null,[v,h,P,c(p,{id:"9",data:[{id:"演示"},{id:"vue文件"}]},{title0:s(({value:t,isActive:e})=>[n("演示")]),title1:s(({value:t,isActive:e})=>[n("vue文件")]),tab0:s(({value:t,isActive:e})=>[c(l)]),tab1:s(({value:t,isActive:e})=>[_]),_:1}),b,c(p,{id:"21",data:[{id:"演示"},{id:"vue文件"}]},{title0:s(({value:t,isActive:e})=>[n("演示")]),title1:s(({value:t,isActive:e})=>[n("vue文件")]),tab0:s(({value:t,isActive:e})=>[c(u)]),tab1:s(({value:t,isActive:e})=>[f]),_:1}),S,c(p,{id:"33",data:[{id:"演示"},{id:"vue文件"}]},{title0:s(({value:t,isActive:e})=>[n("演示")]),title1:s(({value:t,isActive:e})=>[n("vue文件")]),tab0:s(({value:t,isActive:e})=>[c(i)]),tab1:s(({value:t,isActive:e})=>[q]),_:1}),w])}const A=k(m,[["render",z],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/pagination/","title":"分页器 Pagination","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":3,"title":"其他配置","slug":"其他配置","link":"#其他配置","children":[]},{"level":3,"title":"页码展示个数","slug":"页码展示个数","link":"#页码展示个数","children":[]}],"git":{"updatedTime":1732116532000,"contributors":[{"name":"Leemagination","email":"328445543@qq.com","commits":1}]},"filePathRelative":"pagination/index.md"}');export{A as comp,C as data};
