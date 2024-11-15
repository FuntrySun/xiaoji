<script lang="ts" setup>
import ImageList from '@/components/common/ImageList.vue'
interface cardProps {
  cardTitle: string
  cardId: string
  cardAmount: string
  cardDate: string
  imageList: string[]
}
const props = defineProps<cardProps>()
const emit = defineEmits(['clickCardAvatar', 'clickCard'])
const cardInfo = ref({
  // 卡片标题
  title: props.cardTitle,
  // 卡片ID
  id: '*'.repeat(props.cardId.length - 4) + props.cardId.slice(-4),
  // 卡片金额
  amount: props.cardAmount,
  // 卡片日期
  date: props.cardDate,
  // 卡片头像列表
  imageList: props.imageList,
})
const handleClickAvatar = (cardId: string, index: number) => {
  emit('clickCardAvatar', cardId, index)
}
const handleClickCard = (cardId: string) => {
  emit('clickCard', cardId)
}
</script>
<template>
  <view class="bg-#4F6EFF rounded-4 w-auto h-auto p-5 shadow my-4">
    <view class="flex justify-between items-center">
      <view class="flex items-center">
        <view class="i-solar-card-transfer-bold-duotone text-6 bg-#ffffff"></view>
        <view class="text-#ffffff text-5 mx-3 titlebox">{{ cardInfo.title }}</view>
      </view>
      <view><ImageList :image-list="cardInfo.imageList" @image-clicked="handleClickAvatar" /></view>
    </view>
    <view class="my-4">
      <wd-text
        :text="cardInfo.id"
        color="#ffffff"
        size="22px"
        custom-style="letter-spacing: 10px"
      ></wd-text>
    </view>
    <view class="flex items-center justify-between">
      <view>
        <wd-text
          :text="cardInfo.amount"
          bold
          color="#ffffff"
          size="22px"
          mode="price"
          prefix="￥"
        ></wd-text>
      </view>
      <view class="flex items-center">
        <wd-text :text="cardInfo.date" color="#ffffff" size="16px"></wd-text>
        <view
          class="i-solar-double-alt-arrow-right-bold-duotone bg-#ffffff text-5"
          @click="handleClickCard"
        ></view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.titlebox {
  letter-spacing: 5px;
}
.textbox {
  letter-spacing: 10px;
}
</style>
