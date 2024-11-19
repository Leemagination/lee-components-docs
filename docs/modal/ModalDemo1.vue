<script setup>
import { useModal, LeeButton, LeeButtonGroup } from "lee-vue3-components";

function openModal() {
  useModal({
    title: '标题',
    content: "弹窗内容,一段文本一段文本一段文本",
  })
}

function openModal2() {
  useModal({
    title: '标题',
    content: "弹窗内容,一段文本一段文本一段文本",
    showConfirm: true,
    showCancel: true
  })
}
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeButton @click="openModal">打开</LeeButton>
      <LeeButton @click="openModal2">有按钮</LeeButton>
    </LeeButtonGroup>
  </div>
</template>
