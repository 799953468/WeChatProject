//app.js
const regeneratorRuntime = require("./lib/regenerator/runtime.js");
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'invitationcard-1gwrctmp0b02c9ca',
        traceUser: true,
      })
    }

    this.globalData = {}
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        this.globalData.openid = res.result.openid
        if (this.openidCallback){
          this.openidCallback(res.result.openid)
        }
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  }
})
