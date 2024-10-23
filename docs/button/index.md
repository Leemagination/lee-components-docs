# 按钮 Button

最普通的按钮组件

### 基础

::: tabs

@tab 演示
不同类型的按钮，主要是颜色不同，稍微加了点击的波纹效果
<ButtonDemo1></ButtonDemo1>

@tab vue文件
@[code vue](ButtonDemo1.vue)

:::

### 按钮的其他状态
::: tabs

@tab 演示
给按钮加些不同的状态
<ButtonDemo2></ButtonDemo2>

@tab vue文件
@[code vue](ButtonDemo2.vue)

:::

### 按钮点击事件
::: tabs

@tab 演示
<ButtonDemo3></ButtonDemo3>

@tab vue文件
@[code vue](ButtonDemo3.vue)

:::

### 按钮组
::: tabs
@tab 演示
稍微处理下按钮之间的间距
<ButtonDemo4></ButtonDemo4>

@tab vue文件
@[code vue](ButtonDemo4.vue)

:::

# API
#### Button props
| 名称       | 类型                                                           | 默认值         | 说明              |
|----------|--------------------------------------------------------------|-------------|-----------------|
| type     | `'default' \| 'primary' \| 'danger' \| 'wrong' \| 'success'` | `default`   | 按钮的类型，显示不同的颜色   |
| size     | `'small' \| 'middle' \|'large'`                              | `middle`    | 按钮的尺寸           |
| disabled | `boolean`                                                    | `false`     | 按钮是否禁用          |
| dash     | `boolean`                                                    | `false`     | 按钮是否显示虚线        |
| ghost    | `boolean`                                                    | `false`     | 按钮是否显示幽灵态       |
| loading  | `boolean`                                                    | `false`     | 按钮是否显示loading图标 |
| onClick  | `(e: MouseEvent) => void`                                                    | `undefined` | 按钮点击回调函数        |
