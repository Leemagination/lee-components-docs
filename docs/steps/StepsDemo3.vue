<script setup>
import { LeeSteps, LeeStep, LeeButton } from "lee-vue3-components";

</script>

<template>
  <div>
    <LeeSteps>
      <LeeStep title="第一步" content="默认状态" status="default"></LeeStep>
      <LeeStep title="第二步" content="错误状态" position="left" status="error"></LeeStep>
      <LeeStep title="第三步" content="进行中状态" status="process"></LeeStep>
      <LeeStep title="第四步" content="完成状态" position="left" status="finish"></LeeStep>
      <LeeStep title="第五步" content="未完成状态" position="left" status="undo"></LeeStep>
      <LeeStep title="第五步" content="未完成状态" status="undo">
        <LeeButton>自定义slot</LeeButton>
      </LeeStep>
    </LeeSteps>
    <br>
  </div>
</template>
