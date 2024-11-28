<script setup>
import { LeeSteps, LeeStep, LeeInputNumber } from "lee-vue3-components";
import { ref } from "vue";

const value = ref(2)
</script>

<template>
  <div>
    <span>当前步骤</span>
    <LeeInputNumber :min="0" :max="5" v-model:value="value"></LeeInputNumber>
    <br>
    <LeeSteps :current="value" direction="horizontal">
      <LeeStep title="第一步" content="描述1111"></LeeStep>
      <LeeStep title="第二步" content="描述222"></LeeStep>
      <LeeStep title="第三步" content="描述3333"></LeeStep>
      <LeeStep title="第四步" content="描述4 hello world biubiu"></LeeStep>
    </LeeSteps>
  </div>
</template>
