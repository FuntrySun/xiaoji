<script lang="ts" setup>
interface Item {
  id: string
  img: string
  title: string
  time: string
  money: number
}
//
defineProps<{
  item: Item[]
}>()
const emit = defineEmits(['clickItem'])
const clickItem = (id: string) => {
  emit('clickItem', id)
}
</script>

<template>
  <!-- 信息卡片组件 -->
  <view
    class="bg-#fff rounded-4 p-4 w-auto h-auto my-4 shadow-md"
    v-for="item in item"
    :key="item.title"
    @click="clickItem(item.id)"
  >
    <view class="flex justify-between items-center">
      <!-- 左边 -->
      <view class="flex items-center">
        <view class="">
          <wd-img :width="60" :height="60" :src="item.img" mode="scaleToFill" round />
        </view>
        <view class="ml-4">
          <view class="text-16px text-#000 font-bold">{{ item.title }}</view>
          <view class="text-12px text-#000 mt-2">{{ item.time }}</view>
        </view>
      </view>
      <!-- 右边 -->
      <view>
        <wd-text :text="'￥' + item.money" size="16px" bold />
        <view class="i-solar-alt-arrow-right-outline text-5 text-#4F6EFF ml-2"></view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
