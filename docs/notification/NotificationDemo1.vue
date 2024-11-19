<script setup>
import { useNotification, LeeButton } from "lee-vue3-components";

function openNotification() {
  useNotification({
    title: '标题',
    meta: "底部信息",
    description: "详细描述信息",
    content: Array(20).fill('正文内容文本').join(' ')
  })
}
</script>

<template>
  <div>
    <LeeButton @click="openNotification">打开</LeeButton>
  </div>
</template>
