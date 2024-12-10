<script setup>
import { LeeTimePicker } from "lee-vue3-components";
import { ref } from "vue";

const time = ref(null)
</script>

<template>
  <div>
    <div>时间: {{ time }}</div>
    <LeeTimePicker v-model:value="time"></LeeTimePicker>
  </div>
</template>
