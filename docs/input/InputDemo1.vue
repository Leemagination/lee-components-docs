<script setup>
import { LeeInput } from "lee-vue3-components";
import { ref } from "vue";

const inputText = ref('')
</script>

<template>
  <div>
    <div>默认</div>
    <LeeInput v-model:value="inputText"></LeeInput>
    <br>
    <div>空文案展示</div>
    <LeeInput placeholder="输入文本" v-model:value="inputText"></LeeInput>
    <br>
    <div>禁用态</div>
    <LeeInput disabled v-model:value="inputText"></LeeInput>
    <br>
    <div>密码显示</div>
    <LeeInput v-model:value="inputText" password></LeeInput>
  </div>
</template>
