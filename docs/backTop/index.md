# 回到顶部 BackTop

点击右下角的一个按钮即可将页面滚动到顶部

### 基础

::: tabs

@tab 演示
请将页面往下滚动,默认显示一个箭头图标
<BackTopDemo1></BackTopDemo1>

@tab vue文件
@[code vue](BackTopDemo1.vue)

:::


### 一些配置项

::: tabs

@tab 演示

请将页面往下滚动
<BackTopDemo2></BackTopDemo2>

@tab vue文件
@[code vue](BackTopDemo2.vue)

:::


### 指定滚动目标

::: tabs

@tab 演示
<BackTopDemo3></BackTopDemo3>

@tab vue文件
@[code vue](BackTopDemo3.vue)

:::



# API
#### BackTop props
| 名称         | 类型        | 默认值         | 说明                           |
|------------|-----------|-------------|------------------------------|
| visibleTop | `number`  | `100`       | 滚动时触发显示回到顶部的高度               |
| bottom     | `number` | `40`        | 是否显示边框                       |
| right      | `number` | `40`        | 是否显示信息图标                     |
| target     | `HTMLElement`  | `undefined` | 监听滚动的元素，如果为 undefined 会监听根元素 |

#### BackTop Slots
| 名称      | 参数 | 说明   |
|---------|----|------|
| default | () | 信息内容 |
