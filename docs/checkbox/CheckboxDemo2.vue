<script setup>
import { LeeCheckbox, LeeCheckboxGroup } from "lee-vue3-components";
import { ref } from "vue";

const groupValue = ref(['苹果', '香蕉'])

</script>

<template>
  <div>
    <div>
      已选中的: {{ groupValue.join(',') }}
    </div>
    <LeeCheckboxGroup v-model:value="groupValue">
      <LeeCheckbox value="香蕉">香蕉</LeeCheckbox>
      <LeeCheckbox value="椰子">椰子</LeeCheckbox>
      <LeeCheckbox value="苹果">苹果</LeeCheckbox>
      <LeeCheckbox value="水蜜桃">水蜜桃</LeeCheckbox>
      <LeeCheckbox value="芒果">芒果</LeeCheckbox>
    </LeeCheckboxGroup>
    <LeeCheckboxGroup v-model:value="groupValue" disabled>
      <LeeCheckbox value="香蕉">香蕉</LeeCheckbox>
      <LeeCheckbox value="椰子">椰子</LeeCheckbox>
      <LeeCheckbox value="苹果">苹果</LeeCheckbox>
      <LeeCheckbox value="水蜜桃">水蜜桃</LeeCheckbox>
      <LeeCheckbox value="芒果">芒果</LeeCheckbox>
    </LeeCheckboxGroup>
  </div>
</template>
