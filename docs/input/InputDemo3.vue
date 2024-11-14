<script setup>
import { LeeTextarea } from "lee-vue3-components";
import { ref } from "vue";

const textareaText = ref('')

const longText = ref(Array(50).fill('很长的一段文本').join(''))
</script>

<template>
  <div>
    <LeeTextarea
      v-model:value="textareaText"
      :limit="100"
    >
    </LeeTextarea>
    <br>
    <LeeTextarea
      v-model:value="textareaText"
      placeholder="多行文本框输入"
      show-count show-clear
      :limit="50">
    </LeeTextarea>
    <br>
    <LeeTextarea
      style="width: 300px"
      v-model:value="longText"
      placeholder="最小显示3行,最大显示7行"
      :auto-size="{minRows:3,maxRows:7}">
    </LeeTextarea>
  </div>
</template>
