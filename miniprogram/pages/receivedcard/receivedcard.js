const app = getApp()
const db = wx.cloud.database()
Page({
  data:{
    isHide: false
  },
  onLoad:function(options){
    const that = this
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: res => {
        const data = res.data[0].receivedcard
        if (data.length > 0){
          that.setData({
            isHide: true
          })
          db.collection('cards').where({
            
          }).get({})
        }
      }
    })
  },
  chooseCard: function(e) {
    const id = this.data.id
    const index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/card/card?id=' + id + '&index=' + index,
    })
  }
})