# 输入框   Input

文本输入最基础的表单

### 基础
::: tabs

@tab 演示
<InputDemo1></InputDemo1>

@tab vue文件
@[code vue](./InputDemo1.vue)

:::


### 其他配置
::: tabs

@tab 演示
<InputDemo2></InputDemo2>

@tab vue文件
@[code vue](./InputDemo2.vue)

:::

### 多行文本框
::: tabs

@tab 演示
<InputDemo3></InputDemo3>

@tab vue文件
@[code vue](./InputDemo3.vue)

:::


# API
### Input Props

| 名称   | 类型        | 默认值         | 说明         |
|------|-----------|-------------|------------|
| value | `string`  | `''`        | 输入框的值      |
| placeholder | `string`  | `''`        | 输入框的空文案    |
| prefix | `string`  | `''`        | 输入框的小前缀内容  |
| suffix | `string`  | `''`        | 输入框的小后缀内容  |
| addonBefore | `string`  | `''`        | 输入框的前缀内容   |
| addonAfter | `string`  | `''`        | 输入框的后缀内容   |
| limit | `number`  | `undefined` | 文本框的输入字符限制 |
| disabled | `boolean` | `false`     | 是否禁用输入框    |
| showCount | `boolean` | `false`     | 是否展示输入字符数  |
| showClear | `boolean` | `false`     | 是否展示清除图标   |
| password | `boolean` | `false`     | 是否展示成密码框模式 |
| bordered | `boolean` | `true`      | 是否展示输入框边框  |


### Textarea Props

| 名称   | 类型                                | 默认值         | 说明       |
|------|-----------------------------------|-------------|----------|
| value | `string`                          | `''`        | 输入框的值    |
| placeholder | `string`                          | `''`        | 输入框的空文案  |
| limit | `number`                          | `undefined` | 文本框的输入字符限制 |
| disabled | `boolean`                         | `false`     | 是否禁用输入框  |
| showCount | `boolean`                         | `false`     | 是否展示输入字符数 |
| showClear | `boolean`                         | `false`     | 是否展示清除图标 |
| bordered | `boolean`                         | `true`      | 是否展示输入框边框 |
| autoSize | `{minRows:number;maxRows:number}` | `undefined` | 输入框自适应高度 |
