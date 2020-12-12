// miniprogram/pages/index/index.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    temp:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false
  },
  onLoad: function (options) {
    var that = this;
    wx.hideTabBar({})
        wx.getSetting({
            success: function(res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function(res) {
                          wx.showTabBar({})
                            wx.login({
                                success: res => {
                                    wx.cloud.callFunction({
                                      name: 'getinfo',
                                      data: {
                                        code: res.code
                                      },
                                      success: res => {
                                        app.openid = res.result.openid
                                        that.getdata()
                                      }
                                    })
                                }
                            });
                        }
                    });
                } else {
                    that.setData({
                        isHide: true
                    });
                }
            }
        });
  },
  onReady: function () {
    
  },
  initdata: function(info){
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: res=>{
        if (res.data.length > 0){
          return
        }else{
          db.collection('users').add({
            data: {
              _openid: app.openid,
              avatarUrl: app.userdata.avatarUrl,
              gender: app.userdata.gender,
              nickName: app.userdata.nickName,
              mycard: [],
              receivedcard: [],
              message: 0
            }
          })
          .catch(console.error)
        }
      }
    })
  },
  getdata: function (){
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
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
        var that = this;
        app.userdata = e.detail.userInfo
        wx.showTabBar({})
        that.setData({
            isHide: false
        });
        that.initdata()
    } else {
        wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
            showCancel: false,
            confirmText: '返回授权',
            success: function(res) {
                if (res.confirm) {
                    console.log('用户点击了“返回授权”');
                }
            }
        });
    }
  }
})