<script setup>
import { LeeButton, LeeList, LeeListItem } from "lee-vue3-components";
</script>

<template>
  <div>
    <LeeList bordered hover-status>
      <LeeListItem>有边框</LeeListItem>
      <LeeListItem>有悬浮态</LeeListItem>
      <LeeListItem>第三项</LeeListItem>
      <LeeListItem>第四项</LeeListItem>
    </LeeList>
    <br>
    <LeeList :split-line="false">
      <LeeListItem>不显示分割线</LeeListItem>
      <LeeListItem>第二项</LeeListItem>
      <LeeListItem>第三项</LeeListItem>
      <LeeListItem>第四项</LeeListItem>
    </LeeList>
    <br>
    <LeeList hover-status>
      <LeeListItem>
        插槽能力
      </LeeListItem>
      <LeeListItem>
        <template #prefix>前缀</template>
        第二项
        <template #suffix>
          <LeeButton>确定</LeeButton>
        </template>
      </LeeListItem>
      <LeeListItem>第三项</LeeListItem>
      <LeeListItem>第四项</LeeListItem>
    </LeeList>
  </div>
</template>
