// miniprogram/pages/index/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user_tel: '1231231',
    mycard: 1,
    receivedcard: 2,
    draft: 3,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  user_set: function () {
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: "/pages/user_info/user_info"
    })
  },
  todo: function() {
    wx.navigateTo({
      url: '/pages/todo/todo',
    })
  }
})