# 时间线 Timeline

用来展示有关时间序列的内容

### 垂直

::: tabs

@tab 演示
<TimelineDemo1></TimelineDemo1>

@tab vue文件
@[code vue](TimelineDemo1.vue)

:::

### 水平

::: tabs

@tab 演示
<TimelineDemo2></TimelineDemo2>

@tab vue文件
@[code vue](TimelineDemo2.vue)

:::

### 其他配置

::: tabs

@tab 演示
<TimelineDemo3></TimelineDemo3>

@tab vue文件
@[code vue](TimelineDemo3.vue)

:::

# API
#### Timeline props
| 名称         | 类型                           | 默认值         | 说明         |
|------------|------------------------------|-------------|------------|
| direction     | `'vertical' \| 'horizontal'` | `vertical` | 时间线的布局方式   |
| position     | `'left' \| 'right'`          | `right` | 垂直布局下文本的位置 |

#### TimelineItem props
| 名称       | 类型                  | 默认值         | 说明         |
|----------|---------------------|-------------|------------|
| position | `'left' \| 'right'` | `right` | 垂直布局下文本的位置 |
| title    | `string`            | `''` | 节点标题       |
| content    | `string`            | `''` | 节点描述       |
| time    | `string`            | `''` | 节点时间       |
| color    | `string`            | `''` | 节点颜色       |

