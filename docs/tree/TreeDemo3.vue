<script setup>
import { LeeTree } from "lee-vue3-components";
import { ref } from "vue";

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 4
  const options = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        key: `key-${i}`,
        label: `第${i}个选项`,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    } else if (iterator === depth) {
      options.push({
        key: `key-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
      })
    } else {
      options.push({
        key: `key-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const options = ref(getOptions())

const checkKey = ref(['key-2-1-1'])
</script>

<template>
  <div>
    <LeeTree :default-expand-keys="['key-2']" cascade :data="options" v-model:check-keys="checkKey"></LeeTree>
  </div>
</template>
