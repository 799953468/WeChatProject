// miniprogram/pages/index/index.js
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  data: {
    temp: [],
    background: ['demo-text-1', 'demo-text-1', 'demo-text-1'],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              wx.login({
                success: res => {
                  wx.cloud.callFunction({
                    name: 'getinfo',
                    data: {
                      code: res.code
                    },
                    success: res => {
                      app.openid = res.result.openid
                      db.collection('users').where({
                        _openid: app.openid
                      }).get({
                        success: res =>{
                          if(res.data.length == 0 ){
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
                          } else {
                            that.getdata()
                          }
                        }
                      })
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
    if (options.index && options.id) {
      console.log(options);
      const index = options.index
      const id = options.id
      db.collection('users').where({
        _openid: app.openid
      }).get({
        success: res => {
          const receivedcard = res.data[0].receivedcard
          for (var i in receivedcard){
            if (receivedcard[i].id == id && receivedcard[i].index == index) {
              break
            } else {
              db.collection('users').where({
                _openid: app.openid
              }).update({
                data: {
                  receivedcard: _.push({id,index})
                }
              })
            }
          }
        }
      })
      wx.navigateTo({
        url: '/pages/card/card?id=' + id + '&index=' + index,
      })
    }
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
    const str = new Date();
    var nowDate= str.getFullYear() + "-" + (str.getMonth() + 1) + "-" + str.getDate();
    var nowTime = str.getHours() + ":" + str.getMinutes();
    db.collection('cards').get({
      success: res => {
        var temp = res.data
        var tmp = []
        for (var index in temp){
          for ( var i = 0; i < temp[index].cardinfo.length; i++) {
            const date = temp[index].cardinfo[i].date
            if (date == nowDate) {
              temp[index].cardinfo[i].time = (_this.time_to_sec(temp[index].cardinfo[i].time) - _this.time_to_sec(nowTime))*1000
              tmp.push(temp[index].cardinfo[i])
            }
          }
        }
        _this.setData({
          temp: tmp,
        })
      }
    })
  },
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
        var that = this;
        app.userdata = e.detail.userInfo
        that.setData({
            isHide: false
        });
        that.onLoad()
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
  },
  time_to_sec: function (time) {
    var s = '';
    var hour = time.split(':')[0];
    var min = time.split(':')[1];
    s = Number(hour*3600) + Number(min*60);
    return s;
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  onShow: function() {
    const that = this
    that.onLoad()
  }
})