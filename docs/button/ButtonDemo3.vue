<script setup>
import { ref } from "vue";
import { LeeButton } from "lee-vue3-components";

const count = ref(1)

function addCount() {
  count.value++
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <LeeButton @click="addCount">点击+1</LeeButton>
  </div>
</template>
