// miniprogram/pages/more/more.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    show: false,
    buttons: [
        {
            type: 'default',
            className: '',
            text: '辅助操作',
            value: 0
        },
        {
            type: 'primary',
            className: '',
            text: '主操作',
            value: 1
        }
      ]
  },
  open: function () {
      this.setData({
          show: true
      })
  },
  buttontap(e) {
      console.log(e.detail)
  },
  del: function() {
    wx.authorize({
      scope: 'scope.record',
      success () {
        db.collection('users').where({
          _openid: app.openid
        })
        .remove().then(
          wx.showToast({
            title: '用户删除成功',
            icon: 'success',
            duration: 2000
          }),
          setTimeout(function(){
          wx.redirectTo({
            url: '../user_info/user_info'
          })
        },2000))
      }
    })
  }
})