# 面包屑 Breadcrumb

用于展示用户目前页面的导航定位

### 基础

::: tabs

@tab 演示
<BreadcrumbDemo1></BreadcrumbDemo1>

@tab vue文件
@[code vue](BreadcrumbDemo1.vue)

:::

### href跳转

::: tabs

@tab 演示
<BreadcrumbDemo2></BreadcrumbDemo2>

@tab vue文件
@[code vue](BreadcrumbDemo2.vue)

:::


### 自定义分隔符

::: tabs

@tab 演示
<BreadcrumbDemo3></BreadcrumbDemo3>

@tab vue文件
@[code vue](BreadcrumbDemo3.vue)

:::






# API
#### BreadcrumbItem props
| 名称         | 类型     | 默认值         | 说明            |
|------------|--------|-------------|---------------|
| href | `string` | `''`       | 增加面包屑点击跳转链接效果 |
| onClick     | `(e: MouseEvent) => void`     | `undefined` | 点击回调          |

#### Breadcrumb Slots
| 名称      | 参数 | 说明  |
|---------|----|-----|
| separator | () | 分隔符 |

#### BreadcrumbItem Slots
| 名称      | 参数 | 说明    |
|---------|----|-------|
| default | () | 面包屑文本 |
