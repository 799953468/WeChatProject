// miniprogram/pages/index/index.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    temp:[]
  },
  async onLoad (options) {
    var _this = this
    const nowDate = new Date().toLocaleDateString();
    db.collection('cards').where({
      Date: nowDate
    }).get({
      success: res => {
        console.log(res.data);
        _this.setData({
          temp: res.data
        })
      }
    })
  },
  async onReady (option){
    if (app.globalData.openid && app.globalData.openid != '') {
      this.setData({
        openid: app.globalData.openid
      })
    }else{
      app.openidCallback = openid => {
        if (openid != ''){
          this.setData({
            openid: openid
          })
        }
      }
    }
  },
})