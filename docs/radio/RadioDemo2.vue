<script setup>
import { LeeRadio, LeeRadioGroup } from "lee-vue3-components";
import { ref } from "vue";

const value = ref()

const value2 = ref(2)
</script>

<template>
  <div>
    <div>禁用</div>
    <LeeRadio name="myRadio3" :value="1">香蕉</LeeRadio>
    <LeeRadio name="myRadio3" :value="2" disabled>苹果</LeeRadio>
    <LeeRadio name="myRadio3" :value="3">香蕉</LeeRadio>
    <LeeRadio name="myRadio3" :value="4" checked>默认选中</LeeRadio>


    <div>选项组禁用</div>
    <LeeRadioGroup v-model:value="value2" name="myRadio3" disabled>
      <LeeRadio :value="1">香蕉</LeeRadio>
      <LeeRadio :value="2">苹果</LeeRadio>
      <LeeRadio :value="3">香蕉</LeeRadio>
      <LeeRadio :value="4">默认选中</LeeRadio>
    </LeeRadioGroup>
  </div>
</template>
