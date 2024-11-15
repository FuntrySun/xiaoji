<script lang="ts" setup>
//
const props = defineProps<{
  title: string
  rightIcon?: string
  rightIconClick?: () => void
}>()
</script>

<template>
  <!-- 标题栏组件 -->
  <view class="flex justify-between items-center my-3">
    <view class="flex items-center">
      <view class="i-solar-alt-arrow-right-bold-duotone text-6 bg-#8AA9FF"></view>
      <wd-text :text="props.title" bold color="#000" size="16px"></wd-text>
    </view>
    <view
      :class="
        props.rightIcon ? 'i-solar-sort-from-top-to-bottom-bold-duotone text-6 bg-#8AA9FF mr-2' : ''
      "
      @click="props.rightIconClick"
    ></view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
