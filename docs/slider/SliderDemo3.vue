<script setup>
import { LeeSlider } from "lee-vue3-components";
import { ref } from "vue";

const value = ref(10)
const range = ref([20, 40])
</script>

<template>
  <div>
    <h5>步长</h5>
    <div>分值: {{ value }}</div>
    <LeeSlider v-model:value="value" :step="10"></LeeSlider>
    <div>分值: {{ range }}</div>
    <LeeSlider v-model:value="range" :step="10" range></LeeSlider>
    <h5>禁用</h5>
    <div>分值: {{ value }}</div>
    <LeeSlider v-model:value="value" disabled></LeeSlider>
    <div>分值: {{ range }}</div>
    <LeeSlider v-model:value="range" disabled range></LeeSlider>
    <h5>限制大小</h5>
    <div>分值: {{ value }}</div>
    <LeeSlider v-model:value="value" :min="10" :max="70"></LeeSlider>
    <div>分值: {{ range }}</div>
    <LeeSlider v-model:value="range" range :min="10" :max="70"></LeeSlider>
  </div>
</template>
