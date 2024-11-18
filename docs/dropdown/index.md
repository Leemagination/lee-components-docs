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

| 名称        | 类型                   | 默认值      | 说明        |
|-----------|----------------------|----------|-----------|
| placement | `PlacementType`      | `bottom` | 下拉菜单的出现位置 |
| options   | `OptionItem[]`       | `[]`     | 是否可清除     |
| disabled  | `boolean`            | `false`  | 菜单禁用      |
| trigger   | `'hover' \| 'click'` | `hover`  | 打开菜单的方式   |

### OptionsItem类型

| 名称       | 类型               | 说明        |
|----------|------------------|-----------|
| text     | `string`         | 级联选项的显示文本 |
| key      | `string\|number` | 级联选项的值    |
| disabled | `boolean`        | 是否禁用选项    |
| children | `OptionItem[]`   | 子菜单       |

### PlacementType类型

| 值        | 说明     |
|----------|--------|
| top      | 上方居中   |
| top-start      | 上方头部对齐 |
| top-end | 上方尾部对齐 |
| right | 右侧居中   |
| right-start | 右侧头部对齐 |
| right-end | 右侧尾部对齐 |
| bottom | 底部居中   |
| bottom-start | 底部头部对齐 |
| bottom-end | 底部尾部对齐 |
| left| 左侧     |
| left-start| 左侧头部对齐 |
| left-end| 左侧尾部对齐 |
