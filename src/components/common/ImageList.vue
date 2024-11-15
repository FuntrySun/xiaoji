<script lang="ts" setup>
const props = defineProps({
  imageList: {
    type: Array as () => string[],
    default: () => [],
  },
  width: {
    type: Number,
    default: 35,
  },
  height: {
    type: Number,
    default: 35,
  },
  round: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['imageClicked'])
const imgs = ref(props.imageList)
const handleClick = (index: number) => {
  emit('imageClicked', index)
}
</script>

<template>
  <!-- 图片列表组件 -->
  <view class="">
    <view class="flex justify-left items-center">
      <view v-for="(img, index) in imgs" :key="index" @click="handleClick(index)">
        <wd-img
          mode="scaleToFill"
          :width="width"
          :height="height"
          :round="round"
          :src="img"
        ></wd-img>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
