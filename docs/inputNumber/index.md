# 数字输入框   InputNumber

仅用于输入数字的输入框

::: tabs

@tab 演示
<InputNumberDemo1></InputNumberDemo1>

@tab vue文件
@[code vue](./InputNumberDemo1.vue)

:::



# API
### InputNumber Props

| 名称          | 类型        | 默认值         | 说明         |
|-------------|-----------|-------------|------------|
| value       | `string`  | `''`        | 输入框的值      |
| placeholder | `string`  | `''`        | 输入框的空文案    |
| prefix      | `string`  | `''`        | 输入框的小前缀内容  |
| suffix      | `string`  | `''`        | 输入框的小后缀内容  |
| addonBefore | `string`  | `''`        | 输入框的前缀内容   |
| addonAfter  | `string`  | `''`        | 输入框的后缀内容   |
| limit       | `number`  | `undefined` | 文本框的输入字符限制 |
| disabled    | `boolean` | `false`     | 是否禁用输入框    |
| showClear   | `boolean` | `false`     | 是否展示清除图标   |
| bordered    | `boolean` | `true`      | 是否展示输入框边框  |
| showControl | `boolean` | `true`      | 是否展示加减控制器  |
| step        | `number`  | `1`         | 控制器加减的数值   |
| min         | `number`  | `Infinity`  | 最小值        |
| max         | `number`  | `-Infinity`         | 最大值        |

