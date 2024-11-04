# 卡片  Card

一个固化的展示容器,满足简单的内容展示

### 基础

::: tabs

@tab 演示
<CardDemo1></CardDemo1>

@tab vue文件
@[code vue](CardDemo1.vue)

:::

### 插槽

::: tabs

@tab 演示
<CardDemo2></CardDemo2>

@tab vue文件
@[code vue](CardDemo2.vue)

:::

### 可配置的一些样式

::: tabs

@tab 演示
<CardDemo3></CardDemo3>

@tab vue文件
@[code vue](CardDemo3.vue)

:::

# API
#### Card props
| 名称          | 类型        | 默认值         | 说明       |
|-------------|-----------|-------------|----------|
| title       | `string`  | `undefined` | 卡片标题     |
| content     | `string`  | `undefined` | 卡片内容     |
| footer      | `string`  | `undefined` | 卡片底部     |
| cover       | `string`  | `undefined` | 卡片头图链接   |
| extraText   | `string`  | `undefined` | 卡片标题额外内容 |
| hoverStatus | `boolean` | `false`     | 是否悬浮态    |
| closable       | `boolean` | `false`     | 是否可关闭    |
| border       | `boolean` | `false`     | 是否显示分界线  |


#### Alert Slots
| 名称           | 参数 | 说明       |
|--------------|----|----------|
| header       | () | 标题插槽     |
| header-extra | () | 标题额外内容插槽 |
| default      | () | 卡片内容插槽   |
| footer       | () | 卡片底部插槽   |
