<script setup>
import { LeeDatePicker } from "lee-vue3-components";
import { ref } from "vue";

const pickerTime = ref()
</script>

<template>
  <div>
    <span>已选时间: {{ pickerTime }}</span>
    <LeeDatePicker v-model:value="pickerTime"></LeeDatePicker>
  </div>
</template>
