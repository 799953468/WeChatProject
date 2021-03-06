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
        var a = []
        if (data.length > 0){
          that.setData({
            isHide: true,
          })
          const temp = data
          for (var i in temp) {
            db.collection('cards').doc(temp[i].id).get({
              success: res => {
                const tmp = res.data.cardinfo
                a.push(tmp[temp[i].index])
                that.setData({
                  cardList: a
                })
              }
            })
          }
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