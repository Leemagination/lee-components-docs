<template><div><h1 id="面包屑-breadcrumb" tabindex="-1"><a class="header-anchor" href="#面包屑-breadcrumb"><span>面包屑 Breadcrumb</span></a></h1>
<p>用于展示用户目前页面的导航定位</p>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3>
<Tabs id="9" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<BreadcrumbDemo1></BreadcrumbDemo1></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeBreadcrumb<span class="token punctuation">,</span> LeeBreadcrumbItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumb</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumb</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h3 id="href跳转" tabindex="-1"><a class="header-anchor" href="#href跳转"><span>href跳转</span></a></h3>
<Tabs id="21" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<BreadcrumbDemo2></BreadcrumbDemo2></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeBreadcrumb<span class="token punctuation">,</span> LeeBreadcrumbItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumb</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>导航1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.qq.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>导航2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumb</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h3 id="自定义分隔符" tabindex="-1"><a class="header-anchor" href="#自定义分隔符"><span>自定义分隔符</span></a></h3>
<Tabs id="33" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<BreadcrumbDemo3></BreadcrumbDemo3></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeBreadcrumb<span class="token punctuation">,</span> LeeBreadcrumbItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumb</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#separator</span><span class="token punctuation">></span></span>=><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航1</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航2</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航3</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span>导航4</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumbItem</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeBreadcrumb</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h4 id="breadcrumbitem-props" tabindex="-1"><a class="header-anchor" href="#breadcrumbitem-props"><span>BreadcrumbItem props</span></a></h4>
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
<td>href</td>
<td><code v-pre>string</code></td>
<td><code v-pre>''</code></td>
<td>增加面包屑点击跳转链接效果</td>
</tr>
<tr>
<td>onClick</td>
<td><code v-pre>(e: MouseEvent) =&gt; void</code></td>
<td><code v-pre>undefined</code></td>
<td>点击回调</td>
</tr>
</tbody>
</table>
<h4 id="breadcrumb-slots" tabindex="-1"><a class="header-anchor" href="#breadcrumb-slots"><span>Breadcrumb Slots</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>separator</td>
<td>()</td>
<td>分隔符</td>
</tr>
</tbody>
</table>
<h4 id="breadcrumbitem-slots" tabindex="-1"><a class="header-anchor" href="#breadcrumbitem-slots"><span>BreadcrumbItem Slots</span></a></h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>()</td>
<td>面包屑文本</td>
</tr>
</tbody>
</table>
</div></template>


