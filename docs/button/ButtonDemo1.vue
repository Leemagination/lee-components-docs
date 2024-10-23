<script setup>
import { LeeButton } from "lee-vue3-components";

</script>

<template>
  <div class="button-demo">
    <LeeButton>default</LeeButton>
    <LeeButton type="primary">primary</LeeButton>
    <LeeButton type="danger">danger</LeeButton>
    <LeeButton type="wrong">wrong</LeeButton>
    <LeeButton type="success">success</LeeButton>
  </div>
</template>
<style scoped>
.button-demo > * {
  margin-right: 8px;
}
</style>

