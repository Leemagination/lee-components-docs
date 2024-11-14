<script setup>
import { LeeInput } from "lee-vue3-components";
import { ref } from "vue";

const inputText = ref('')
</script>

<template>
  <div>
    <div>输入框前后增加文案展示</div>
    <LeeInput addon-before="前缀" addon-after="后缀" v-model:value="inputText"></LeeInput>
    <br>
    <LeeInput prefix="小前缀" suffix="小后缀" v-model:value="inputText"></LeeInput>
    <LeeInput v-model:value="inputText">
      <template #addonBefore>
        <div style="color: red">插槽</div>
      </template>
    </LeeInput>
    <br><br>
    <div>无边框</div>
    <LeeInput :bordered="false" v-model:value="inputText"></LeeInput>
    <br>
    <div>展示输入字符数和清除图标</div>
    <LeeInput show-clear show-count v-model:value="inputText"></LeeInput>
    <br>
    <div>限制输入数</div>
    <LeeInput show-count :limit="10"></LeeInput>
  </div>
</template>
