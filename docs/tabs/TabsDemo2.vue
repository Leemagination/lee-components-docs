<script setup>
import { LeeTabs, LeeTabPanel } from "lee-vue3-components";
import { ref } from "vue";

const tabIndex = ref('2')
</script>

<template>
  <div>
    <div>v-if展示内容</div>
    <LeeTabs :animated="false" v-model:value="tabIndex">
      <LeeTabPanel name="标签页1" tab-key="1">
        内容,biubiu1
      </LeeTabPanel>
      <LeeTabPanel name="标签页2" tab-key="2">
        输入框测试<input type="text">
      </LeeTabPanel>
      <LeeTabPanel name="标签页3" tab-key="3">
        内容,biubiu3
      </LeeTabPanel>
      <LeeTabPanel name="标签页4" tab-key="4">
        输入框测试2<input type="text">
      </LeeTabPanel>
    </LeeTabs>
  </div>
</template>
