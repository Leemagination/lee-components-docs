<script setup>
import { LeeCalendar } from "lee-vue3-components";
import { ref } from "vue";

const text = ref('')
</script>

<template>
  <div>
    点击后回调: {{ text }}
    <LeeCalendar @date-click="(time)=>text=time"></LeeCalendar>
  </div>
</template>
