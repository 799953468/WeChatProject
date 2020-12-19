const app = getApp()
const db = wx.cloud.database()
Page({
  data:{
    name: '',
    nickName: '',
    gender: 0,
    genderArray: ['男', '女'],
    genderIndex: 0,
    tel: '',
  },
  onLoad:function(options){
    var that = this
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: function(res){
        var data = res.data[0]
        that.setData({
          name: data.name,
          nickName: data.nickName,
          gender: data.gender,
          tel: data.tel
        })
      }
    })
  },
  savePersonInfo: function(e) {
    var data = e.detail.value
    db.collection('users').where({
      _openid: app.openid
    }).update({
      data:{
        name: data.name,
        nickName: data.nickName,
        gender: data.gender,
        tel: data.tel
      }
    }).then(
      wx.showToast({
        title: '资料修改成功',
        icon: 'success',
        duration: 2000
      }),
      setTimeout(function(){
      wx.redirectTo({
        url: '../user_info/user_info'
      })
    },2000))
  },
  changeGender: function(e) {
    var genderIndex = e.detail.value
    if (genderIndex != "null") {
      this.setData({
        genderIndex: genderIndex,
        gender: this.data.genderArray[this.data.genderIndex]
      })
    }
  },
})