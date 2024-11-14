<script setup>
import { LeeInputNumber } from "lee-vue3-components";
import { ref } from "vue";

const count = ref(1)

const limitCount = ref(2)
</script>

<template>
  <div>
    <LeeInputNumber v-model:value="count"></LeeInputNumber>
    <br>
    <br>
    <LeeInputNumber v-model:value="count" addon-before="前缀" addon-after="后缀"></LeeInputNumber>
    <br>
    <LeeInputNumber v-model:value="count" prefix="小前缀" suffix="小后缀"></LeeInputNumber>
    <br>
    <br>
    <div>不展示控制器</div>
    <LeeInputNumber v-model:value="count" show-clear :show-control="false"></LeeInputNumber>
    <br>
    <br>
    <div>修改控制器加减值</div>
    <LeeInputNumber v-model:value="count" :step="3"></LeeInputNumber>
    <br>
    <div>无边框</div>
    <LeeInputNumber v-model:value="count" :bordered="false"></LeeInputNumber>
    <br>
    <div>禁用</div>
    <LeeInputNumber v-model:value="count" disabled></LeeInputNumber>
    <br>
    <div>限制大小值</div>
    <LeeInputNumber v-model:value="limitCount" :max="3" :min="-3"></LeeInputNumber>
  </div>
</template>
