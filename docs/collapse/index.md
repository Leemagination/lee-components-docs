# 折叠面板  Collapse

折叠大段的文字，将页面空间让给其他更核心的内容

### 基础

::: tabs

@tab 演示
<CollapseDemo1></CollapseDemo1>

@tab vue文件
@[code vue](CollapseDemo1.vue)

:::

### 手风琴模式

::: tabs

@tab 演示
<CollapseDemo2></CollapseDemo2>

@tab vue文件
@[code vue](CollapseDemo2.vue)

:::

# API
#### CollapseItem props
| 名称         | 类型        | 默认值      | 说明         |
|------------|-----------|----------|------------|
| title     | `string`  | `''`     | 折叠项标题      |
| name     | `string`  | `Symbol` | 折叠项的唯一name |
| defaultExpanded     | `boolean` | `false`  | 是否默认展开     |

#### Collapse props
| 名称         | 类型        | 默认值       | 说明      |
|------------|-----------|-----------|---------|
| accordion     | `boolean` | `false`   | 是否手风琴模式 |
