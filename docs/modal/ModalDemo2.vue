<script setup>
import { useModal, LeeButton, LeeButtonGroup, useMessage } from "lee-vue3-components";
import Title from "./Title.vue";
import Content from "./Content.vue";

function openModal() {
  useModal({
    title: '标题',
    content: "弹窗内容,一段文本一段文本一段文本",
    showConfirm: true,
    showCancel: true,
    confirmText: '点我点我!',
    cancelText: '别点我~',
    handleCancel() {
      useMessage({
        content: "点击了取消按钮"
      })
    },
    handleConfirm() {
      useMessage({
        content: "点击了确认按钮"
      })
    }
  })
}

function openModal2() {
  useModal({
    title: '标题',
    content: "弹窗内容,不展示关闭按钮",
    showConfirm: true,
    showCancel: true,
    showClose: false,
  })
}

function openModal3() {
  useModal({
    title: Title,
    content: Content,
  })
}

function openModal4() {
  const { closeModal } = useModal({
    title: '标题',
    content: '5s后自动关闭',
    maskClosable: false,
    showClose: false
  })
  setTimeout(() => {
    closeModal()
  }, 5000)
}

function openModal5() {
  useModal({
    title: '标题',
    content: '手动修改弹窗样式',
    modalStyle: {
      color: 'red',
      height: '400px',
      width: '300px'
    },
  })

}
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeButton @click="openModal">按钮文本加点击回调</LeeButton>
      <LeeButton @click="openModal2">无关闭按钮</LeeButton>
      <LeeButton @click="openModal3">传入组件</LeeButton>
      <LeeButton @click="openModal4">自动关闭弹窗</LeeButton>
      <LeeButton @click="openModal5">自定义样式</LeeButton>
    </LeeButtonGroup>
  </div>
</template>
