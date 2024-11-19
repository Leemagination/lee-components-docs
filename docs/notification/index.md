# 通知  Notification

通常是在角落出现的信息。命令式生成通知

### 基础

::: tabs

@tab 演示
<NotificationDemo1></NotificationDemo1>

@tab vue文件
@[code vue](NotificationDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<NotificationDemo2></NotificationDemo2>

@tab vue文件
@[code vue](NotificationDemo2.vue)

:::

# API
#### useNotification params
| 名称         | 类型                              | 默认值    | 说明         |
|------------|---------------------------------|--------|------------|
| title        | `string\| Component\| VNode` | `''`   | 通知标题       |
| description      | `string\| Component\| VNode` | `''`   | 通知描述文本     |
| content      | `string\| Component\| VNode` | `''`   | 通知内容文本     |
| meta      | `string\| Component\| VNode` | `''`   | 通知底部文本     |
| duration     | `number`                        | `0`    | 通知停留时间(ms) |
| closable     | `boolean`                       | `true` | 是否展示关闭按钮   |

#### setNotificationConfig params
| 名称         | 类型              | 默认值         | 说明         |
|------------|-----------------|-------------|------------|
| maxItem     | `number`        | `5`         | 最多展示通知条数   |
| duration     | `number`        | `3000`      | 通知停留时间(ms) |
| placement     | `PlacementType` | `undefined` | 通知展示位置     |


### PlacementType类型

| 值            | 说明   |
|--------------|------|
| top          | 上方居中 |
| top-left     | 上方左侧 |
| top-right    | 上方右侧 |
| bottom       | 底部居中 |
| bottom-left  | 底部左侧 |
| bottom-right | 底部右侧 |
