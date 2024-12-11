<template><div><h1 id="分页器-pagination" tabindex="-1"><a class="header-anchor" href="#分页器-pagination"><span>分页器 Pagination</span></a></h1>
<p>多用于表格分页的一个组件</p>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3>
<Tabs id="9" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<PaginationDemo1></PaginationDemo1></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> currentPage <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>当前页码: {{ currentPage }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePagination</span> <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span> <span class="token attr-name">showQuickJumper</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePagination</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h3 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h3>
<Tabs id="21" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<PaginationDemo2></PaginationDemo2></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> currentPage <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> currentSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>当前页码: {{ currentPage }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>当前分页数量: {{ currentSize }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePagination</span></span>
<span class="line">      <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentSize<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageSizeOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[10,20,50,100,1000]<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">jump-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>立马跳转<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">showQuickJumper</span></span>
<span class="line">      <span class="token attr-name">showSizePicker</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePagination</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>禁用状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePagination</span></span>
<span class="line">      <span class="token attr-name">disabled</span></span>
<span class="line">      <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentSize<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageSizeOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[10,20,50,100,1000]<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">showQuickJumper</span></span>
<span class="line">      <span class="token attr-name">showSizePicker</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePagination</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h3 id="页码展示个数" tabindex="-1"><a class="header-anchor" href="#页码展示个数"><span>页码展示个数</span></a></h3>
<Tabs id="33" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<PaginationDemo3></PaginationDemo3></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> currentPage <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> currentSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePagination</span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentSize<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:display-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageSizeOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[10,20,50,100,1000]<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">showSizePicker</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePagination</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePagination</span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentSize<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:display-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageSizeOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[10,20,50,100,1000]<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">showSizePicker</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePagination</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePagination</span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentSize<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:display-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:pageSizeOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[10,20,50,100,1000]<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">showSizePicker</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePagination</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h4 id="pagination-props" tabindex="-1"><a class="header-anchor" href="#pagination-props"><span>Pagination props</span></a></h4>
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
<td>page</td>
<td><code v-pre>number</code></td>
<td><code v-pre>1</code></td>
<td>当前页码的值</td>
</tr>
<tr>
<td>pageSize</td>
<td><code v-pre>number</code></td>
<td><code v-pre>10</code></td>
<td>分页数量的值</td>
</tr>
<tr>
<td>pageCount</td>
<td><code v-pre>number</code></td>
<td><code v-pre>1</code></td>
<td>总页数</td>
</tr>
<tr>
<td>disabled</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>是否禁用</td>
</tr>
<tr>
<td>showSizePicker</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>是否展示分页数量选择器</td>
</tr>
<tr>
<td>pageSizeOptions</td>
<td><code v-pre>number[]</code></td>
<td><code v-pre>[10]</code></td>
<td>分页数量可选数组</td>
</tr>
<tr>
<td>displayCount</td>
<td><code v-pre>number</code></td>
<td><code v-pre>9</code></td>
<td>页码展示的个数</td>
</tr>
<tr>
<td>showQuickJumper</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>是否展示快速跳转</td>
</tr>
<tr>
<td>jumpText</td>
<td><code v-pre>string</code></td>
<td><code v-pre>跳转</code></td>
<td>是否展示快速跳转</td>
</tr>
</tbody>
</table>
</div></template>


