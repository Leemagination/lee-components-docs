<script setup>
import { LeePopover, LeeButtonGroup, LeeButton } from "lee-vue3-components";
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeePopover>
        一段文本,biubiu
        <template #trigger>
          <LeeButton>
            打开
          </LeeButton>
        </template>
      </LeePopover>
      <LeePopover trigger="hover">
        一段文本,biubiu
        <template #trigger>
          <LeeButton>
            悬浮触发
          </LeeButton>
        </template>
      </LeePopover>
      <LeePopover trigger="hover" :popover-on-hover="false">
        一段文本,biubiu
        <template #trigger>
          <LeeButton>
            仅悬浮按钮出现
          </LeeButton>
        </template>
      </LeePopover>
      <LeePopover disabled>
        一段文本,biubiu
        <template #trigger>
          <LeeButton>
            禁用
          </LeeButton>
        </template>
      </LeePopover>
      <LeePopover placement="bottom">
        一段文本,biubiu
        <template #trigger>
          <LeeButton>
            出现位置
          </LeeButton>
        </template>
      </LeePopover>
    </LeeButtonGroup>
  </div>
</template>
