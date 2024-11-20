<script setup>
import { LeePagination } from "lee-vue3-components";
import { ref } from "vue";

const currentPage = ref(1)
const currentSize = ref(10)
</script>

<template>
  <div>
    <div>当前页码: {{ currentPage }}</div>
    <div>当前分页数量: {{ currentSize }}</div>
    <LeePagination
      :pageCount="9"
      v-model:page="currentPage"
      v-model:pageSize="currentSize"
      :pageSizeOptions="[10,20,50,100,1000]"
      jump-text="立马跳转"
      showQuickJumper
      showSizePicker>
    </LeePagination>
    <br>
    <div>禁用状态</div>
    <LeePagination
      disabled
      :pageCount="9"
      v-model:page="currentPage"
      v-model:pageSize="currentSize"
      :pageSizeOptions="[10,20,50,100,1000]"
      showQuickJumper
      showSizePicker>
    </LeePagination>
  </div>
</template>
