<script setup>
import { LeeCheckbox, LeeButton, useMessage } from "lee-vue3-components";
import { ref } from "vue";

const checkboxValue = ref(false)
const disabled = ref(false)

</script>

<template>
  <div>
    <LeeCheckbox v-model:checked="checkboxValue">复选框</LeeCheckbox>
    <LeeCheckbox v-model:checked="checkboxValue"></LeeCheckbox>
    <LeeCheckbox v-model:checked="checkboxValue" :disabled="disabled">复选框</LeeCheckbox>
    <LeeButton @click="disabled=!disabled">禁用</LeeButton>
  </div>
</template>
