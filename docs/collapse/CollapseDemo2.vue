<script setup>
import { LeeCollapse, LeeCollapseItem } from "lee-vue3-components";
</script>

<template>
  <div>
    <LeeCollapse accordion>
      <LeeCollapseItem title="手风琴模式" name="1">一段文字</LeeCollapseItem>
      <LeeCollapseItem title="点点呗" name="2">第二段文字</LeeCollapseItem>
      <LeeCollapseItem title="点一下嘛" name="3">第三段文字</LeeCollapseItem>
      <LeeCollapseItem title="默认展开" default-expanded name="4">第四段文字</LeeCollapseItem>
    </LeeCollapse>
  </div>
</template>

<style scoped>

</style>
