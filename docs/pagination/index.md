# 分页器 Pagination

多用于表格分页的一个组件

### 基础

::: tabs

@tab 演示
<PaginationDemo1></PaginationDemo1>

@tab vue文件
@[code vue](PaginationDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<PaginationDemo2></PaginationDemo2>

@tab vue文件
@[code vue](PaginationDemo2.vue)

:::

### 页码展示个数

::: tabs

@tab 演示
<PaginationDemo3></PaginationDemo3>

@tab vue文件
@[code vue](PaginationDemo3.vue)

:::

# API
#### Pagination props
| 名称         | 类型         | 默认值     | 说明          |
|------------|------------|---------|-------------|
| page     | `number`   | `1`     | 当前页码的值      |
| pageSize     | `number`   | `10`    | 分页数量的值      |
| pageCount     | `number`   | `1`     | 总页数         |
| disabled     | `boolean`  | `false` | 是否禁用        |
| showSizePicker     | `boolean`  | `false` | 是否展示分页数量选择器 |
| pageSizeOptions     | `number[]` | `[10]`  | 分页数量可选数组    |
| displayCount     | `number`   | `9`     | 页码展示的个数     |
| showQuickJumper     | `boolean`  | `false` | 是否展示快速跳转    |
| jumpText     | `string`   | `跳转`    | 是否展示快速跳转    |

