<script lang="ts" setup>
//
const props = defineProps<{
  icon: string
  title: string
  rightIcon: string
}>()
const emit = defineEmits(['clickTo'])
const clickTo = () => {
  emit('clickTo')
}
</script>

<template>
  <!-- 选择项组件 -->
  <view class="flex items-center justify-between my-4 bg-white rounded-16px p-3" @click="clickTo">
    <view class="flex items-center">
      <view :class="`${props.icon} text-8 mr-2 bg-#8AA9FF`"></view>
      <view class="text-18px text-#333">{{ props.title }}</view>
    </view>
    <view :class="`${props.rightIcon} text-24px mr-2 bg-#B8BBC3`"></view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
