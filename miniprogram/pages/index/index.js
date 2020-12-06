// miniprogram/pages/index/index.js
const app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {
    
  },
  onReady: function(option){
    if (app.globalData.openid && app.globalData.openid != '') {
      this.setData({
        openid: app.globalData.openid
      })
      this.addinfo()
    }else{
      app.openidCallback = openid => {
        if (openid != ''){
          this.setData({
            openid: openid
          })
          this.addinfo()
        }
      }
    }
  },
  addinfo: function () {
    const db = wx.cloud.database()
    db.collection('users').where({
       _openid: this.data.openid,
    })
    .get({
      success: function(res) {
        if(res.data.length > 0){
          console.log(res.data);
        }else{
          db.collection('users').add({
            data: {},
          })
        }
      }
    })
  }
})