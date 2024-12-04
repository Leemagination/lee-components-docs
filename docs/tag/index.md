# 标签 Tag

带了点颜色的文本展示

### 基础

::: tabs

@tab 演示
<TagDemo1></TagDemo1>

@tab vue文件
@[code vue](TagDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<TagDemo2></TagDemo2>

@tab vue文件
@[code vue](TagDemo2.vue)

:::

# API
#### Tag props
| 名称         | 类型                                                              | 默认值         | 说明      |
|------------|-----------------------------------------------------------------|-------------|---------|
| type       | ` 'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `default`   | 标签类型    |
| closable   | `boolean`                                                       | `false`     | 标签是否可关闭 |
| selectable | `boolean`                                                       | `false`     | 标签是否可选择 |
| checked    | `boolean`                                                       | `false`     | 选择状态下的值 |
| onClick    | `(e: MouseEvent) => void`                                       | `undefined` | 点击回调    |
| onClose    | `(e: MouseEvent) => void`                                       | `undefined` | 点击关闭回调  |

