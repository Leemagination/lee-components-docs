# 复选框  Checkbox

一般用于多选表单

### 基础

::: tabs

@tab 演示
<CheckboxDemo1></CheckboxDemo1>

@tab vue文件
@[code vue](CheckboxDemo1.vue)

:::

### 选项组

::: tabs

@tab 演示
<CheckboxDemo2></CheckboxDemo2>

@tab vue文件
@[code vue](CheckboxDemo2.vue)

:::

# API
#### Checkbox props
| 名称      | 类型               | 默认值         | 说明      |
|---------|------------------|-------------|---------|
| checked | `boolean`        | `false`     | 选项是否选中  |
| value | `string\|number` | `undefined` | 用于选项组的值 |
| disabled | `boolean`        | `false`     | 禁用状态    |


#### CheckboxGroup props
| 名称      | 类型                   | 默认值         | 说明       |
|---------|----------------------|-------------|----------|
| value | `(string\|number)[]` | `undefined` | 选项组已选中的值 |
| disabled | `boolean`            | `false`     | 禁用选项组    |
