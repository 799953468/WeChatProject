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
            text: '取消',
            value: 0
        },
        {
            type: 'primary',
            className: '',
            text: '确定',
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
    var index = e.detail.index
    var that = this
    if(index == 0){
      that.setData({
        show: false
      })
    } else {
      that.del()
    }
  },
  del: function() {
    var that = this
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: res => {
        var data = res.data[0]
        that.setData({
          id: data._id
        })
      }
    })
    wx.cloud.callFunction({
      name: 'remove_info',
      data: {
        id: that.data.id,
        table: 'users'
      },
      success: res => {
        if (res.errMsg == "cloud.callFunction:ok") {
          wx.showToast({
            title: '用户删除成功',
            icon: 'false',
            duration: 2000
          }),
          setTimeout(function(){
          wx.redirectTo({
            url: 'pages/user/user'
          })
          },2000)
        } else {
          wx.showToast({
            title: '系统错误',
            icon: 'false',
            duration: 2000
          })
        }
      }
    })
  }
        //   wx.showToast({
        //     title: '用户删除成功',
        //     icon: 'success',
        //     duration: 2000
        //   }),
        //   setTimeout(function(){
        //   wx.redirectTo({
        //     url: '../user_info/user_info'
        //   })
        // },2000))
})