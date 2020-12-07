// miniprogram/pages/user_info/user_info.js
const app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {
    if (app.globalData.openid && app.globalData.openid != '') {
      this.setData({
        openid: app.globalData.openid
      })
    }else{
      app.openidCallback = openid => {
        if (openid != ''){
          this.setData({
            openid: openid
          })
        }
      }
    }
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})