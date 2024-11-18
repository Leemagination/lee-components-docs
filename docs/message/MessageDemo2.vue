<script setup>
import { setMessageConfig, useMessage, LeeButtonGroup, LeeButton, clearAllMessage } from "lee-vue3-components";

function openDurationMessage() {
  useMessage({
    duration: 5000,
    content: "这里展示5s",
  })
}

function openClosableMessage() {
  useMessage({
    closable: true,
    duration: 0,
    content: "一段信息,hello world,不会自动消失",
  })
}

function configMessage() {
  setMessageConfig({
    maxItem: 10,
    placement: 'bottom'
  })
  useMessage({
    closable: true,
    type: 'error',
    content: "一段信息,hello world",
  })
}

function closeMessage() {
  const { close } = useMessage({
    duration: 0,
    content: '设置一个duration为0的信息,手工5s后关闭'
  })
  setTimeout(() => {
    close()
  }, 5000)
}
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeButton @click="openDurationMessage()">持续5s</LeeButton>
      <LeeButton @click="openClosableMessage()">可关闭的</LeeButton>
      <LeeButton @click="closeMessage()">人工关闭信息</LeeButton>
      <LeeButton @click="configMessage()">全局配置</LeeButton>
      <LeeButton @click="clearAllMessage()">清除所有信息</LeeButton>
    </LeeButtonGroup>
  </div>
</template>
