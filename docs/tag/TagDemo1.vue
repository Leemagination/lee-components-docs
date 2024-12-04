<script setup>
import { LeeTag } from "lee-vue3-components";
</script>

<template>
  <div class="container">
    <LeeTag>default</LeeTag>
    <LeeTag type="primary">primary</LeeTag>
    <LeeTag type="success">success</LeeTag>
    <LeeTag type="danger">danger</LeeTag>
    <LeeTag type="warning">warning</LeeTag>
  </div>
</template>

<style scoped>
.container {
  & > * {
    margin-right: 8px;
  }
}
</style>
