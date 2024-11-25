# 进度条 Progress

展示一些事件的进度情况

### 基础

::: tabs

@tab 演示
<ProgressDemo1></ProgressDemo1>

@tab vue文件
@[code vue](ProgressDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<ProgressDemo2></ProgressDemo2>

@tab vue文件
@[code vue](ProgressDemo2.vue)

:::

# API
#### Progress props
| 名称          | 类型                                              | 默认值         | 说明        |
|-------------|-------------------------------------------------|-------------|-----------|
| type        | `line \| circle`                                | `line`      | 进度条展示类型   |
| percent     | `number`                                        | `0`         | 进度条百分比    |
| status      | `'normal' \| 'success' \| 'error' \| 'warning'` | `undefined` | 进度条状态颜色   |
| width       | `number`                                        | `8`         | 进度条宽度     |
| radius      | `number`                                        | `50`        | 圆圈进度条半径   |
| showValue   | `boolean`                                       | `true`      | 是否展示进度百分比 |
| gradient    | `string`                                        | `null`      | 渐变颜色配置    |
| colorConfig | `{[p:status]:string}`                           | `{}`        | 状态颜色配置    |

