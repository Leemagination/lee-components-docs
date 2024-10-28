<script setup>
import { LeeAlert } from "lee-vue3-components";


const text = Array(20).fill('一段文本').join('')
</script>

<template>
  <div>
    <LeeAlert type="info" title="info类型" closable>
      {{ text }}
    </LeeAlert>
    <LeeAlert type="success" title="success类型" closable>
      {{ text }}
    </LeeAlert>
    <LeeAlert type="warning" title="warning类型" closable>
      {{ text }}
    </LeeAlert>
    <LeeAlert type="error" title="error类型" closable>
      {{ text }}
    </LeeAlert>
  </div>
</template>
