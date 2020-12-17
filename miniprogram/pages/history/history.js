Page({
  data:{
    cardList: [
      {title: '公路'},
      {title: '黑夜森林'},
      {title: '鱼与水'},
      {title: '山之剪影'},
      {title: '火山'},
      {title: '科技'},
      {title: '沙漠'},
      {title: '叶子'},
      {title: '早餐'},
      {title: '英伦骑车'},
      {title: '草原'},
      {title: '城市'}
    ],
    nowCard: ''
  },
  onLoad:function(options){
    var that = this
    wx.getStorage({
      key: 'card',
      success: function(res){
        if (res.data == "") {
          that.setData({
            nowCard: config.cardList[0].imgUrl
          })
        } else {
          that.setData({
            nowCard: res.data
          })
        }
      }
    })
  },
  chooseCard: function(e) {
    var url = e.currentTarget.dataset.url
    wx.setStorage({
      key: 'card',
      data: url,
      success: function(res){
        wx.navigateBack({
          delta: 1,
          success: function(res){
            console.log('success')
          }
        })
      }
    })
  }
})