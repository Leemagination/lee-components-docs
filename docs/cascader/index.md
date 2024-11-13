# 级联选择 Cascader

只有单选的级联选择器

### 基础

::: tabs

@tab 演示
<CascaderDemo1></CascaderDemo1>

@tab vue文件
@[code vue](CascaderDemo1.vue)

:::


### 可配置化样式

::: tabs

@tab 演示
<CascaderDemo2></CascaderDemo2>

@tab vue文件
@[code vue](CascaderDemo2.vue)

:::

# API
#### Cascader props
| 名称         | 类型               | 默认值         | 说明         |
|------------|------------------|-------------|------------|
| value     | `string\|number` | `undefined` | 级联选择器的绑定值  |
| clearable     | `boolean`        | `false`     | 是否可清除      |
| showPath     | `boolean`        | `false`     | 是否展示全部级联路径 |
| disabled     | `boolean`        | `false`     | 是否禁用       |
| placeholder     | `string`         | `false`     | 提示信息       |
| options     | `OptionItem[]`           | `[]`        | 级联选项数据     |


#### OptionItem类型
| 名称       | 类型               | 说明        |
|----------|------------------|-----------|
| text     | `string`         | 级联选项的显示文本 |
| key      | `string\|number` | 级联选项的值    |
| disabled | `boolean`        | 是否禁用选项    |
| children | `OptionItem[]`   | 子级联选项     |
