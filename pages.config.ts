import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'unibest',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#8AA9FF',
    backgroundColor: '#F8F8F8',
    height: '50px',
    fontSize: '14px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/ishome.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/mid.png',
        selectedIconPath: 'static/tabbar/ismid.png',
        pagePath: 'pages/about/about',
        text: '账目统计',
      },
      {
        iconPath: 'static/tabbar/me.png',
        selectedIconPath: 'static/tabbar/isme.png',
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
})
