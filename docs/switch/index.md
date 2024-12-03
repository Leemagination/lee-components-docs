# 开关 Switch

用来展示是或否的最佳组件

::: tabs

@tab 演示
<SwitchDemo1></SwitchDemo1>

@tab vue文件
@[code vue](SwitchDemo1.vue)

:::

# API
#### Switch props
| 名称    | 类型        | 默认值         | 说明    |
|-------|-----------|-------------|-------|
| value | `boolean` | `false`     | 开关的值  |
| activeText | `string`  | `''`        | 激活的文本 |
| closeText | `string` | `''`        | 关闭的文本 |
| loading | `boolean` | `false`     | 是否加载中 |
| disabled | `boolean` | `false`     | 是否禁用  |
| onClick | `(e: MouseEvent) => void` | `undefined` | 点击回调  |

