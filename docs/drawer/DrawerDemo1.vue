<script setup>
import { LeeButtonGroup, LeeButton, useDrawer } from "lee-vue3-components";

function openDrawer(placement) {
  useDrawer({
    placement: placement,
    title: '抽屉标题',
    content: '抽屉内容,hello world,抽屉内容,hello world,抽屉内容,hello world'
  })
}


</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeButton @click="openDrawer">打开抽屉</LeeButton>
      <LeeButton @click="openDrawer('left')">左边抽屉</LeeButton>
      <LeeButton @click="openDrawer('top')">顶部抽屉</LeeButton>
      <LeeButton @click="openDrawer('bottom')">底部抽屉</LeeButton>
    </LeeButtonGroup>
  </div>
</template>
