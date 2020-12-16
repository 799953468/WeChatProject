// miniprogram/pages/mycard/mycard.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {

  },
  onLoad: function (options) {
    db.collection('cards').where({
      _openid: app.openid
    }).get({
      success: res => {
        console.log(res);
        const that = this
        that.setData({
          temp: res.data
        })
      }
    })
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