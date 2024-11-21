# 弹出确认 Popconfirm

加了两个按钮的弹出框

::: tabs

@tab 演示
<PopconfirmDemo1></PopconfirmDemo1>

@tab vue文件
@[code vue](PopconfirmDemo1.vue)

:::

# API
#### Popconfirm props
| 名称               | 类型                                   | 默认值     | 说明        |
|------------------|--------------------------------------|---------|-----------|
| placement        | `PlacementType`                      | `top`   | 弹出选择的位置   |
| disabled         | `boolean`                            | `false` | 是否禁用弹出    |
| showArrow        | `boolean`                            | `true`  | 是否展示箭头    |
| trigger          | `click\|hover`                       | `click` | 触发弹出选择的方式 |
| confirmText      | `string`                             | `确认`    | 确认按钮文本    |
| cancelText       | `string`                             | `取消`    | 取消按钮文本    |
| on-confirm-click | `() => boolean \| Promise<boolean> ` | `null`  | 确认点击回调方法  |
| on-cancel-click  | `() => boolean \| Promise<boolean> ` | `null`  | 取消点击回调方法  |

### Popconfirm Slots
| 名称      | 参数 | 说明                    |
|---------|----|-----------------------|
| default | () | 弹出文本内容                |
| trigger | () | 弹出的触发器,需要支持click事件的元素 |

### PlacementType类型

| 值        | 说明     |
|----------|--------|
| top      | 上方居中   |
| top-start      | 上方头部对齐 |
| top-end | 上方尾部对齐 |
| right | 右侧居中   |
| right-start | 右侧头部对齐 |
| right-end | 右侧尾部对齐 |
| bottom | 底部居中   |
| bottom-start | 底部头部对齐 |
| bottom-end | 底部尾部对齐 |
| left| 左侧     |
| left-start| 左侧头部对齐 |
| left-end| 左侧尾部对齐 |

