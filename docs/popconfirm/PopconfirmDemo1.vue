<script setup>
import { LeePopconfirm, LeeButtonGroup, LeeButton, useMessage } from "lee-vue3-components";

function confirmClick() {
  useMessage({
    type: 'success',
    content: '点击了确认'
  })
}

function cancelClick() {
  useMessage({
    type: 'error',
    content: '点击了取消'
  })
}

async function asyncConfirmClick() {
  useMessage({
    type: 'success',
    content: '点击了确认,2s后回调'
  })
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
  return true
}
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeePopconfirm
        @confirm-click="confirmClick"
        @cancel-click="cancelClick">
        弹出提示选择
        <template #trigger>
          <LeeButton>打开</LeeButton>
        </template>
      </LeePopconfirm>
      <LeePopconfirm
        trigger="hover"
        @confirm-click="confirmClick"
        @cancel-click="cancelClick">
        弹出提示选择
        <template #trigger>
          <LeeButton>悬浮触发</LeeButton>
        </template>
      </LeePopconfirm>
      <LeePopconfirm
        disabled
        @confirm-click="confirmClick"
        @cancel-click="cancelClick">
        弹出提示选择
        <template #trigger>
          <LeeButton>禁用</LeeButton>
        </template>
      </LeePopconfirm>
      <LeePopconfirm
        placement="bottom"
        @confirm-click="confirmClick"
        @cancel-click="cancelClick">
        弹出提示选择
        <template #trigger>
          <LeeButton>出现位置</LeeButton>
        </template>
      </LeePopconfirm>
      <LeePopconfirm
        :show-arrow="false"
        placement="bottom"
        @confirm-click="asyncConfirmClick"
        @cancel-click="cancelClick">
        弹出提示选择
        <template #trigger>
          <LeeButton>异步操作</LeeButton>
        </template>
      </LeePopconfirm>
    </LeeButtonGroup>
  </div>
</template>
