<script setup>
import { LeeBackTop } from "lee-vue3-components";

</script>

<template>
  <div>
    <LeeBackTop right="130" bottom="200">距离右边130px</LeeBackTop>
    <LeeBackTop bottom="100">距离底部100px</LeeBackTop>
    <LeeBackTop :visible-top="400" bottom="150">距离顶部400px才显示</LeeBackTop>
    <LeeBackTop :visible-top="0" right="100">一直显示</LeeBackTop>
  </div>
</template>

<style scoped>
.container {
  overflow: auto;
  height: 800px;
}
</style>
