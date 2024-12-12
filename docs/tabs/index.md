# 标签页 Tabs

在同一块区域切换内容

### 基础

::: tabs

@tab 演示
<TabsDemo1></TabsDemo1>

@tab vue文件
@[code vue](TabsDemo1.vue)

:::

### 无动画

::: tabs

@tab 演示
<TabsDemo2></TabsDemo2>

@tab vue文件
@[code vue](TabsDemo2.vue)

:::

### 显示方式

::: tabs

@tab 演示
<TabsDemo3></TabsDemo3>

@tab vue文件
@[code vue](TabsDemo3.vue)

:::

# API
#### Tabs props
| 名称    | 类型                 | 默认值         | 说明          |
|-------|--------------------|-------------|-------------|
| value | `string \| number` | `undefined` | 标签页当前值      |
| animated | `boolean`          | `true`      | 是否展示标签页切换动画 |

#### TabPanel props
| 名称    | 类型             | 默认值         | 说明         |
|-------|----------------|-------------|------------|
| displayType | `'if' \| 'show'` | `if`        | 标签内容展示形式   |
| tabKey | `string \| number` | `undefined` | 每个标签唯一的key |
| name | `string` | `''` | 标签展示名称     |

