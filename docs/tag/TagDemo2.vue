<script setup>
import { LeeTag, useMessage } from "lee-vue3-components";
import { ref } from "vue";

const checkValue = ref(true)

function handleClose() {
  useMessage({
    content: '点击了关闭'
  })
}

</script>

<template>
  <div>
    <div>可关闭</div>
    <LeeTag closable @close="handleClose">可关闭</LeeTag>
    <div>可选择的 - 值 {{ checkValue }}</div>
    <LeeTag selectable v-model:checked="checkValue">可选择</LeeTag>
  </div>
</template>
