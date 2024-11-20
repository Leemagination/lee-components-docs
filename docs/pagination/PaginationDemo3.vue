<script setup>
import { LeePagination } from "lee-vue3-components";
import { ref } from "vue";

const currentPage = ref(1)
const currentSize = ref(10)
</script>

<template>
  <div>
    <LeePagination
      v-model:page="currentPage"
      v-model:pageSize="currentSize"
      :pageCount="50"
      :display-count="7"
      :pageSizeOptions="[10,20,50,100,1000]"
      showSizePicker>
    </LeePagination>
    <br>
    <LeePagination
      v-model:page="currentPage"
      v-model:pageSize="currentSize"
      :pageCount="50"
      :display-count="10"
      :pageSizeOptions="[10,20,50,100,1000]"
      showSizePicker>
    </LeePagination>
    <br>
    <LeePagination
      v-model:page="currentPage"
      v-model:pageSize="currentSize"
      :pageCount="50"
      :display-count="15"
      :pageSizeOptions="[10,20,50,100,1000]"
      showSizePicker>
    </LeePagination>
  </div>
</template>
