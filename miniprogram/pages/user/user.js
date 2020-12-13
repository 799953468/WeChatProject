// miniprogram/pages/index/index.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    user_tel: '未知'
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: res =>{
        var that = this
        var data = res.data[0]
        that.setData({
          avatarUrl: data.avatarUrl,
          nickName: data.nickName,
          message: data.message,
          mycard: Object.keys(data.mycard).length,
          receivedcard: Object.keys(data.receivedcard).length,
          tel: data.tel == '' ? '未填写' : data.tel
        })
      }
    })
  },
  onShow: function () {
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: res =>{
        var that = this
        var data = res.data[0]
        that.setData({
          avatarUrl: data.avatarUrl,
          nickName: data.nickName,
          message: data.message,
          mycard: Object.keys(data.mycard).length,
          receivedcard: Object.keys(data.receivedcard).length,
          tel: data.tel == '' ? '未填写' : data.tel
        })
      }
    })
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