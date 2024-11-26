<script setup>
import { LeeRate } from "lee-vue3-components";
import { ref } from "vue";

const rateValue = ref(3)
</script>

<template>
  <div>
    <div>分值: {{ rateValue }}</div>
    <LeeRate v-model:value="rateValue"></LeeRate>
    <div>个数</div>
    <LeeRate v-model:value="rateValue" :count="10"></LeeRate>
  </div>
</template>
