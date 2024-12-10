# 树 Tree

可多选的树状选择

### 基础

::: tabs

@tab 演示
<TreeDemo1></TreeDemo1>

@tab vue文件
@[code vue](TreeDemo1.vue)

:::

### 级联

::: tabs

@tab 演示
<TreeDemo2></TreeDemo2>

@tab vue文件
@[code vue](TreeDemo2.vue)

:::

### 默认展开

::: tabs

@tab 演示
<TreeDemo3></TreeDemo3>

@tab vue文件
@[code vue](TreeDemo3.vue)

:::


# API
#### Tree props
| 名称         | 类型                     | 默认值    | 说明       |
|------------|------------------------|--------|----------|
| data     | `TreeDataItem[]`       | `[]`   | 树的选项数组   |
| checkKeys     | `(string \| number)[]` | `[]`   | 选中的值     |
| cascade     | `boolean`              | `false` | 是否是级联选择  |
| cascade     | `boolean`              | `false` | 是否是级联选择  |
| expandAll     | `boolean`              | `false` | 是否默认展开所有 |
| defaultExpandKeys     | `(string \| number)[]`              | `[]`   | 展开指定的值   |

#### TreeDataItem 
| 名称    | 类型                                    | 说明 |
|-------|---------------------------------------|----|
| label | `string`                              | 选项文本 |
| key   | `string \| number`                    | 选项值 |
| children   | `TreeDataItem[] \| null \| undefined` | 子选项  |
