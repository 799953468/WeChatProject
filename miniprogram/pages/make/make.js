// miniprogram/pages/make/make.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShareAppMessage: function (res) {
    this.setData({
      id: 1
    })
    if (res.from === 'button') {
      console.log(res.target);
    }
    return {
      title: '自定义转发标题',
      path: '/pages/card',
    
    }
  }
})