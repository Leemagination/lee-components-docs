<template><div><h1 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list"><span>列表  List</span></a></h1>
<p>用于展示长列表内容</p>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3>
<Tabs id="9" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<ListDemo1></ListDemo1></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeList<span class="token punctuation">,</span> LeeListItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeList</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第一项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第二项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第三项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第四项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeList</span><span class="token punctuation">></span></span></span>
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
<ListDemo2></ListDemo2></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeButton<span class="token punctuation">,</span> LeeList<span class="token punctuation">,</span> LeeListItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeList</span> <span class="token attr-name">bordered</span> <span class="token attr-name">hover-status</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>有边框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>有悬浮态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第三项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第四项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeList</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeList</span> <span class="token attr-name">:split-line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>不显示分割线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第二项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第三项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第四项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeList</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeList</span> <span class="token attr-name">hover-status</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">        插槽能力</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prefix</span><span class="token punctuation">></span></span>前缀<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">        第二项</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#suffix</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>确定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第三项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeListItem</span><span class="token punctuation">></span></span>第四项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeListItem</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeList</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h4 id="list-props" tabindex="-1"><a class="header-anchor" href="#list-props"><span>List props</span></a></h4>
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
<td>bordered</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>是否展示列表边框</td>
</tr>
<tr>
<td>hoverStatus</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>是否展示列表项悬浮态</td>
</tr>
<tr>
<td>splitLine</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>是否展示列表项分割线</td>
</tr>
</tbody>
</table>
<h4 id="listitem-slots" tabindex="-1"><a class="header-anchor" href="#listitem-slots"><span>ListItem Slots</span></a></h4>
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
<td>列表项展示内容</td>
</tr>
<tr>
<td>prefix</td>
<td>()</td>
<td>列表项前缀</td>
</tr>
<tr>
<td>suffix</td>
<td>()</td>
<td>列表项后缀</td>
</tr>
</tbody>
</table>
</div></template>


