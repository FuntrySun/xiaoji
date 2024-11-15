<script lang="ts" setup>
interface Item {
  id: string
  img: string
  title: string
  rightTitle: string
  subTitle: string
  bgColor: string
}
//
defineProps<{
  item: Item[]
}>()
const emit = defineEmits(['clickItem', 'isSelect'])
const clickItem = (id: string) => {
  emit('clickItem', id)
}
const isSelect = (item: Item) => {
  emit('isSelect', item)
}
const value = ref(false)
const handleChange = (item: Item) => {
  isSelect(item)
}
</script>

<template>
  <!-- 信息卡片组件 -->
  <view
    :class="`${item.bgColor} rounded-4 p-4 w-auto h-auto my-4 shadow-md`"
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
          <view class="flex items-center">
            <view class="text-16px text-#000 font-bold">{{ item.title }}</view>
            <view class="text-14px text-#000 ml-2">{{ item.rightTitle }}</view>
          </view>
          <view class="text-14px text-#000 mt-2">{{ item.subTitle }}</view>
        </view>
      </view>
      <!-- 右边 -->
      <view>
        <wd-checkbox v-model="value" @change="handleChange"></wd-checkbox>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
