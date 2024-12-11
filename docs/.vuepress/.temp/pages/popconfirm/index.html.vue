<template><div><h1 id="弹出确认-popconfirm" tabindex="-1"><a class="header-anchor" href="#弹出确认-popconfirm"><span>弹出确认 Popconfirm</span></a></h1>
<p>加了两个按钮的弹出框</p>
<Tabs id="6" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<PopconfirmDemo1></PopconfirmDemo1></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LeePopconfirm<span class="token punctuation">,</span> LeeButtonGroup<span class="token punctuation">,</span> LeeButton<span class="token punctuation">,</span> useMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">confirmClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'点击了确认'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">cancelClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'点击了取消'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncConfirmClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'点击了确认,2s后回调'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePopconfirm</span></span>
<span class="line">        <span class="token attr-name">@confirm-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirmClick<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@cancel-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cancelClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        弹出提示选择</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>打开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePopconfirm</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePopconfirm</span></span>
<span class="line">        <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@confirm-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirmClick<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@cancel-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cancelClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        弹出提示选择</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>悬浮触发<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePopconfirm</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePopconfirm</span></span>
<span class="line">        <span class="token attr-name">disabled</span></span>
<span class="line">        <span class="token attr-name">@confirm-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirmClick<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@cancel-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cancelClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        弹出提示选择</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePopconfirm</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePopconfirm</span></span>
<span class="line">        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@confirm-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirmClick<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@cancel-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cancelClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        弹出提示选择</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>出现位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePopconfirm</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeePopconfirm</span></span>
<span class="line">        <span class="token attr-name">:show-arrow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@confirm-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>asyncConfirmClick<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@cancel-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cancelClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        弹出提示选择</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span><span class="token punctuation">></span></span>异步操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeePopconfirm</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h4 id="popconfirm-props" tabindex="-1"><a class="header-anchor" href="#popconfirm-props"><span>Popconfirm props</span></a></h4>
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
<td><code v-pre>top</code></td>
<td>弹出选择的位置</td>
</tr>
<tr>
<td>disabled</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>是否禁用弹出</td>
</tr>
<tr>
<td>showArrow</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>是否展示箭头</td>
</tr>
<tr>
<td>trigger</td>
<td><code v-pre>click|hover</code></td>
<td><code v-pre>click</code></td>
<td>触发弹出选择的方式</td>
</tr>
<tr>
<td>confirmText</td>
<td><code v-pre>string</code></td>
<td><code v-pre>确认</code></td>
<td>确认按钮文本</td>
</tr>
<tr>
<td>cancelText</td>
<td><code v-pre>string</code></td>
<td><code v-pre>取消</code></td>
<td>取消按钮文本</td>
</tr>
<tr>
<td>on-confirm-click</td>
<td><code v-pre>() =&gt; boolean | Promise&lt;boolean&gt; </code></td>
<td><code v-pre>null</code></td>
<td>确认点击回调方法</td>
</tr>
<tr>
<td>on-cancel-click</td>
<td><code v-pre>() =&gt; boolean | Promise&lt;boolean&gt; </code></td>
<td><code v-pre>null</code></td>
<td>取消点击回调方法</td>
</tr>
</tbody>
</table>
<h3 id="popconfirm-slots" tabindex="-1"><a class="header-anchor" href="#popconfirm-slots"><span>Popconfirm Slots</span></a></h3>
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
<td>弹出文本内容</td>
</tr>
<tr>
<td>trigger</td>
<td>()</td>
<td>弹出的触发器,需要支持click事件的元素</td>
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


