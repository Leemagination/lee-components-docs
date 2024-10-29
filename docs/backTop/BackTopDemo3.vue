<script setup>
import { LeeBackTop } from "lee-vue3-components";
import { ref } from "vue";

const longText = Array(300).fill('可以滚动的文本').join('')

const scrollRef = ref(null)
</script>

<template>
  <div class="container" ref="scrollRef">
    <LeeBackTop :target="scrollRef" bottom="200">指定目标</LeeBackTop>
    <div>{{ longText }}</div>
  </div>
</template>

<style scoped>
.container {
  overflow: auto;
  height: 800px;
}
</style>
