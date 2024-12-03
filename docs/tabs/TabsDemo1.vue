<script setup>
import { LeeTabs, LeeTabPanel } from "lee-vue3-components";
import { ref } from "vue";

const tabIndex = ref('1')
</script>

<template>
  <div style="height: 100px;">
    <div>当前tab: {{ tabIndex }}</div>
    <LeeTabs v-model:value="tabIndex">
      <LeeTabPanel name="标签页1" tab-key="1">
        内容,biubiu1
      </LeeTabPanel>
      <LeeTabPanel name="标签页2" tab-key="2">
        内容,biubiu2
      </LeeTabPanel>
      <LeeTabPanel name="标签页3" tab-key="3">
        内容,biubiu3
      </LeeTabPanel>
      <LeeTabPanel name="标签页4" tab-key="4">
        内容,biubiu4
      </LeeTabPanel>
    </LeeTabs>
  </div>
</template>
