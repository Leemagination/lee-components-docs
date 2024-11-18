<script setup>
import { useMessage, LeeButtonGroup, LeeButton } from "lee-vue3-components";

function openMessage(type) {
  useMessage({
    content: "这是一段信息,biubiubiu",
    type
  })
}
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeButton @click="openMessage()">普通</LeeButton>
      <LeeButton @click="openMessage('info')">info信息</LeeButton>
      <LeeButton @click="openMessage('success')">success信息</LeeButton>
      <LeeButton @click="openMessage('warning')">warning信息</LeeButton>
      <LeeButton @click="openMessage('error')">error信息</LeeButton>
    </LeeButtonGroup>
  </div>
</template>
