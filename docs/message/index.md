# 信息 Message

浮层展示的信息,让用户更容易接收到重要的信息。命令式用法

### 基础

::: tabs

@tab 演示
<MessageDemo1></MessageDemo1>

@tab vue文件
@[code vue](MessageDemo1.vue)

:::

### 其他配置

::: tabs

@tab 演示
<MessageDemo2></MessageDemo2>

@tab vue文件
@[code vue](MessageDemo2.vue)

:::

# API
#### useMessage params
| 名称         | 类型                              | 默认值         | 说明         |
|------------|---------------------------------|-------------|------------|
| content     | `string`                        | `''`        | 信息内容       |
| duration     | `number`                        | `3000`      | 信息停留时间(ms) |
| type     | `info\|success\|warning\|error` | `undefined` | 信息类型       |
| closable     | `boolean`                       | `false`     | 是否展示关闭按钮   |

#### setMessageConfig params
| 名称         | 类型              | 默认值         | 说明         |
|------------|-----------------|-------------|------------|
| maxItem     | `number`        | `5`         | 最多展示信息条数   |
| duration     | `number`        | `3000`      | 信息停留时间(ms) |
| placement     | `PlacementType` | `undefined` | 信息展示位置     |


### PlacementType类型

| 值            | 说明   |
|--------------|------|
| top          | 上方居中 |
| top-left     | 上方左侧 |
| top-right    | 上方右侧 |
| bottom       | 底部居中 |
| bottom-left  | 底部左侧 |
| bottom-right | 底部右侧 |
