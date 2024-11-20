<script setup>
import { LeePagination } from "lee-vue3-components";
import { ref } from "vue";

const currentPage = ref(1)
</script>

<template>
  <div>
    <div>当前页码: {{ currentPage }}</div>
    <LeePagination :pageCount="9" v-model:page="currentPage" showQuickJumper></LeePagination>
  </div>
</template>
