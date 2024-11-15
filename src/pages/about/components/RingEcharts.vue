<template>
  <view class="w-auto h-300px">
    <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
  </view>
</template>

<script setup lang="ts">
const chartData = ref({})
const opts = ref({
  rotate: false,
  rotateLock: false,
  color: ['#1890FF', '#91CB74'],
  padding: [5, 5, 5, 5],
  dataLabel: true,
  enableScroll: false,
  legend: {
    show: true,
    position: 'left',
    lineHeight: 25,
  },
  title: {
    name: '收益',
    fontSize: 15,
    color: '#666666',
  },
  subtitle: {
    name: '70%',
    fontSize: 14,
    color: '#7cb5ec',
  },
  extra: {
    ring: {
      ringWidth: 40,
      activeOpacity: 0.5,
      activeRadius: 10,
      offsetAngle: 0,
      labelWidth: 15,
      border: true,
      borderWidth: 3,
      borderColor: '#FFFFFF',
      linearType: 'custom',
      linearGradient: {
        0: 'white', // 渐变起始颜色
        100: 'blue', // 渐变结束颜色
      },
    },
  },
})

const getServerData = () => {
  // 模拟从服务器获取数据时的延时
  setTimeout(() => {
    // 模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
    const res = {
      series: [
        {
          data: [
            { name: '购物', value: 50 },
            { name: '娱乐', value: 30 },
            { name: '餐饮', value: 20 },
            { name: '交通', value: 18 },
            { name: '其他', value: 8 },
          ],
        },
      ],
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
}

onMounted(() => {
  getServerData()
})
</script>

<style scoped>
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
