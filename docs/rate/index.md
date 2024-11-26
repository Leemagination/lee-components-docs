# 评分 Rate

评分组件

### 基础

::: tabs

@tab 演示
<RateDemo1></RateDemo1>

@tab vue文件
@[code vue](RateDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<RateDemo2></RateDemo2>

@tab vue文件
@[code vue](RateDemo2.vue)

:::

# API
#### Rate props
| 名称         | 类型                             | 默认值       | 说明        |
|------------|--------------------------------|-----------|-----------|
| value     | `number`                       | `0`       | 评分的值      |
| iconType     | `star \| fire \| heart \| cup` | `star`    | 评分内置图标    |
| count     | `number`                       | `5`       | 评分的个数     |
| clearable     | `boolean`                      | `false`   | 评分是否可点击清空 |
| allowHalf     | `boolean`                      | `false`   | 评分是否能打半分  |
| readonly     | `boolean`                      | `false`   | 评分是否只读    |
| color     | `string`                       | `#ffb838` | 评分展示的颜色   |

