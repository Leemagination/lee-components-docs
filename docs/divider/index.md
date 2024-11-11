# 分割线  Divider

分割一些内容或文本

### 基础

::: tabs

@tab 演示
<DividerDemo1></DividerDemo1>

@tab vue文件
@[code vue](DividerDemo1.vue)

:::

### 垂直方向

::: tabs

@tab 演示
<DividerDemo2></DividerDemo2>

@tab vue文件
@[code vue](DividerDemo2.vue)

:::

### 增加标题

::: tabs

@tab 演示
<DividerDemo3></DividerDemo3>

@tab vue文件
@[code vue](DividerDemo3.vue)

:::

### 其他配置项

::: tabs

@tab 演示
<DividerDemo4></DividerDemo4>

@tab vue文件
@[code vue](DividerDemo4.vue)

:::

# API
#### Divider props
| 名称         | 类型                               | 默认值          | 说明                   |
|------------|----------------------------------|--------------|----------------------|
| color     | `string`                         | `#e3e3e3`    | 分割线颜色                |
| direction     | `horizontal\|vertical`           | `horizontal` | 分割线方向                |
| gradual     | `boolean`                        | `false`      | 分割线是否渐变              |
| width     | `number`                         | `1`          | 分割线宽度,单位px           |
| horizontalLength     | `number`                         | `100`        | 水平分割线长度,单位百分比        |
| horizontalLineAlign     | `center' \| 'left' \| 'right` | `center`     | 水平分割线位置              |
| verticalHeight     | `number\|string`                 | `1`          | 垂直分割线line-height高度   |
| distanceToLeft     | `number`                  | `50`         | 分割线标题距离左边的距离,仅水平方向有效 |

#### Divider Slots
| 名称      | 参数 | 说明        |
|---------|----|-----------|
| default | () | 水平分割线内的文本 |
