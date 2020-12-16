// miniprogram/pages/make/make.js
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  data: {
    bride: 2
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target);
    }
    return {
      title: '婚礼请帖',
      path: '/pages/card',
      image: ''
    }
  },
  onLoad: function() {
    db.collection('cards').where({
      _openid: app.openid
    }).get({
      success: res => {
        console.log(res);
        if (res.data.length < 1){
          db.collection('cards').add({
            data: {
              cardinfo: []
            }
          })
        }
      }
    })
  },
  onReady: function(){
    db.collection('cards').where({
      _openid : app.openid
    }).get({
      success: res => {
        console.log(res);
        const that = this 
        that.setData({
          id: res.data[0]._id,
          index: res.data[0].cardinfo.length
        })
      }
    })
  },
  addinfo: function() {
    const bride = this.data.bride
    const bride_tel = this.data.bride_tel
    const groom = this.data.groom
    const groom_tel = this.data.groom_tel
    db.collection('cards').where({
      _openid: app.openid
    }).update({
      data:{
        cardinfo: _.push({bride,groom,bride_tel,groom_tel})
      },
      success: res => {
        console.log(res);
      }
    })
  },
})