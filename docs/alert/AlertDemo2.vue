<script setup>
import { LeeAlert } from "lee-vue3-components";


const text = Array(20).fill('一段文本').join('')
</script>

<template>
  <div>
    <LeeAlert type="info" title="没有边框" :border="false">
      {{ text }}
    </LeeAlert>
    <LeeAlert type="success">
      没有title的{{ text }}
    </LeeAlert>
    <LeeAlert type="warning" title="只有title">
    </LeeAlert>
    <LeeAlert type="error" title="不展示icon" :showIcon="false">
      {{ text }}
    </LeeAlert>
  </div>
</template>
