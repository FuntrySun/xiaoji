<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的',
    navigationStyle: 'default',
  },
}
</route>
<script lang="ts" setup>
import SelectItem from '@/components/common/SelectItem.vue'
//
const userInfo = ref<{
  avatar: string
  name: string
  ID: string
}>({
  avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.cS2yqZtAr8qlpq8MO6SI0AAAAA?rs=1&pid=ImgDetMain',
  name: '张三',
  ID: '156565165151',
})
const itemData = ref([
  {
    id: 1,
    icon: 'i-solar-wallet-bold-duotone',
    title: '我的账户',
    rightIcon: 'i-carbon-chevron-right',
  },
  {
    id: 2,
    icon: 'i-solar-notification-unread-lines-bold-duotone',
    title: '隐私政策',
    rightIcon: 'i-carbon-chevron-right',
  },
  {
    id: 3,
    icon: 'i-solar-settings-minimalistic-bold-duotone',
    title: '设置',
    rightIcon: 'i-carbon-chevron-right',
  },
  {
    id: 4,
    icon: 'i-solar-heart-angle-bold-duotone',
    title: '帮助中心',
    rightIcon: 'i-carbon-chevron-right',
  },
  {
    id: 5,
    icon: 'i-solar-palette-round-bold-duotone',
    title: '关于我们',
    rightIcon: 'i-carbon-chevron-right',
  },
  {
    id: 6,
    icon: 'i-solar-exit-bold-duotone',
    title: '退出登录',
    rightIcon: 'i-carbon-chevron-right',
  },
])
const clickTo = (index: number) => {
  console.log(index)
}
</script>
<template>
  <view class="py-4 px-4">
    <view class="flex flex-col items-center justify-center">
      <view class="mb-4">
        <wd-img :src="userInfo.avatar" :width="100" :height="100" mode="scaleToFill" round />
      </view>
      <view class="text-24px font-bold mb-2">{{ userInfo.name }}</view>
      <view class="text-16px text-gray-500 mb-4">ID: {{ userInfo.ID }}</view>
    </view>
    <view v-for="(item, index) in itemData" :key="index">
      <SelectItem
        :icon="item.icon"
        :title="item.title"
        :rightIcon="item.rightIcon"
        @clickTo="clickTo(index + 1)"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
