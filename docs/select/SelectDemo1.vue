<script setup>
import { LeeSelect } from "lee-vue3-components";
import { ref } from "vue";

const options = ref([
  {
    text: '选项1',
    value: 1
  },
  {
    text: '选项2',
    value: 2
  },
  {
    text: '选项3',
    value: 3
  },
  {
    text: '选项4',
    value: 4
  }
])

const value = ref()
</script>

<template>
  <div>
    <div>选择的值:{{ value }}</div>
    <LeeSelect :options="options" v-model:value="value"></LeeSelect>
  </div>
</template>
