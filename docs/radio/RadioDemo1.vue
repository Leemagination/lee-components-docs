<script setup>
import { LeeRadio, LeeRadioGroup } from "lee-vue3-components";
import { ref } from "vue";

const value = ref()

const value2 = ref(2)
</script>

<template>
  <div>
    <div>选中值: {{ value }}</div>
    <LeeRadio name="myRadio" :value="1" @change="value=$event">香蕉</LeeRadio>
    <LeeRadio name="myRadio" :value="2" @change="value=$event">苹果</LeeRadio>
    <LeeRadio name="myRadio" :value="3" @change="value=$event">香蕉</LeeRadio>

    <div>选项组: {{ value2 }}</div>
    <LeeRadioGroup v-model:value="value2" name="myRadio2">
      <LeeRadio :value="1">香蕉</LeeRadio>
      <LeeRadio :value="2">苹果</LeeRadio>
      <LeeRadio :value="3">香蕉</LeeRadio>
    </LeeRadioGroup>
  </div>
</template>
