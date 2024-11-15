<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '荷包详情',
  },
}
</route>
<script lang="ts" setup>
import IconTab from '@/components/common/IconTab.vue'
import TitleBar from '@/components/common/TitleBar.vue'
import InfoCard from '@/components/common/InfoCard.vue'

interface options {
  cardId: string
  title: string
  img: string
}
//
const inMoney = () => {
  console.log('转入')
}
const outMoney = () => {
  console.log('转出')
}
const items = ref([
  { id: 1, icon: 'i-solar-card-recive-broken', title: '攒钱', color: '#000' },
  { id: 2, icon: 'i-solar-card-send-broken', title: '付款', color: '#333' },
  { id: 3, icon: 'i-solar-crown-star-broken', title: '权益', color: '#333' },
])
const itemData = ref([
  {
    id: '1',
    img: 'https://c-ssl.dtstatic.com/uploads/blog/202107/04/20210704141349_82cc9.thumb.400_0.jpg',
    title: '收入',
    time: '2024-01-01',
    money: 100,
  },
  {
    id: '2',
    img: 'https://c-ssl.dtstatic.com/uploads/blog/202107/04/20210704141349_82cc9.thumb.400_0.jpg',
    title: '爱你',
    time: '2024-01-01',
    money: 100,
  },
  {
    id: '3',
    img: 'https://c-ssl.dtstatic.com/uploads/blog/202107/04/20210704141349_82cc9.thumb.400_0.jpg',
    title: '支出',
    time: '2024-01-01',
    money: 100,
  },
])
const isOpen = ref(false)
const cardId = ref('')
const originalCardId = ref('')
const changeOpen = () => {
  isOpen.value = !isOpen.value
}
const clickItem = (id: string) => {
  console.log(id)
}
onLoad((options: options) => {
  originalCardId.value = options.cardId
  cardId.value = '*'.repeat(options.cardId.length - 4) + options.cardId.slice(-4)
})

watch(isOpen, (newVal) => {
  if (newVal) {
    cardId.value = originalCardId.value
  } else {
    cardId.value = '*'.repeat(cardId.value.length - 4) + cardId.value.slice(-4)
  }
})
</script>
<template>
  <view class="">
    <view class="box"></view>
    <view class="absolute top-30 left-4 right-4 bg-#fff rounded-16px p-4">
      <view class="flex items-center" @click="changeOpen">
        <view class="text-#000 text-16px font-bold">No.{{ cardId }}</view>
        <view class="i-solar-eye-bold text-#000 text-14px ml-3" v-if="isOpen"></view>
        <view class="i-solar-eye-closed-bold text-#000 text-14px ml-3" v-else></view>
      </view>
      <view class="flex items-center justify-between mt-3">
        <view class="text-#000 text-16px font-bold ml-4">我的荷包</view>
        <view class="i-solar-settings-minimalistic-broken text-#000 text-14px mr-4"></view>
      </view>
      <view class="my-4 flex flex-col items-center justify-center">
        <view class="flex items-center justify-center my-4">
          <view class="i-solar-dollar-bold-duotone text-14px text-amber"></view>
          <view class="text-#000 text-14px ml-2">总金额</view>
        </view>
        <wd-text :text="'12345.67'" size="30px" bold color="#000" prefix="￥" mode="price" />
      </view>
      <view class="flex items-center justify-around mb-3">
        <view class="text-#000 text-16px font-bold" @click="inMoney">转入</view>
        <view class="text-#333 text-16px font-bold">|</view>
        <view class="text-#000 text-16px font-bold" @click="outMoney">转出</view>
      </view>
    </view>
    <view class="absolute bg-#fff rounded-16px left-4 right-4 top-85">
      <IconTab :items="items" />
    </view>
    <view class="left-4 right-4 top-115 absolute rounded-16px">
      <TitleBar :title="'账单'" />
      <InfoCard :item="itemData" @clickItem="clickItem" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
.box {
  width: 100%;
  height: 200px;
  background-color: #efc62e;
  border-bottom-right-radius: 50% 20%;
  border-bottom-left-radius: 50% 20%;
}
</style>
