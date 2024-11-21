# 弹出信息 Popover

有一段文本的弹出框


::: tabs

@tab 演示
<PopoverDemo1></PopoverDemo1>

@tab vue文件
@[code vue](PopoverDemo1.vue)

:::

# API
#### Popover props
| 名称               | 类型              | 默认值     | 说明                       |
|------------------|-----------------|---------|--------------------------|
| placement        | `PlacementType` | `top`   | 弹出选择的位置                  |
| disabled         | `boolean`       | `false` | 是否禁用弹出                   |
| showArrow        | `boolean`       | `true`  | 是否展示箭头                   |
| trigger          | `click\|hover`  | `click` | 触发弹出选择的方式                |
| popoverOnHover          | `boolean`       | `true`  | 悬浮方式下,鼠标悬浮在弹出信息是否仍显示弹出信息 |

### Popover Slots
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
