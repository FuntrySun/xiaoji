<script lang="ts" setup>
interface Item {
  icon: string
  title: string
  color: string
}

const props = defineProps<{
  items: Item[]
}>()

const emit = defineEmits(['iconClick'])
const handleIconClick = (index: number) => {
  emit('iconClick', index)
}
</script>

<template>
  <!-- 图标tab组件 -->
  <view class="rounded-4 my-4 h-20 w-auto flex justify-around">
    <view
      class="flex flex-col items-center justify-center"
      v-for="(item, index) in props.items"
      :key="index"
      @click="handleIconClick(index)"
    >
      <view class="p-3 rounded-4 bg-#FFF shadow-md">
        <view :class="`${item.icon} text-6 ${item.color}`"></view>
      </view>
      <view class="text-12px text-#000 font-bold my-2">{{ item.title }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
// Your styles here
</style>
