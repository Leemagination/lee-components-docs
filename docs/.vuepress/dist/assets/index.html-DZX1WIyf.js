import{_ as i,c as u,b as c,d as a,e as n,a as k,r as o,o as r,f as s}from"./app-BarsDtmn.js";const d={},g=n("h1",{id:"弹出确认-popconfirm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#弹出确认-popconfirm"},[n("span",null,"弹出确认 Popconfirm")])],-1),m=n("p",null,"加了两个按钮的弹出框",-1),f=n("div",{class:"language-vue","data-highlighter":"prismjs","data-ext":"vue","data-title":"vue"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" LeePopconfirm"),n("span",{class:"token punctuation"},","),s(" LeeButtonGroup"),n("span",{class:"token punctuation"},","),s(" LeeButton"),n("span",{class:"token punctuation"},","),s(" useMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"lee-vue3-components"'),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"confirmClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"useMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'点击了确认'")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"cancelClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"useMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'点击了取消'")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"asyncConfirmClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"useMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'点击了确认,2s后回调'")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"})]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeButtonGroup")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeePopconfirm")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@confirm-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("confirmClick"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@cancel-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cancelClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"        弹出提示选择"),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#trigger"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("          "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeButton")]),n("span",{class:"token punctuation"},">")]),s("打开"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeButton")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeePopconfirm")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeePopconfirm")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("hover"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@confirm-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("confirmClick"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@cancel-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cancelClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"        弹出提示选择"),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#trigger"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("          "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeButton")]),n("span",{class:"token punctuation"},">")]),s("悬浮触发"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeButton")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeePopconfirm")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeePopconfirm")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"disabled")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@confirm-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("confirmClick"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@cancel-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cancelClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"        弹出提示选择"),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#trigger"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("          "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeButton")]),n("span",{class:"token punctuation"},">")]),s("禁用"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeButton")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeePopconfirm")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeePopconfirm")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bottom"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@confirm-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("confirmClick"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@cancel-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cancelClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"        弹出提示选择"),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#trigger"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("          "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeButton")]),n("span",{class:"token punctuation"},">")]),s("出现位置"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeButton")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeePopconfirm")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeePopconfirm")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},":show-arrow"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bottom"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@confirm-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("asyncConfirmClick"),n("span",{class:"token punctuation"},'"')])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token attr-name"},"@cancel-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cancelClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"        弹出提示选择"),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#trigger"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("          "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeButton")]),n("span",{class:"token punctuation"},">")]),s("异步操作"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeButton")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeePopconfirm")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeButtonGroup")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"})])])],-1),h=k('<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1><h4 id="popconfirm-props" tabindex="-1"><a class="header-anchor" href="#popconfirm-props"><span>Popconfirm props</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>placement</td><td><code>PlacementType</code></td><td><code>top</code></td><td>弹出选择的位置</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用弹出</td></tr><tr><td>showArrow</td><td><code>boolean</code></td><td><code>true</code></td><td>是否展示箭头</td></tr><tr><td>trigger</td><td><code>click|hover</code></td><td><code>click</code></td><td>触发弹出选择的方式</td></tr><tr><td>confirmText</td><td><code>string</code></td><td><code>确认</code></td><td>确认按钮文本</td></tr><tr><td>cancelText</td><td><code>string</code></td><td><code>取消</code></td><td>取消按钮文本</td></tr><tr><td>on-confirm-click</td><td><code>() =&gt; boolean | Promise&lt;boolean&gt; </code></td><td><code>null</code></td><td>确认点击回调方法</td></tr><tr><td>on-cancel-click</td><td><code>() =&gt; boolean | Promise&lt;boolean&gt; </code></td><td><code>null</code></td><td>取消点击回调方法</td></tr></tbody></table><h3 id="popconfirm-slots" tabindex="-1"><a class="header-anchor" href="#popconfirm-slots"><span>Popconfirm Slots</span></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>()</td><td>弹出文本内容</td></tr><tr><td>trigger</td><td>()</td><td>弹出的触发器,需要支持click事件的元素</td></tr></tbody></table><h3 id="placementtype类型" tabindex="-1"><a class="header-anchor" href="#placementtype类型"><span>PlacementType类型</span></a></h3><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>top</td><td>上方居中</td></tr><tr><td>top-start</td><td>上方头部对齐</td></tr><tr><td>top-end</td><td>上方尾部对齐</td></tr><tr><td>right</td><td>右侧居中</td></tr><tr><td>right-start</td><td>右侧头部对齐</td></tr><tr><td>right-end</td><td>右侧尾部对齐</td></tr><tr><td>bottom</td><td>底部居中</td></tr><tr><td>bottom-start</td><td>底部头部对齐</td></tr><tr><td>bottom-end</td><td>底部尾部对齐</td></tr><tr><td>left</td><td>左侧</td></tr><tr><td>left-start</td><td>左侧头部对齐</td></tr><tr><td>left-end</td><td>左侧尾部对齐</td></tr></tbody></table>',7);function v(y,b){const p=o("PopconfirmDemo1"),l=o("Tabs");return r(),u("div",null,[g,m,c(l,{id:"6",data:[{id:"演示"},{id:"vue文件"}]},{title0:a(({value:t,isActive:e})=>[s("演示")]),title1:a(({value:t,isActive:e})=>[s("vue文件")]),tab0:a(({value:t,isActive:e})=>[c(p)]),tab1:a(({value:t,isActive:e})=>[f]),_:1}),h])}const P=i(d,[["render",v],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/popconfirm/","title":"弹出确认 Popconfirm","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Popconfirm Slots","slug":"popconfirm-slots","link":"#popconfirm-slots","children":[]},{"level":3,"title":"PlacementType类型","slug":"placementtype类型","link":"#placementtype类型","children":[]}],"git":{"updatedTime":1732203265000,"contributors":[{"name":"Leemagination","email":"328445543@qq.com","commits":1}]},"filePathRelative":"popconfirm/index.md"}');export{P as comp,_ as data};
