<script setup>
import { LeeCard } from "lee-vue3-components";

</script>

<template>
  <div>
    <LeeCard border>
      <template #header>有分界线</template>
      <template #default>卡片内容</template>
      <template #footer>卡片底部</template>
    </LeeCard>
    <br>
    <LeeCard hover-status>
      <template #header>可悬浮的</template>
      <template #default>卡片内容</template>
    </LeeCard>
    <br>
    <LeeCard closable>
      <template #header>可关闭的</template>
      <template #default>卡片内容</template>
    </LeeCard>
    <br>
    <LeeCard cover="https://picsum.photos/500/200">
      <template #header>cover图片</template>
      <template #default>卡片内容</template>
    </LeeCard>
    <br>
    <LeeCard>
      <template #header>单标题</template>
    </LeeCard>
    <br>
    <LeeCard>
      <template #default>单内容</template>
    </LeeCard>
  </div>
</template>
