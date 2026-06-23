App({
  onLaunch: function() {
    // 小程序启动
    console.log('App launched')
  },
  onShow: function() {
    // 小程序显示
    console.log('App show')
  },
  onHide: function() {
    // 小程序隐藏
    console.log('App hide')
  },
  globalData: {
    userInfo: null
  }
})