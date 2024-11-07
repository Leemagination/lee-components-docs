<script setup>
import { LeeDatePicker } from "lee-vue3-components";
import { ref } from "vue";

const pickerTime = ref(Date.now())
</script>

<template>
  <div>
    <p>可清除的</p>
    <LeeDatePicker clearable v-model:value="pickerTime"></LeeDatePicker>
    <p>禁用态</p>
    <LeeDatePicker disabled v-model:value="pickerTime"></LeeDatePicker>
  </div>
</template>
