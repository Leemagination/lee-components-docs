# 下拉菜单  Dropdown

用于展示更多内容

### 基础

::: tabs

@tab 演示
<DropdownDemo1></DropdownDemo1>

@tab vue文件
@[code vue](DropdownDemo1.vue)

:::


# API
#### Dropdown props
| 名称         | 类型                   | 默认值         | 说明       |
|------------|----------------------|-------------|----------|
| placement     | `string\|number`     | `undefined` | 级联选择器的绑定值 |
| options     | `OptionItem[]`       | `[]`        | 是否可清除    |
| disabled     | `boolean`            | `false`     | 菜单禁用     |
| trigger     | `'hover' \| 'click'` | `hover`     | 打开菜单的方式  |


### OptionsItem类型
| 名称       | 类型               | 说明        |
|----------|------------------|-----------|
| text     | `string`         | 级联选项的显示文本 |
| key      | `string\|number` | 级联选项的值    |
| disabled | `boolean`        | 是否禁用选项    |
| children | `OptionItem[]`   | 子菜单       |
