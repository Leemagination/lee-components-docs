<script setup>
import { LeeButton, LeeButtonGroup, LeeTooltip } from "lee-vue3-components";
</script>

<template>
  <LeeButtonGroup>
    <LeeTooltip content="一段文本,biubiu">
      <template #trigger>
        <LeeButton>
          悬浮
        </LeeButton>
      </template>
    </LeeTooltip>
    <LeeTooltip trigger="click" content="一段文本,biubiu">
      <template #trigger>
        <LeeButton>
          点击触发
        </LeeButton>
      </template>
    </LeeTooltip>
    <LeeTooltip trigger="hover" :tooltip-on-hover="false" content="一段文本,biubiu">
      <template #trigger>
        <LeeButton>
          仅悬浮按钮出现
        </LeeButton>
      </template>
    </LeeTooltip>
    <LeeTooltip content="一段文本,biubiu" :show-arrow="false">
      <template #trigger>
        <LeeButton>
          无箭头
        </LeeButton>
      </template>
    </LeeTooltip>
    <LeeTooltip disabled content="一段文本,biubiu">
      <template #trigger>
        <LeeButton>
          禁用
        </LeeButton>
      </template>
    </LeeTooltip>
    <LeeTooltip placement="bottom" content="一段文本,biubiu">
      <template #trigger>
        <LeeButton>
          出现位置
        </LeeButton>
      </template>
    </LeeTooltip>
  </LeeButtonGroup>
</template>
