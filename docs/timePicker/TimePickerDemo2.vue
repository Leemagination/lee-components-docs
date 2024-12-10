<script setup>
import { LeeTimePicker } from "lee-vue3-components";
import { ref } from "vue";

const time = ref(null)
</script>

<template>
  <div>
    <div>默认文案</div>
    <LeeTimePicker v-model:value="time" placeholder="自定义文本"></LeeTimePicker>
    <div>可清空</div>
    <LeeTimePicker v-model:value="time" clearable></LeeTimePicker>
    <div>禁用态</div>
    <LeeTimePicker v-model:value="time" disabled></LeeTimePicker>
  </div>
</template>
