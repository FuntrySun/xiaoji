<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '荷包攒攒',
  },
}
</route>
<script lang="ts" setup>
import SelectCard from '@/components/common/SelectCard.vue'
import { useToast } from 'wot-design-uni'

const toast = useToast()
const show = ref(false)
const handleClose = () => {
  show.value = false
}
const item = ref([
  {
    id: '1',
    img: 'https://cdn.uviewui.com/uview/common/logo.png',
    title: '荷包1',
    rightTitle: '1000',
    subTitle: '2024-11-15',
    bgColor: 'bg-#EFC62E',
  },
])
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 1000)
})
const isSelect = (item: any) => {
  if (item.value) {
    setTimeout(() => {
      show.value = false
    }, 700)
    try {
      // 接口数据请求
      // const res = addCard(item.value)
      // toast.success(res.msg)
      uni.navigateTo({
        url: `/pages/index/views/cardInfoDetail?img=${item.img}&title=${item.title}`, // 这块还需要新建后的cardId
      })
    } catch (e) {
      toast.error(e)
    }
  }
}
</script>
<template>
  <view class="px-4 py-4">
    <view>
      <wd-popup
        v-model="show"
        custom-style="padding: 30px 40px;"
        @close="handleClose"
        position="bottom"
        closable
        :safe-area-inset-bottom="true"
      >
        <view class="h-100 w-auto">
          <view class="h-10 w-auto text-20px font-bold text-center">选择荷包的用途</view>
          <view class="h-40 w-auto">
            <SelectCard :item="item" @is-select="isSelect" />
          </view>
        </view>
      </wd-popup>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
