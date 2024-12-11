<template><div><h1 id="下拉菜单-dropdown" tabindex="-1"><a class="header-anchor" href="#下拉菜单-dropdown"><span>下拉菜单  Dropdown</span></a></h1>
<p>用于展示更多内容</p>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3>
<Tabs id="9" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<DropdownDemo1></DropdownDemo1></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeeButton<span class="token punctuation">,</span> LeeButtonGroup<span class="token punctuation">,</span> LeeDropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'一级菜单1'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'一级菜单2'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'一级菜单3'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'一级菜单含子菜单'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'二级菜单1'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'二级菜单2'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'二级菜单3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeDropdown</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>hover触发<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeDropdown</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeDropdown</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>点击触发<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeDropdown</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeDropdown</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom-start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>底部对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeDropdown</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeDropdown</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>顶部对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeDropdown</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeDropdown</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>左侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeDropdown</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeDropdown</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>右侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeDropdown</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeDropdown</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>禁用菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeDropdown</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h4 id="dropdown-props" tabindex="-1"><a class="header-anchor" href="#dropdown-props"><span>Dropdown props</span></a></h4>
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
<td><code v-pre>PlacementType</code></td>
<td><code v-pre>bottom</code></td>
<td>下拉菜单的出现位置</td>
</tr>
<tr>
<td>options</td>
<td><code v-pre>OptionItem[]</code></td>
<td><code v-pre>[]</code></td>
<td>是否可清除</td>
</tr>
<tr>
<td>disabled</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>菜单禁用</td>
</tr>
<tr>
<td>trigger</td>
<td><code v-pre>'hover' | 'click'</code></td>
<td><code v-pre>hover</code></td>
<td>打开菜单的方式</td>
</tr>
</tbody>
</table>
<h3 id="optionsitem类型" tabindex="-1"><a class="header-anchor" href="#optionsitem类型"><span>OptionsItem类型</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td><code v-pre>string</code></td>
<td>级联选项的显示文本</td>
</tr>
<tr>
<td>key</td>
<td><code v-pre>string|number</code></td>
<td>级联选项的值</td>
</tr>
<tr>
<td>disabled</td>
<td><code v-pre>boolean</code></td>
<td>是否禁用选项</td>
</tr>
<tr>
<td>children</td>
<td><code v-pre>OptionItem[]</code></td>
<td>子菜单</td>
</tr>
</tbody>
</table>
<h3 id="placementtype类型" tabindex="-1"><a class="header-anchor" href="#placementtype类型"><span>PlacementType类型</span></a></h3>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>top</td>
<td>上方居中</td>
</tr>
<tr>
<td>top-start</td>
<td>上方头部对齐</td>
</tr>
<tr>
<td>top-end</td>
<td>上方尾部对齐</td>
</tr>
<tr>
<td>right</td>
<td>右侧居中</td>
</tr>
<tr>
<td>right-start</td>
<td>右侧头部对齐</td>
</tr>
<tr>
<td>right-end</td>
<td>右侧尾部对齐</td>
</tr>
<tr>
<td>bottom</td>
<td>底部居中</td>
</tr>
<tr>
<td>bottom-start</td>
<td>底部头部对齐</td>
</tr>
<tr>
<td>bottom-end</td>
<td>底部尾部对齐</td>
</tr>
<tr>
<td>left</td>
<td>左侧</td>
</tr>
<tr>
<td>left-start</td>
<td>左侧头部对齐</td>
</tr>
<tr>
<td>left-end</td>
<td>左侧尾部对齐</td>
</tr>
</tbody>
</table>
</div></template>


