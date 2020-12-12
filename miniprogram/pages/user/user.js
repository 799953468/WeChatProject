// miniprogram/pages/index/index.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    user_tel: '未知',
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: res =>{
        var that = this
        that.setData({
          avatarUrl: res.data[0].avatarUrl,
          nickName: res.data[0].nickName,
          message: res.data[0].message,
          mycard: Object.keys(res.data[0].mycard).length,
          receivedcard: Object.keys(res.data[0].receivedcard).length
        })
      }
    })
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

  },
  user_set: function () {
    wx.navigateTo({
      url: "/pages/user_info/user_info"
    })
  },
  todo: function() {
    wx.navigateTo({
      url: '/pages/todo/todo',
    })
  }
})