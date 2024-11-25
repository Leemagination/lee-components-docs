<script setup>
import { LeeProgress, LeeSlider } from "lee-vue3-components";
import { ref } from "vue";

const percent1 = ref(10)

</script>

<template>
  <div>
    <div>百分比: {{ percent1 }}</div>
    <LeeSlider v-model:value="percent1"></LeeSlider>
    <div>进度条宽度</div>
    <LeeProgress :percent="percent1" :width="16"></LeeProgress>
    <div>圆圈半径和宽度</div>
    <LeeProgress type="circle" :percent="percent1" :radius="30" :width="12"></LeeProgress>
    <div>不展示数值</div>
    <LeeProgress :percent="percent1" :width="16" :show-value="false"></LeeProgress>
    <LeeProgress type="circle" :percent="percent1" :show-value="false" :width="12"></LeeProgress>
    <div>渐变</div>
    <LeeProgress
      :percent="percent1"
      :width="16"
      :show-value="false"
      gradient="linear-gradient(to right,yellow,pink)">
    </LeeProgress>
    <div>定制颜色</div>
    <LeeProgress :percent="percent1" status="success" :color-config="{success:'pink'}"></LeeProgress>
    <LeeProgress :percent="percent1" status="warning" :color-config="{warning:'purple'}"></LeeProgress>
    <LeeProgress :percent="percent1" status="error" :color-config="{error:'gray'}"></LeeProgress>
  </div>
</template>
