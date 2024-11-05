<script setup>
import { LeeCard } from "lee-vue3-components";

</script>

<template>
  <div>
    <LeeCard>
      <template #header>卡片插槽标题</template>
      <template #header-extra>额外插槽信息</template>
      <template #default>卡片插槽内容演示,hello~</template>
      <template #footer>卡片插槽底部</template>
    </LeeCard>
  </div>
</template>
