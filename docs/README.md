---
title: 简介
---

## 概述

lee-vue3-components是一个以学习为主要目的的vue3组件库，目前有36个组件  

组件都是用typescript以jsx的形式编写，使用时用import方式引入组件且不用手动引入css文件

github地址: [https://github.com/Leemagination/vue3-components](https://github.com/Leemagination/vue3-components)


## 组件
现有36个组件，本文档每个组件的展示都带有使用时的代码写法  
按组件开发的角度分为以下4类

#### **简单组件**
每个组件都是可以独立编写的，基本无需先开发公共功能。样式较为简单且开发的难度也不算大

#### **浮层组件**
此类组件都需要先开发出一个能动态插入body节点的浮层遮罩能力，并且把内容展现在遮罩上，且内容展示的位置和触发浮层的元素的位置有关联。而且每个新打开的浮层的层级要比上一个高

#### **命令式组件**
此类组件也是浮层组件，但是需要用命令式调用而不是声明式组件。命令式调用都是生成新的实例，无需担心数据的重置问题

#### **复杂组件**
此类组件一般是逻辑复杂，会根据props进行各种条件判断，或者展示不同的样式内容，有一定的开发难度
