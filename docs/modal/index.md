# 弹窗 Modal

直接让用户把注意力放在弹窗上。命令式生成弹窗

### 基础

::: tabs

@tab 演示
<ModalDemo1></ModalDemo1>

@tab vue文件
@[code vue](ModalDemo1.vue)

:::


### 其他配置

::: tabs

@tab 演示
<ModalDemo2></ModalDemo2>

@tab vue文件
@[code vue](ModalDemo2.vue)

:::

# API
#### useModal params
| 名称           | 类型                           | 默认值         | 说明         |
|--------------|------------------------------|-------------|------------|
| title        | `string\| Component\| VNode` | `''`        | 弹窗标题文本     |
| content      | `string\| Component\| VNode` | `''`        | 弹窗内容文本     |
| showConfirm  | `boolean`                    | `false`     | 是否展示确认按钮   |
| showCancel   | `boolean`                    | `false`     | 是否展示取消按钮   |
| confirmText  | `string`                     | `确认`        | 确认按钮文本     |
| cancelText   | `string`                     | `取消`        | 取消按钮文本     |
| maskClosable | `boolean`                    | `true`      | 是否点击蒙层关闭弹窗 |
| showClose    | `boolean`                    | `true`      | 是否展示关闭图标   |
| zIndex       | `number`                     | `undefined` | 弹窗的层级      |
| modalStyle   | `StyleValue`                 | `undefined` | 弹窗样式       |
| handleClosed | `() => void`                 | `undefined` | 弹窗关闭回调     |
| handleConfirm | `() => void`                 | `undefined` | 弹窗点击确认按钮回调 |
| handleCancel | `() => void`                 | `undefined` | 弹窗点击取消按钮回调 |

