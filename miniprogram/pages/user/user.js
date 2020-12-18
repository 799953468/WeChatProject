// miniprogram/pages/index/index.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    tel: '未填写'
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: res =>{
        const that = this
        const data = res.data[0]
        that.setData({
          avatarUrl: data.avatarUrl,
          nickName: data.nickName,
          message: data.message,
          receivedcard: Object.keys(data.receivedcard).length,
          tel: data.tel == '' ? '未填写' : data.tel
        })
      }
    })
    db.collection('cards').where({
      _openid: app.openid
    }).get({
      success: res =>{
        const that = this
        const data = res.data[0]
        that.setData({
          mycard: Object.keys(data.cardinfo).length
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
  user_set: function () {
    wx.navigateTo({
      url: "/pages/user_info/user_info"
    })
  },
  todo: function() {
    wx.navigateTo({
      url: '/pages/todo/todo',
    })
  },
  about: function() {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  more: function() {
    wx.navigateTo({
      url: '/pages/more/more',
    })
  },
  mycard: function() {
    wx.navigateTo({
      url: '/pages/mycard/mycard',
    })
  },
  receivedcard: function(){
    wx.navigateTo({
      url: '/pages/receivedcard/receivedcard',
    })
  },
  message: function() {
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  systeminfo: function() {
    wx.navigateTo({
      url: '/pages/systemInfo/systemInfo',
    })
  }
})