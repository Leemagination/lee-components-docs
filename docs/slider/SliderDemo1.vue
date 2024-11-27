<script setup>
import { LeeSlider } from "lee-vue3-components";
import { ref } from "vue";

const value = ref(10)
</script>

<template>
  <div>
    <div>分值: {{ value }}</div>
    <LeeSlider v-model:value="value"></LeeSlider>
  </div>
</template>
