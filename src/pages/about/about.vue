<route lang="json5">
{
  style: {
    navigationBarTitleText: '账目统计',
  },
}
</route>
<script lang="ts" setup>
import LineEcharts from './components/lineEcharts.vue'
import TwoItem from './components/TwoItem.vue'
import RingEcharts from './components/RingEcharts.vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const itemData = ref([
  {
    id: 1,
    icon: 'i-solar-card-recive-bold-duotone',
    title: '收入',
    value: '2000',
  },
  {
    id: 2,
    icon: 'i-solar-card-send-bold-duotone',
    title: '支出',
    value: '1000',
  },
])

const clickItem = (item: any) => {
  console.log(item)
}
</script>
<template>
  <view class="bg-#F5F5F5 overflow-hidden pt-2 px-4">
    <view class="my-4 bg-white rounded-16px p-4">
      <view class="text-16px text-#424242 font-bold mb-2">计划总余额</view>
      <wd-text
        :text="'1634.56'"
        size="20px"
        color="#000000"
        bold
        mode="price"
        prefix="￥"
      ></wd-text>
    </view>
    <view class="bg-white rounded-12px p-3">
      <line-echarts />
    </view>
    <view>
      <two-item :data="itemData" @clickItem="clickItem(itemData)" />
    </view>
    <view class="bg-white rounded-12px p-3 my-4">
      <ring-echarts />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.test-css {
  // mt-4=>1rem=>16px;
  margin-top: 16px;
}
</style>
