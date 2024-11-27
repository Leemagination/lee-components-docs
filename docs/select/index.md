# 下拉选择 Select

下拉选择器组件

### 基础

::: tabs

@tab 演示
<SelectDemo1></SelectDemo1>

@tab vue文件
@[code vue](SelectDemo1.vue)

:::

### 多选

::: tabs

@tab 演示
<SelectDemo2></SelectDemo2>

@tab vue文件
@[code vue](SelectDemo2.vue)

:::

### 其他配置

::: tabs

@tab 演示
<SelectDemo3></SelectDemo3>

@tab vue文件
@[code vue](SelectDemo3.vue)

:::

# API
#### Select props
| 名称         | 类型                                            | 默认值         | 说明          |
|------------|-----------------------------------------------|-------------|-------------|
| value     | `string \| number \| Array`                   | `undefined` | 选择器的值       |
| placeholder     | `string`                                      | `请选择`       | 选择器提示文案     |
| options     | `{ text: string; value: number \| string }[]` | `[]`        | 选择器下拉选项数组   |
| multiple     | `boolean`                                     | `false`     | 是否是多选       |
| disabled     | `boolean`                                     | `false`     | 是否禁用        |
| clearable     | `boolean`                                     | `false`     | 是否可清空       |
| sameWidth     | `boolean`                                     | `true`      | 下拉框是否和输入框同宽 |

