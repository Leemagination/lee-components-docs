<script setup>
import { LeeSwitch } from "lee-vue3-components";
import { ref } from "vue";

const value = ref(false)
</script>

<template>
  <div>
    <div>开关值:{{ value }}</div>
    <LeeSwitch v-model:value="value"></LeeSwitch>
    <div>文本</div>
    <LeeSwitch v-model:value="value" active-text="开" close-text="关"></LeeSwitch>
    <div>加载中</div>
    <LeeSwitch v-model:value="value" loading></LeeSwitch>
    <div>禁用</div>
    <LeeSwitch v-model:value="value" disabled></LeeSwitch>
  </div>
</template>
