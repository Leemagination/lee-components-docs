<script setup>
import { LeeCascader } from "lee-vue3-components";
import { ref } from "vue";

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        key: `key-${i}`,
        text: `第${i}个选项`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    } else if (iterator === depth) {
      options.push({
        key: `key-${prefix}-${i}`,
        text: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    } else {
      options.push({
        key: `key-${prefix}-${i}`,
        text: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const options = ref(getOptions())
const cascaderValue = ref('key-2-2-2')
const cascaderValue2 = ref('key-3-3-3')
</script>

<template>
  <div>
    <p>显示路径和清除状态</p>
    <LeeCascader show-path clearable :options="options" v-model:value="cascaderValue"></LeeCascader>
    <br>
    <p>禁用状态</p>
    <LeeCascader show-path disabled :options="options" v-model:value="cascaderValue2"></LeeCascader>
  </div>
</template>
