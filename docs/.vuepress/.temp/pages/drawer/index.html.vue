<template><div><h1 id="抽屉-drawer" tabindex="-1"><a class="header-anchor" href="#抽屉-drawer"><span>抽屉  Drawer</span></a></h1>
<p>页面侧边多出来的展示内容</p>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3>
<Tabs id="9" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<DrawerDemo1></DrawerDemo1></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeButtonGroup<span class="token punctuation">,</span> LeeButton<span class="token punctuation">,</span> useDrawer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token parameter">placement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useDrawer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">placement</span><span class="token operator">:</span> placement<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'抽屉标题'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'抽屉内容,hello world,抽屉内容,hello world,抽屉内容,hello world'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openDrawer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打开抽屉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openDrawer('left')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>左边抽屉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openDrawer('top')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>顶部抽屉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openDrawer('bottom')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>底部抽屉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h3>
<Tabs id="21" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<DrawerDemo2></DrawerDemo2></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeButtonGroup<span class="token punctuation">,</span> LeeButton<span class="token punctuation">,</span> useDrawer<span class="token punctuation">,</span> useMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> TitleComponent <span class="token keyword">from</span> <span class="token string">"./Title.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ContentComponent <span class="token keyword">from</span> <span class="token string">"./Content.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token parameter">placement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useDrawer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">placement</span><span class="token operator">:</span> placement <span class="token operator">||</span> <span class="token string">'right'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'抽屉标题'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'抽屉内容,hello world,抽屉内容,hello world,抽屉内容,hello world'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openComponentDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useDrawer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> TitleComponent<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> ContentComponent<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">'400px'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maskClosable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">handleClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'抽屉被关闭了'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openAutoCloseDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> closeModal <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDrawer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">showClose</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maskClosable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'抽屉标题'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'抽屉内容,hello world,抽屉内容,hello world,抽屉内容,hello world'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">handleClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'关闭回调'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openComponentDrawer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打开抽屉,传入vue组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openAutoCloseDrawer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3s后自动关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h4 id="drawer-props" tabindex="-1"><a class="header-anchor" href="#drawer-props"><span>Drawer props</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>placement</td>
<td><code v-pre>'right' | 'top' | 'bottom' | 'left'</code></td>
<td><code v-pre>right</code></td>
<td>抽屉出现的位置</td>
</tr>
<tr>
<td>title</td>
<td><code v-pre>string | VNode | Component</code></td>
<td><code v-pre>''</code></td>
<td>抽屉标题</td>
</tr>
<tr>
<td>content</td>
<td><code v-pre>string | VNode | Component</code></td>
<td><code v-pre>''</code></td>
<td>抽屉内容</td>
</tr>
<tr>
<td>maskClosable</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>''</code></td>
<td>蒙层是否可点击</td>
</tr>
<tr>
<td>showClose</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>''</code></td>
<td>是否展示关闭图标</td>
</tr>
<tr>
<td>size</td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>null</code></td>
<td>控制抽屉的宽度或高度</td>
</tr>
<tr>
<td>handleClosed</td>
<td><code v-pre>Function</code></td>
<td><code v-pre>null</code></td>
<td>抽屉关闭的回调函数</td>
</tr>
</tbody>
</table>
</div></template>


