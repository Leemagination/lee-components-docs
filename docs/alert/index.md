# 警告信息 Alert

在页面指定位置高亮一段文本，用于吸引用户的注意

### 基础

::: tabs

@tab 演示
不同类型的警告信息
<AlertDemo1></AlertDemo1>

@tab vue文件
@[code vue](AlertDemo1.vue)

:::


### 其他配置项

::: tabs

@tab 演示
不同配置项对应的样子
<AlertDemo2></AlertDemo2>

@tab vue文件
@[code vue](AlertDemo2.vue)

:::

### 可移除的信息

::: tabs

@tab 演示
增加了一个删除图标,点击后移除组件
<AlertDemo3></AlertDemo3>

@tab vue文件
@[code vue](AlertDemo3.vue)

:::


# API
#### Alert props
| 名称       | 类型                                            | 默认值   | 说明         |
|----------|-----------------------------------------------|-------|------------|
| type     | `'info' \| 'success' \| 'warning' \| 'error'` | `info` | 信息类型，显示不同的样式 |
| border   | `boolean`                                     | `true` | 是否显示边框     |
| showIcon | `boolean`                                     | `false` | 是否显示信息图标   |
| title    | `string`                                      | `''` | 信息的标题      |
| closable | `boolean`                                     | `false` | 是否显示删除图标   |

#### Alert Slots
| 名称      | 参数 | 说明   |
|---------|----|------|
| default | () | 信息内容 |
