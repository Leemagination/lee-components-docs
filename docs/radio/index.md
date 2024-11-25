# 单选 Radio

只能选一个

### 基础

::: tabs

@tab 演示
<RadioDemo1></RadioDemo1>

@tab vue文件
@[code vue](RadioDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<RadioDemo2></RadioDemo2>

@tab vue文件
@[code vue](RadioDemo2.vue)

:::

# API
#### Radio props
| 名称         | 类型                 | 默认值         | 说明          |
|------------|--------------------|-------------|-------------|
| checked     | `boolean`          | `false`     | 单选是否默认选中    |
| value     | `string \| number` | `undefined` | 单选的值        |
| disabled     | `boolean`          | `false`     | 是否禁用状态      |
| name     | `string`           | `undefined` | 单选名称，用于选项归类 |

#### RadioGroup props
| 名称         | 类型                 | 默认值         | 说明           |
|------------|--------------------|-------------|--------------|
| value     | `string \| number` | `undefined` | 单选组的值        |
| disabled     | `boolean`          | `false`     | 是否禁用状态       |
| name     | `string`           | `undefined` | 单选组名称，用于选项归类 |

