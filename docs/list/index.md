# 列表  List

用于展示长列表内容

### 基础

::: tabs

@tab 演示
<ListDemo1></ListDemo1>

@tab vue文件
@[code vue](ListDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<ListDemo2></ListDemo2>

@tab vue文件
@[code vue](ListDemo2.vue)

:::

# API
#### List props
| 名称         | 类型        | 默认值     | 说明         |
|------------|-----------|---------|------------|
| bordered     | `boolean` | `false` | 是否展示列表边框   |
| hoverStatus     | `boolean` | `false` | 是否展示列表项悬浮态 |
| splitLine     | `boolean` | `true`  | 是否展示列表项分割线 |

#### ListItem Slots
| 名称      | 参数 | 说明      |
|---------|----|---------|
| default | () | 列表项展示内容 |
| prefix  | () | 列表项前缀   |
| suffix  | () | 列表项后缀   |


