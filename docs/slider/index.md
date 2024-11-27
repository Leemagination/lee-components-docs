# 滑动选择 Slider

鼠标移动控制分值

### 基础

::: tabs

@tab 演示
<SliderDemo1></SliderDemo1>

@tab vue文件
@[code vue](SliderDemo1.vue)

:::

### 范围滑动

::: tabs

@tab 演示
<SliderDemo2></SliderDemo2>

@tab vue文件
@[code vue](SliderDemo2.vue)

:::


### 其他配置

::: tabs

@tab 演示
<SliderDemo3></SliderDemo3>

@tab vue文件
@[code vue](SliderDemo3.vue)

:::

# API
#### Slider props
| 名称    | 类型                   | 默认值     | 说明       |
|-------|----------------------|---------|----------|
| value | `number \| number[]` | `0`     | 滑动选择的值   |
| step  | `number `            | `1`     | 滑动选择的步长  |
| min   | `number `            | `0`     | 滑动选择的最小值 |
| max   | `number `            | `100`   | 滑动选择的最大值 |
| range   | `boolean `           | `false` | 是否是范围选择  |
| disabled   | `boolean `           | `false` | 是否禁用     |

