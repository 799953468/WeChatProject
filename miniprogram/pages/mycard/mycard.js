const app = getApp()
const db = wx.cloud.database()
const _= db.command
Page({
  data:{
  },
  onLoad:function(options){
    const that = this
    db.collection('cards').where({
      _openid: app.openid
    }).get({
      success: res => {
        const data = res.data[0]
        that.setData({
          id: data._id,
          cardList: data.cardinfo
        })
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