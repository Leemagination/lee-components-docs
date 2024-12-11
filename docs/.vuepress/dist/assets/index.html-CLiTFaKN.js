import{_ as i,c as u,b as c,d as n,e as a,a as k,r as o,o as d,f as s}from"./app-BarsDtmn.js";const r={},g=a("h1",{id:"开关-switch",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#开关-switch"},[a("span",null,"开关 Switch")])],-1),h=a("p",null,"用来展示是或否的最佳组件",-1),v=a("div",{class:"language-vue","data-highlighter":"prismjs","data-ext":"vue","data-title":"vue"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),s(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"}),s(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token punctuation"},"{"),s(" LeeSwitch "),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},'"lee-vue3-components"'),a("span",{class:"token punctuation"},";")]),s(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token punctuation"},"{"),s(" ref "),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},'"vue"'),a("span",{class:"token punctuation"},";")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),s(" value "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")")]),s(`
`),a("span",{class:"line"})]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("template")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),a("span",{class:"token punctuation"},">")]),s("开关值:{{ value }}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("LeeSwitch")]),s(),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),s("value")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("value"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("LeeSwitch")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),a("span",{class:"token punctuation"},">")]),s("文本"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("LeeSwitch")]),s(),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),s("value")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("value"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"active-text"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("开"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"close-text"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("关"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("LeeSwitch")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),a("span",{class:"token punctuation"},">")]),s("加载中"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("LeeSwitch")]),s(),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),s("value")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("value"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"loading"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("LeeSwitch")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),a("span",{class:"token punctuation"},">")]),s("禁用"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("LeeSwitch")]),s(),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),s("value")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("value"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"disabled"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("LeeSwitch")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[s("  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"},[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("template")]),a("span",{class:"token punctuation"},">")])]),s(`
`),a("span",{class:"line"})])])],-1),m=k('<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1><h4 id="switch-props" tabindex="-1"><a class="header-anchor" href="#switch-props"><span>Switch props</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>boolean</code></td><td><code>false</code></td><td>开关的值</td></tr><tr><td>activeText</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>激活的文本</td></tr><tr><td>closeText</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>关闭的文本</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>是否加载中</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr><tr><td>onClick</td><td><code>(e: MouseEvent) =&gt; void</code></td><td><code>undefined</code></td><td>点击回调</td></tr></tbody></table>',3);function w(_,f){const p=o("SwitchDemo1"),l=o("Tabs");return d(),u("div",null,[g,h,c(l,{id:"6",data:[{id:"演示"},{id:"vue文件"}]},{title0:n(({value:t,isActive:e})=>[s("演示")]),title1:n(({value:t,isActive:e})=>[s("vue文件")]),tab0:n(({value:t,isActive:e})=>[c(p)]),tab1:n(({value:t,isActive:e})=>[v]),_:1}),m])}const S=i(r,[["render",w],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/switch/","title":"开关 Switch","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1733239081000,"contributors":[{"name":"Leemagination","email":"328445543@qq.com","commits":1}]},"filePathRelative":"switch/index.md"}');export{S as comp,x as data};
