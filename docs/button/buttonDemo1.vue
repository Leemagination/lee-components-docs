<script setup>
import { ref } from "vue";
import { LeeButton } from "lee-vue3-components";
const count = ref(1)

function addCount(){
  count.value++
}
</script>

<template>
  <div>
    <h3>{{ count }}</h3>
    <LeeButton @click="addCount">biubiu</LeeButton>
  </div>
</template>
