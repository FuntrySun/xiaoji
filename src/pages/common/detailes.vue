<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '详情',
  },
}
</route>
<script lang="ts" setup>
const recordDetail = ref({
  id: '',
  img: '',
  title: '',
  time: '',
  money: 0,
  desc: '',
})
// 模拟后端数据
const mockData = {
  '1': {
    id: '1',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '自律打卡金',
    time: '2024-10-24 10:24:24',
    money: 1200,
    desc: '完成每日打卡任务奖励',
  },
  '2': {
    id: '2',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '打卡金',
    time: '2024-10-24 10:24:24',
    money: 1255,
    desc: '完成连续打卡7天任务奖励',
  },
  '3': {
    id: '3',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '自律',
    time: '2024-10-24 10:24:24',
    money: 1288,
    desc: '完成每日运动打卡任务奖励',
  },
}

// 获取详情数据方法
const getDetail = (id: string) => {
  return mockData[id] || {}
}

onLoad((options) => {
  console.log('options', options)
  recordDetail.value.id = options.itemId
  recordDetail.value = getDetail(recordDetail.value.id)
})
</script>
<template>
  <view class="rounded-16px p-4">
    <view class="flex items-center mb-4 bg-white rounded-16px p-4">
      <wd-img :src="recordDetail.img" :width="60" :height="60" round />
      <view class="ml-4">
        <view class="text-16px font-bold">{{ recordDetail.title }}</view>
        <view class="text-12px text-gray-500 mt-1">{{ recordDetail.time }}</view>
      </view>
    </view>

    <view class="flex justify-between items-center p-3 border-t bg-white rounded-16px mb-4">
      <view class="text-14px text-gray-600">金额</view>
      <view class="text-16px font-bold">¥ {{ recordDetail.money }}</view>
    </view>

    <view class="p-3 bg-white rounded-16px mb-4">
      <view class="text-20px text-gray-600 mb-2">详情描述</view>
      <view class="text-14px">{{ recordDetail.desc }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
