<script setup>
import { LeeLoading } from "lee-vue3-components";
</script>

<template>
  <div>
    <div>基本</div>
    <LeeLoading></LeeLoading>
    <div>增加半径</div>
    <LeeLoading :radius="20"></LeeLoading>
    <div>调整转圈速度</div>
    <LeeLoading :speed="2" :radius="15"></LeeLoading>
    <div>圆圈宽度</div>
    <LeeLoading :width="6" :radius="15"></LeeLoading>
    <div>修改颜色</div>
    <LeeLoading color="green" :radius="10"></LeeLoading>
  </div>
</template>
