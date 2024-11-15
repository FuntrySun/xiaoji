<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>
<script lang="ts" setup>
import UserCard from './components/UserCard.vue'
import TitleBar from '@/components/common/TitleBar.vue'
import IconTab from '@/components/common/IconTab.vue'
import InfoCard from '@/components/common/InfoCard.vue'
import { useToast } from 'wot-design-uni'

defineOptions({
  name: 'Home',
})
const toast = useToast()
// 用户信息
const userInfo = ref({
  name: '披得',
  avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
})
// 卡片信息
const cardInfo = ref([
  {
    cardTitle: '我的荷包',
    cardId: '1234567890',
    cardAmount: '1234567',
    cardDate: '2024-12-11',
    imageList: [
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
      'https://tse4-mm.cn.bing.net/th/id/OIP-C.LmYB_V97BlBjfRj8wKX44gAAAA?rs=1&pid=ImgDetMain',
    ],
  },
  {
    cardTitle: '我和xxx的荷包',
    cardId: '265551894848',
    cardAmount: '1234567',
    cardDate: '2024-12-11',
    imageList: [
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
      'https://tse4-mm.cn.bing.net/th/id/OIP-C.LmYB_V97BlBjfRj8wKX44gAAAA?rs=1&pid=ImgDetMain',
    ],
  },
])
// 图标宫格
const iconItems = ref([
  {
    icon: 'i-solar-wallet-money-bold-duotone',
    title: '预算管理',
    color: 'bg-#4F6EFF',
  },
  {
    icon: 'i-solar-checklist-minimalistic-bold-duotone',
    title: '日常记账',
    color: 'bg-#4F6EFF',
  },
  {
    icon: 'i-solar-graph-new-bold',
    title: '转给朋友',
    color: 'bg-#4F6EFF',
  },
])
// 账户记录
const infoCardItems = ref([
  {
    id: '1',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '自律打卡金',
    time: '2024-10-24 10:24:24',
    money: 1200,
  },
  {
    id: '2',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '打卡金',
    time: '2024-10-24 10:24:24',
    money: 1255,
  },
  {
    id: '3',
    img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain',
    title: '自律',
    time: '2024-10-24 10:24:24',
    money: 1288,
  },
])
/**
 * 点击事件
 * @returns void
 */
const clickUserAvatar = () => {
  console.log('点击了用户头像')
}
/**
 * 点击荷包记录卡片
 * @param id 卡片id
 * @returns void
 */
const clickInfoCardItem = (id: string) => {
  switch (id) {
    case '1':
      uni.navigateTo({
        url: '/pages/index/views/detailes?itemId=' + id,
      })
      break
    case '2':
      uni.navigateTo({
        url: '/pages/index/views/detailes?itemId=' + id,
      })
      break
    case '3':
      uni.navigateTo({
        url: '/pages/index/views/detailes?itemId=' + id,
      })
      break
    default:
      console.log('未知的卡片ID:', id)
  }
}
/**
 * 点击卡片头像
 * @param index 卡片索引
 * @returns void
 */
const clickCardAvatar = (cardId: string, index: number) => {
  console.log('点击了卡片', cardId, '第', index + 1, '个头像')
}
/**
 * 点击卡片
 * @param index 卡片索引
 * @returns void
 */
const clickCard = (cardId: string) => {
  console.log('点击了卡片', cardId)
  uni.navigateTo({
    url: '/pages/index/views/cardInfoDetail?cardId=' + cardId,
  })
}
/**
 * 点击图标
 * @param index 图标索引
 * @returns void
 */
const handleIconClick = (index: number) => {
  switch (index) {
    case 0:
      uni.navigateTo({
        url: '/pages/index/views/saveMoney',
      })
      break
    case 1:
      uni.navigateTo({
        url: '/pages/index/views/dailyBookKeep',
      })
      break
    case 2:
      uni.navigateTo({
        url: '/pages/mine/index',
      })
      toast.info('敬请期待')
      break
    default:
      console.log('未知的图标索引:', index)
  }
}
// 弹窗
const show = ref(false)
// 弹窗选项
const actions = ref([
  {
    name: '添加荷包',
  },
  {
    name: '添加记账记录',
  },
])
/**
 * 点击添加荷包或记录
 * @returns void
 */
const addCardOrRecord = () => {
  show.value = true
}
/**
 * 关闭弹窗
 * @returns void
 */
const close = () => {
  show.value = false
}
/**
 * 选择弹窗选项
 * @param e 事件对象
 * @returns void
 */
const select = (e: any) => {
  switch (e.item.name) {
    case '添加荷包':
      uni.navigateTo({
        url: '/pages/index/views/saveMoney',
      })
      break
    case '添加记账记录':
      uni.navigateTo({
        url: '/pages/index/views/dailyBookKeep',
      })
      break
  }
  show.value = false
}
</script>
<template>
  <view class="bg-#F5f5f5 overflow-hidden pt-2 px-4">
    <view class="">
      <!-- 用户信息 -->
      <view class="ml-0 flex items-center justify-between">
        <view class="flex items-center ml-4 justify-around">
          <wd-img :src="userInfo.avatar" :width="55" :height="55" round @click="clickUserAvatar" />
          <view class="ml-4">
            <view class="mb-1">
              <wd-text :text="'早上好'" color="#000" size="12px"></wd-text>
            </view>
            <view class="mt-1">
              <wd-text :text="userInfo.name" bold color="#000" size="16px"></wd-text>
            </view>
          </view>
        </view>
        <view class="mr-4" @click="addCardOrRecord">
          <view class="i-solar-add-square-bold-duotone bg-#4F6EFF text-7"></view>
        </view>
      </view>
      <view>
        <wd-action-sheet
          v-model="show"
          :actions="actions"
          @close="close"
          @select="select"
          custom-class="padding-4"
        />
      </view>
      <!-- 轮播图 -->
      <view class="">
        <swiper
          :indicator-dots="true"
          :autoplay="false"
          :interval="3000"
          :circular="true"
          style="height: 240px"
        >
          <swiper-item v-for="(item, index) in cardInfo" :key="index">
            <UserCard
              :card-title="item.cardTitle"
              :card-id="item.cardId"
              :card-amount="item.cardAmount"
              :card-date="item.cardDate"
              :image-list="item.imageList"
              @click-card-avatar="clickCardAvatar(item.cardId, index)"
              @click-card="clickCard(item.cardId)"
            />
          </swiper-item>
        </swiper>
      </view>
      <!-- 标题 -->
      <view>
        <TitleBar
          :title="'常用功能'"
          :right-icon="'i-solar-sort-from-top-to-bottom-bold-duotone'"
        />
      </view>
      <!-- 图标宫格 -->
      <view>
        <IconTab :items="iconItems" @icon-click="handleIconClick" />
      </view>
      <!-- 账户记录 -->
      <view>
        <TitleBar :title="'荷包记录'" />
      </view>
      <view>
        <InfoCard :item="infoCardItems" @click-item="clickInfoCardItem" />
      </view>
    </view>
  </view>
</template>

<style>
.main-title-color {
  color: #d14328;
}
</style>
