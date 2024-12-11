<template><div><h1 id="通知-notification" tabindex="-1"><a class="header-anchor" href="#通知-notification"><span>通知  Notification</span></a></h1>
<p>通常是在角落出现的信息。命令式生成通知</p>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3>
<Tabs id="9" :data='[{"id":"演示"},{"id":"vue文件"}]'>
<template #title0="{ value, isActive }">演示</template>
<template #title1="{ value, isActive }">vue文件</template>
<template #tab0="{ value, isActive }">
<NotificationDemo1></NotificationDemo1></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useNotification<span class="token punctuation">,</span> LeeButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useNotification</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标题'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token string">"底部信息"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"详细描述信息"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'正文内容文本'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
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
<NotificationDemo2></NotificationDemo2></template>
<template #tab1="{ value, isActive }">
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  useNotification<span class="token punctuation">,</span></span>
<span class="line">  LeeButton<span class="token punctuation">,</span></span>
<span class="line">  clearAllNotification<span class="token punctuation">,</span></span>
<span class="line">  setNotificationConfig<span class="token punctuation">,</span></span>
<span class="line">  LeeButtonGroup</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lee-vue3-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Title <span class="token keyword">from</span> <span class="token string">"./Title.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Content <span class="token keyword">from</span> <span class="token string">"./Content.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useNotification</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标题'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token string">"底部信息"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"详细描述信息"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">closable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'正文内容文本'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openNotification2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useNotification</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> Title<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token string">"底部信息"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"详细描述信息"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> Content</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openNotification3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setNotificationConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">placement</span><span class="token operator">:</span> <span class="token string">'bottom-left'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxItem</span><span class="token operator">:</span> <span class="token number">4</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">useNotification</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标题'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'已改变消息位置'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3s自动关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openNotification2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>传入组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openNotification3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>设置通知位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LeeButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearAllNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>清除所有通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButton</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LeeButtonGroup</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div></template>
</Tabs>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h4 id="usenotification-params" tabindex="-1"><a class="header-anchor" href="#usenotification-params"><span>useNotification params</span></a></h4>
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
<td>title</td>
<td><code v-pre>string| Component| VNode</code></td>
<td><code v-pre>''</code></td>
<td>通知标题</td>
</tr>
<tr>
<td>description</td>
<td><code v-pre>string| Component| VNode</code></td>
<td><code v-pre>''</code></td>
<td>通知描述文本</td>
</tr>
<tr>
<td>content</td>
<td><code v-pre>string| Component| VNode</code></td>
<td><code v-pre>''</code></td>
<td>通知内容文本</td>
</tr>
<tr>
<td>meta</td>
<td><code v-pre>string| Component| VNode</code></td>
<td><code v-pre>''</code></td>
<td>通知底部文本</td>
</tr>
<tr>
<td>duration</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
<td>通知停留时间(ms)</td>
</tr>
<tr>
<td>closable</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>是否展示关闭按钮</td>
</tr>
</tbody>
</table>
<h4 id="setnotificationconfig-params" tabindex="-1"><a class="header-anchor" href="#setnotificationconfig-params"><span>setNotificationConfig params</span></a></h4>
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
<td>maxItem</td>
<td><code v-pre>number</code></td>
<td><code v-pre>5</code></td>
<td>最多展示通知条数</td>
</tr>
<tr>
<td>duration</td>
<td><code v-pre>number</code></td>
<td><code v-pre>3000</code></td>
<td>通知停留时间(ms)</td>
</tr>
<tr>
<td>placement</td>
<td><code v-pre>PlacementType</code></td>
<td><code v-pre>undefined</code></td>
<td>通知展示位置</td>
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
<td>top-left</td>
<td>上方左侧</td>
</tr>
<tr>
<td>top-right</td>
<td>上方右侧</td>
</tr>
<tr>
<td>bottom</td>
<td>底部居中</td>
</tr>
<tr>
<td>bottom-left</td>
<td>底部左侧</td>
</tr>
<tr>
<td>bottom-right</td>
<td>底部右侧</td>
</tr>
</tbody>
</table>
</div></template>


