<template>
  <view class="w-auto h-50">
    <qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const chartData = ref({})
const opts = ref({
  // 颜色
  color: ['#5BCBEF', '#4162FF'],
  padding: [15, 15, 0, 5],
  enableScroll: false,
  legend: {},
  // x轴配置
  xAxis: {
    disableGrid: true,
  },
  // y轴配置
  yAxis: {
    data: [
      {
        min: 0,
      },
    ],
  },
  // 额外配置
  extra: {
    column: {
      type: 'group',
      // 柱子宽度
      width: 20,
      // 激活背景颜色
      activeBgColor: '#000000',
      // 激活背景透明度
      activeBgOpacity: 0.08,
      // 线性类型
      linearType: 'custom',
      // 系列间隙
      seriesGap: 5,
      // 线性透明度
      linearOpacity: 0.5,
      // 柱子圆角
      barBorderCircle: true,
      customColor: ['#4162FF', '#5BCBEF'],
    },
  },
})

const getServerData = () => {
  // 模拟从服务器获取数据时的延时
  setTimeout(() => {
    // 模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
    const res = {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      series: [
        {
          name: '目标值',
          data: [35, 36, 31, 33, 13, 34, 36],
        },
        {
          name: '完成量',
          data: [18, 27, 21, 24, 6, 28, 26],
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
