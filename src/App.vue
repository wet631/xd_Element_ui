<template>
  <div>
    <!-- <xd_button type="danger" size="large">按钮</xd_button> -->
    <!-- <xd_radio :options="options" v-model:value="value" ></xd_radio> -->
    <xd_checkbox :options="options" v-model:value="value" ></xd_checkbox>
  </div>
</template>

<script setup lang="ts">
import xd_button from '../packages/button'
// import xd_radio from '../packages/radio'
import xd_checkbox from '../packages/checkbox'
import { ref,watchEffect } from 'vue'
const options = ref([
      {
        label: '北京市',
        value: 1
      },
      {
        label: '纽约市',
        value: 2
      },
      {
        label: '布宜诺斯艾利斯',
        value: 3
      },
      {
        label: '伊斯坦布尔',
        value: 4
      },
      {
        label: '拜占庭',
        value: 5
      },
      {
        label: '君士坦丁堡',
        value: 6
      }
    ])
    const value = ref([2]) // 多选框v-model
watchEffect(() => {
  console.log('value:', value.value)
})
</script>

<style scoped></style>
