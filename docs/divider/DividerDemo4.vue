<script setup>
import { LeeDivider } from "lee-vue3-components";
</script>

<template>
  <div>
    <div>自定义颜色</div>
    <span>香蕉</span>
    <LeeDivider direction="vertical" color="blue"></LeeDivider>
    <span>苹果</span>
    <LeeDivider direction="vertical" color="red"></LeeDivider>
    <span>芒果</span>
    <LeeDivider direction="vertical" color="green"></LeeDivider>
    <span>葡萄</span>
    <LeeDivider color="green"></LeeDivider>
    <br>
    <div>渐变效果</div>
    <LeeDivider gradual color="blue"></LeeDivider>
    <div>分割线长短/位置</div>
    <LeeDivider color="orange" :horizontal-length="30" horizontal-line-align="left"></LeeDivider>
    <LeeDivider color="orange" :horizontal-length="40" horizontal-line-align="center"></LeeDivider>
    <LeeDivider color="orange" :horizontal-length="30" horizontal-line-align="right"></LeeDivider>
    <span>香蕉</span>
    <LeeDivider direction="vertical" color="blue" vertical-height="50px" gradual></LeeDivider>
    <span>苹果</span>
    <LeeDivider direction="vertical" color="red" vertical-height="50px" gradual></LeeDivider>
    <br>
    <div>切割线宽度</div>
    <LeeDivider width="3" gradual></LeeDivider>
    <LeeDivider direction="vertical" width="5" vertical-height="50px" gradual></LeeDivider>
  </div>
</template>
