import{_ as u,c as r,b as e,d as a,e as n,a as k,r as p,o as d,f as s}from"./app-CEuBi6yO.js";const g={},m=n("h1",{id:"级联选择-cascader",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#级联选择-cascader"},[n("span",null,"级联选择 Cascader")])],-1),h=n("p",null,"只有单选的级联选择器",-1),y=n("h3",{id:"基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础"},[n("span",null,"基础")])],-1),f=n("div",{class:"language-vue","data-highlighter":"prismjs","data-ext":"vue","data-title":"vue"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" LeeCascader "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"lee-vue3-components"'),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),s("depth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(" iterator "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" prefix "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" length "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" length"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("iterator "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"key-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"第"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"个选项"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(" i "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),s("depth"),n("span",{class:"token punctuation"},","),s(" iterator "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("iterator "),n("span",{class:"token operator"},"==="),s(" depth"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"key-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"l-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(" i "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"key-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"l-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(" i "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),s("depth"),n("span",{class:"token punctuation"},","),s(" iterator "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" options")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" cascaderValue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"})]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"    双向绑定的值:{{ cascaderValue }}"),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeCascader")]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("请选择一个值"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cascaderValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeCascader")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"})])])],-1),b=n("h3",{id:"可配置化样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可配置化样式"},[n("span",null,"可配置化样式")])],-1),v=n("div",{class:"language-vue","data-highlighter":"prismjs","data-ext":"vue","data-title":"vue"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" LeeCascader "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"lee-vue3-components"'),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),s("depth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(" iterator "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" prefix "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" length "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" length"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("iterator "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"key-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"第"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"个选项"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(" i "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),s("depth"),n("span",{class:"token punctuation"},","),s(" iterator "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("iterator "),n("span",{class:"token operator"},"==="),s(" depth"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"key-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"l-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(" i "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"key-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"l-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(" i "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),s("depth"),n("span",{class:"token punctuation"},","),s(" iterator "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("prefix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" options")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getOptions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" cascaderValue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'key-2-2-2'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" cascaderValue2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'key-3-3-3'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"})]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("显示路径和清除状态"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeCascader")]),s(),n("span",{class:"token attr-name"},"show-path"),s(),n("span",{class:"token attr-name"},"clearable"),s(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cascaderValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeCascader")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("禁用状态"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("LeeCascader")]),s(),n("span",{class:"token attr-name"},"show-path"),s(),n("span",{class:"token attr-name"},"disabled"),s(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cascaderValue2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("LeeCascader")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"})])])],-1),w=k('<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1><h4 id="cascader-props" tabindex="-1"><a class="header-anchor" href="#cascader-props"><span>Cascader props</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>string|number</code></td><td><code>undefined</code></td><td>级联选择器的绑定值</td></tr><tr><td>clearable</td><td><code>boolean</code></td><td><code>false</code></td><td>是否可清除</td></tr><tr><td>showPath</td><td><code>boolean</code></td><td><code>false</code></td><td>是否展示全部级联路径</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr><tr><td>placeholder</td><td><code>string</code></td><td><code>false</code></td><td>提示信息</td></tr><tr><td>options</td><td><code>OptionItem[]</code></td><td><code>[]</code></td><td>级联选项数据</td></tr></tbody></table><h4 id="optionitem类型" tabindex="-1"><a class="header-anchor" href="#optionitem类型"><span>OptionItem类型</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td><code>string</code></td><td>级联选项的显示文本</td></tr><tr><td>key</td><td><code>string|number</code></td><td>级联选项的值</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>是否禁用选项</td></tr><tr><td>children</td><td><code>OptionItem[]</code></td><td>子级联选项</td></tr></tbody></table>',5);function x(_,$){const l=p("CascaderDemo1"),c=p("Tabs"),i=p("CascaderDemo2");return d(),r("div",null,[m,h,y,e(c,{id:"9",data:[{id:"演示"},{id:"vue文件"}]},{title0:a(({value:t,isActive:o})=>[s("演示")]),title1:a(({value:t,isActive:o})=>[s("vue文件")]),tab0:a(({value:t,isActive:o})=>[e(l)]),tab1:a(({value:t,isActive:o})=>[f]),_:1}),b,e(c,{id:"21",data:[{id:"演示"},{id:"vue文件"}]},{title0:a(({value:t,isActive:o})=>[s("演示")]),title1:a(({value:t,isActive:o})=>[s("vue文件")]),tab0:a(({value:t,isActive:o})=>[e(i)]),tab1:a(({value:t,isActive:o})=>[v]),_:1}),w])}const O=u(g,[["render",x],["__file","index.html.vue"]]),V=JSON.parse('{"path":"/cascader/","title":"级联选择 Cascader","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":3,"title":"可配置化样式","slug":"可配置化样式","link":"#可配置化样式","children":[]}],"git":{"updatedTime":1731511636000,"contributors":[{"name":"Leemagination","email":"328445543@qq.com","commits":2}]},"filePathRelative":"cascader/index.md"}');export{O as comp,V as data};