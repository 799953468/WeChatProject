// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicOn: false,
    musicOff: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = 'music'
    backgroundAudioManager.src = 'https://carefree7.github.io/invitation-is-s/music/mymusic.mp3'
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
  Off: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.stop()
    this.setData({
      on: true
    })
    this.setData({
      off: false
    })
  },
  On: function(){
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.src = 'https://carefree7.github.io/invitation-is-s/music/mymusic.mp3'
    backgroundAudioManager.play()
    this.setData({
      on: false
    })
    this.setData({
      off: true
    })
  }
})