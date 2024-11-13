<script setup>
import { LeeButton, LeeButtonGroup, LeeDropdown } from "lee-vue3-components";

const options = [
  {
    text: '一级菜单1',
    key: 1,
  },
  {
    text: '一级菜单2',
    key: 2,
  },
  {
    text: '一级菜单3',
    key: 3,
    disabled: true
  },
  {
    text: '一级菜单含子菜单',
    key: 4,
    children: [
      {
        text: '二级菜单1',
        key: 11,
      },
      {
        text: '二级菜单2',
        key: 22,
      },
      {
        text: '二级菜单3',
        key: 33,
        disabled: true
      },
    ]
  }
]
</script>

<template>
  <div>
    <LeeButtonGroup>
      <LeeDropdown :options="options">
        <LeeButton>hover触发</LeeButton>
      </LeeDropdown>
      <LeeDropdown :options="options" trigger="click">
        <LeeButton>点击触发</LeeButton>
      </LeeDropdown>
      <LeeDropdown :options="options" placement="bottom-start">
        <LeeButton>底部对齐</LeeButton>
      </LeeDropdown>
      <LeeDropdown :options="options" placement="top-start">
        <LeeButton>顶部对齐</LeeButton>
      </LeeDropdown>
      <LeeDropdown :options="options" placement="left">
        <LeeButton>左侧</LeeButton>
      </LeeDropdown>
      <LeeDropdown :options="options" placement="right">
        <LeeButton>右侧</LeeButton>
      </LeeDropdown>
      <LeeDropdown :options="options" disabled>
        <LeeButton>禁用菜单</LeeButton>
      </LeeDropdown>
    </LeeButtonGroup>

  </div>
</template>
