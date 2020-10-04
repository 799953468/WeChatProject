// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicOn: false,
    musicOff: true,
    name: '杨 一 中 & 张 鹤',
    data: '2018.05.26',
    page1: true,
    page2: false
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
    backgroundAudioManager.src = 'https://github.com/799953468/WeChatProject/raw/main/music/mymusic.mp3'
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
      musicOn: true
    })
    this.setData({
      musicOff: false
    })
  },
  On: function(){
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.src = 'https://github.com/799953468/WeChatProject/raw/main/music/mymusic.mp3'
    backgroundAudioManager.play()
    this.setData({
      musicOn: false
    })
    this.setData({
      musicOff: true
    })
  }
})