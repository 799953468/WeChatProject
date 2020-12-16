// miniprogram/pages/user_info/user_info.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data:{
    cells: []
  },
  onLoad:function(options){
    var that = this
    db.collection('users').where({
      _openid: app.openid
    }).get({
      success: function(res){
        var data = res.data[0]
        var cells = [[],[],[]]
        if (data.gender == 1){
          data.gender = '男'
        }else if (data.gender == 0) {
          data.gender = '女'
        }
        cells[0].push({title: '姓名', text: data.name == '' ? '未填写' : data.name, access: false, fn: ''})
        cells[0].push({title: '昵称', text: data.nickName == '' ? '未填写' : data.nickName, access: false, fn: ''})
        cells[0].push({title: '性别', text: data.gender == '' ? '未填写' : data.gender, access: false, fn: ''})
        cells[0].push({title: '电话', text: data.tel == '' ? '未填写' : data.tel, access: false, fn: ''})
        that.setData({
          cells: cells
        })
      }
    })
  },
  edit: function(){
    wx.redirectTo({
      url: '/pages/editPersonInfo/editPersonInfo'
    })
  }
})