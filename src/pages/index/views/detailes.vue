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
  status: 0,
  detail: [],
})
const detailList = ref([
  { label: '支付时间', value: '2024-10-24 10:24:24' },
  { label: '付款方式', value: '微信支付' },
  { label: '详情描述', value: '完成每日打卡任务' },
  { label: '收单机构', value: '微信支付' },
  { label: '付款单位', value: '微信' },
  { label: '订单备注', value: '暂无' },
])
// 模拟后端数据
const mockData = {
  '1': {
    id: '1',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '自律打卡金',
    time: '2024-10-24 10:24:24',
    money: 1200,
    status: 1,
  },
  '2': {
    id: '2',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '打卡金',
    time: '2024-10-24 10:24:24',
    money: 1255,
    status: 2,
  },
  '3': {
    id: '3',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '自律',
    time: '2024-10-24 10:24:24',
    money: 1288,
    status: 2,
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
const handleQuestion = () => {
  console.log('对此订单有疑问？')
}
const handleContact = () => {
  console.log('联系客服')
}
</script>
<template>
  <view class="rounded-16px p-4">
    <view
      class="flex flex-col items-center mb-4 bg-white rounded-16px p-4 justify-center shadow-md"
    >
      <wd-img :src="recordDetail.img" :width="60" :height="60" round />
      <view class="text-16px font-bold my-4">{{ recordDetail.title }}</view>
      <view class="text-24px font-bold">¥ {{ recordDetail.money }}</view>
      <view
        :class="
          recordDetail.status === 1
            ? 'text-14px text-blue-400 font-bold mt-4'
            : 'text-14px text-red-400 font-bold mt-4'
        "
      >
        {{ recordDetail.status === 1 ? '交易成功' : '交易失败' }}
      </view>
    </view>

    <view class="p-4 bg-white rounded-16px mb-4 shadow-md">
      <view class="text-16px text-gray-600 mb-2 font-bold">详情描述</view>
      <view
        class="flex justify-left items-center my-3 ml-4"
        v-for="(item, index) in detailList"
        :key="index"
      >
        <view class="text-14px mr-6 font-bold">{{ item.label }}:</view>
        <view class="text-14px text-gray-500 mt-1 font-bold">{{ item.value }}</view>
      </view>
    </view>
    <view class="flex justify-around items-center rounded-16px p-4 bg-white shadow-md">
      <view class="flex justify-center items-center" @click="handleQuestion">
        <view class="i-solar-inbox-archive-bold-duotone text-14px text-blue-500 mr-1"></view>
        <view class="text-14px text-blue-500 font-bold">对此订单有疑问？</view>
      </view>
      <view class="flex justify-center items-center" @click="handleContact">
        <view class="i-solar-call-chat-rounded-bold-duotone text-14px text-blue-500 mr-1"></view>
        <view class="text-14px text-blue-500 font-bold">联系客服</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
