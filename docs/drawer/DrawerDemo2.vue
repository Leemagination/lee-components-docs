<script setup>
import { LeeButtonGroup, LeeButton, useDrawer, useMessage } from "lee-vue3-components";
import TitleComponent from "./Title.vue";
import ContentComponent from "./Content.vue";
import { ref } from "vue";

function openDrawer(placement) {
  useDrawer({
    placement: placement || 'right',
    title: '抽屉标题',
    content: '抽屉内容,hello world,抽屉内容,hello world,抽屉内容,hello world'
  })
}

function openComponentDrawer() {
  useDrawer({
    title: TitleComponent,
    content: ContentComponent,
    size: '400px',
    maskClosable: false,
    handleClosed() {
      useMessage({
        type: 'info',
        content: '抽屉被关闭了'
      })
    }
  })
}

function openAutoCloseDrawer() {
  const { closeModal } = useDrawer({
    showClose: false,
    maskClosable: false,
    title: '抽屉标题',
    content: '抽屉内容,hello world,抽屉内容,hello world,抽屉内容,hello world',
    handleClosed() {
      console.log('关闭回调')
    }
  })
  setTimeout(() => {
    closeModal()
  }, 3000)
}

</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeButton @click="openComponentDrawer">打开抽屉,传入vue组件</LeeButton>
    </LeeButtonGroup>
    <br>
    <LeeButtonGroup>
      <LeeButton @click="openAutoCloseDrawer">3s后自动关闭</LeeButton>
    </LeeButtonGroup>
  </div>
</template>
