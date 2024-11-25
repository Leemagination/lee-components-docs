<script setup>
import { LeeProgress, LeeSlider } from "lee-vue3-components";
import { ref } from "vue";

const percent1 = ref(10)
const percent2 = ref(30)
const percent3 = ref(50)
const percent4 = ref(70)
</script>

<template>
  <div>
    <div>百分比: {{ percent1 }}</div>
    <LeeSlider v-model:value="percent1"></LeeSlider>
    <LeeProgress :percent="percent1"></LeeProgress>
    <LeeProgress :percent="100" status="normal"></LeeProgress>
    <LeeProgress :percent="percent2" status="success"></LeeProgress>
    <LeeProgress :percent="percent3" status="warning"></LeeProgress>
    <LeeProgress :percent="percent4" status="error"></LeeProgress>
    <LeeProgress type="circle" :percent="percent1"></LeeProgress>
    <LeeProgress type="circle" :percent="percent2" status="success"></LeeProgress>
    <LeeProgress type="circle" :percent="percent3" status="warning"></LeeProgress>
    <LeeProgress type="circle" :percent="percent4" status="error"></LeeProgress>
  </div>
</template>
