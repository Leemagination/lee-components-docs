<script setup>
import { LeeRate } from "lee-vue3-components";
import { ref } from "vue";

const rateValue = ref(3)
const rateValue2 = ref(1.5)
</script>

<template>
  <div>
    <div>内置图标</div>
    <LeeRate v-model:value="rateValue" icon-type="fire"></LeeRate>
    <br>
    <LeeRate v-model:value="rateValue" icon-type="heart"></LeeRate>
    <br>
    <LeeRate v-model:value="rateValue" icon-type="cup"></LeeRate>
    <div>可重置的</div>
    <LeeRate v-model:value="rateValue" clearable></LeeRate>
    <div>可半分</div>
    <LeeRate v-model:value="rateValue2" allow-half></LeeRate>
    <div>自定义颜色</div>
    <LeeRate v-model:value="rateValue2" allow-half color="pink"></LeeRate>
    <div>可自定字符</div>
    <LeeRate v-model:value="rateValue2" allow-half>囍</LeeRate>
    <div>只可读</div>
    <LeeRate v-model:value="rateValue2" allow-half readonly></LeeRate>
  </div>
</template>
