# 步骤 Steps

用于展示一些节点的进度

### 垂直方向

::: tabs

@tab 演示
<StepsDemo1></StepsDemo1>

@tab vue文件
@[code vue](StepsDemo1.vue)

:::

### 水平方向

::: tabs

@tab 演示
<StepsDemo2></StepsDemo2>

@tab vue文件
@[code vue](StepsDemo2.vue)

:::

### 其他配置

::: tabs

@tab 演示
<StepsDemo3></StepsDemo3>

@tab vue文件
@[code vue](StepsDemo3.vue)

:::

# API
#### Steps props
| 名称         | 类型                           | 默认值        | 说明         |
|------------|------------------------------|------------|------------|
| current     | `number`                     | `0`        | 步骤处于第几步    |
| direction     | `'vertical' \| 'horizontal'` | `vertical` | 步骤的展示方向    |
| position     | `'left' \| 'right'`             | `right`    | 垂直方向下文本的位置 |

#### Step props
| 名称       | 类型                                                        | 默认值         | 说明         |
|----------|-----------------------------------------------------------|-------------|------------|
| title    | `string`                                                  | `''`        | 步骤的标题      |
| content  | `string`                                                  | `''`        | 步骤的描述      |
| status  | `'default' \| 'undo' \| 'process' \| 'finish' \| 'error'` | `'default'` | 步骤的状态      |
| position | `'left' \| 'right'`                                       | `right`     | 垂直方向下文本的位置 |
| onClick | `(e: MouseEvent) => void`                                 | `undefined` | 点击回调       |
