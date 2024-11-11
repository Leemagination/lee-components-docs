<script setup>
import { LeeDivider } from "lee-vue3-components";
</script>

<template>
  <div>
    <LeeDivider>标题</LeeDivider>
    <LeeDivider :distance-to-left="20">标题</LeeDivider>
    <LeeDivider :distance-to-left="100">标题</LeeDivider>
  </div>
</template>
