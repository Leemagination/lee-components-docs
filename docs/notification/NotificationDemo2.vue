<script setup>
import {
  useNotification,
  LeeButton,
  clearAllNotification,
  setNotificationConfig,
  LeeButtonGroup
} from "lee-vue3-components";
import Title from "./Title.vue";
import Content from "./Content.vue";

function openNotification() {
  useNotification({
    title: '标题',
    meta: "底部信息",
    description: "详细描述信息",
    duration: 3000,
    closable: false,
    content: Array(20).fill('正文内容文本').join(' ')
  })
}

function openNotification2() {
  useNotification({
    title: Title,
    meta: "底部信息",
    description: "详细描述信息",
    content: Content
  })
}

function openNotification3() {
  setNotificationConfig({
    placement: 'bottom-left',
    maxItem: 4
  })
  useNotification({
    title: '标题',
    content: '已改变消息位置'
  })
}
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeButton @click="openNotification">3s自动关闭</LeeButton>
      <LeeButton @click="openNotification2">传入组件</LeeButton>
      <LeeButton @click="openNotification3">设置通知位置</LeeButton>
      <LeeButton @click="clearAllNotification">清除所有通知</LeeButton>
    </LeeButtonGroup>
  </div>
</template>
