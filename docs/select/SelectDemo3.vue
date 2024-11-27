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
    text: '选项3长长长长的文案长长的文案',
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
    <div>默认文案</div>
    <LeeSelect :options="options" v-model:value="value" placeholder="自定义文本"></LeeSelect>
    <div>禁用状态</div>
    <LeeSelect :options="options" v-model:value="value" disabled></LeeSelect>
    <div>可清空的</div>
    <LeeSelect :options="options" v-model:value="value" clearable></LeeSelect>
    <div>下拉框宽度</div>
    <LeeSelect :options="options" v-model:value="value" :same-width="false"></LeeSelect>
  </div>
</template>
