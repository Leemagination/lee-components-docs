<script setup>
import { LeeButton } from "lee-vue3-components";

</script>

<template>
  <div>
    <p>虚线按钮</p>
    <div class="button-demo">
      <LeeButton dash>default</LeeButton>
      <LeeButton dash type="primary">primary</LeeButton>
      <LeeButton dash type="danger">danger</LeeButton>
      <LeeButton dash type="wrong">wrong</LeeButton>
      <LeeButton dash type="success">success</LeeButton>
    </div>
    <p>幽灵态</p>
    <div class="button-demo color-bg">
      <LeeButton ghost>default</LeeButton>
      <LeeButton ghost type="primary">primary</LeeButton>
      <LeeButton ghost type="danger">danger</LeeButton>
      <LeeButton ghost type="wrong">wrong</LeeButton>
      <LeeButton ghost type="success">success</LeeButton>
    </div>
    <p>禁用态</p>
    <div class="button-demo">
      <LeeButton disabled>default</LeeButton>
      <LeeButton disabled type="primary">primary</LeeButton>
      <LeeButton disabled type="danger">danger</LeeButton>
      <LeeButton disabled type="wrong">wrong</LeeButton>
      <LeeButton disabled type="success">success</LeeButton>
    </div>
    <p>加载态</p>
    <div class="button-demo">
      <LeeButton loading>default</LeeButton>
      <LeeButton loading type="primary">primary</LeeButton>
      <LeeButton loading type="danger">danger</LeeButton>
      <LeeButton loading type="wrong">wrong</LeeButton>
      <LeeButton loading type="success">success</LeeButton>
    </div>
    <p>按钮尺寸</p>
    <div class="button-demo">
      <LeeButton size="small">default</LeeButton>
      <LeeButton size="small" type="primary">primary</LeeButton>
      <LeeButton size="small" type="danger">danger</LeeButton>
      <LeeButton size="small" type="wrong">wrong</LeeButton>
      <LeeButton size="small" type="success">success</LeeButton>
      <br><br>
      <LeeButton size="large">default</LeeButton>
      <LeeButton size="large" type="primary">primary</LeeButton>
      <LeeButton size="large" type="danger">danger</LeeButton>
      <LeeButton size="large" type="wrong">wrong</LeeButton>
      <LeeButton size="large" type="success">success</LeeButton>
    </div>
  </div>

</template>
<style scoped>
.button-demo > * {
  margin-right: 8px;
}

.color-bg {
  background: #c2c2c2;
  padding: 10px;
}
</style>

