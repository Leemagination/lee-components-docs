# 抽屉  Drawer

页面侧边多出来的展示内容

### 基础

::: tabs

@tab 演示
<DrawerDemo1></DrawerDemo1>

@tab vue文件
@[code vue](./DrawerDemo1.vue)

:::

### 配置项
::: tabs

@tab 演示
<DrawerDemo2></DrawerDemo2>

@tab vue文件
@[code vue](./DrawerDemo2.vue)

:::


# API
#### Drawer props
| 名称         | 类型                                       | 默认值     | 说明         |
|------------|------------------------------------------|---------|------------|
| placement     | `'right' \| 'top' \| 'bottom' \| 'left'` | `right` | 抽屉出现的位置    |
| title     | `string \| VNode \| Component`           | `''`    | 抽屉标题       |
| content     | `string \| VNode \| Component`           | `''`    | 抽屉内容       |
| maskClosable     | `boolean`                                | `''`    | 蒙层是否可点击    |
| showClose     | `boolean`                                | `''`    | 是否展示关闭图标   |
| size     | `string \| number`                       | `null`  | 控制抽屉的宽度或高度 |
| handleClosed     | `Function`                               | `null`  | 抽屉关闭的回调函数  |
