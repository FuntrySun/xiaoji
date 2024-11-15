<script lang="ts" setup>
const props = defineProps<{
  data: {
    id: number
    icon: string
    title: string
    value: string
  }[]
}>()

const emit = defineEmits(['clickItem'])

const clickItem = (item: any) => {
  emit('clickItem', item)
}
</script>

<template>
  <view class="flex justify-around items-center my-4 bg-#FFFFFF rounded-3 p-3">
    <view
      v-for="item in props.data"
      :key="item.id"
      class="flex items-center"
      @click="clickItem(item.id)"
    >
      <view :class="item.icon" class="text-10 text-#8AA9FF"></view>
      <view class="flex flex-col items-center ml-2 justify-center">
        <wd-text :text="item.value" mode="price" prefix="￥" bold color="#000000"></wd-text>
        <view class="text-12px text-#999999">{{ item.title }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
