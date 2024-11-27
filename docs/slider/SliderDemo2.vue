<script setup>
import { LeeSlider } from "lee-vue3-components";
import { ref } from "vue";

const value = ref([20, 80])
</script>

<template>
  <div>
    <div>分值: {{ value }}</div>
    <LeeSlider v-model:value="value" range></LeeSlider>
  </div>
</template>
