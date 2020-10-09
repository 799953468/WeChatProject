// pages/index.js
Page({
  data: {
    musicOn: false,
    musicOff: true,
    name: '杨 一 中 & 张 鹤',
    data: '2018.05.26',
    flag: false,
    index: 1,
    page1: false,
    page2: true,
    page3: true,
    page4: true,
    page5: true,
  },

  onLoad: function (options) {

  },
  showbg: function () {
    this.setData({
      showbg: 'zoomIn animated show'
    })
    setTimeout(this.show1, 1000)
  },
  show1: function () {
    this.setData({
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show1_2, 1000)
  },
  show1_2: function () {
    this.setData({
      show1_2: 'flipInY animated show'
    })
    setTimeout(this.show1_3, 1000)
  },
  show1_3: function () {
    this.setData({
      show1_3: 'flipInY animated show'
    })
    setTimeout(this.show1_4, 1000)
  },
  show1_4: function () {
    this.setData({
      show1_4: 'slideInLeft animated show',
      show1_5: 'slideInLeft animated show'
    })
    setTimeout(this.show1_5, 1000)
  },
  show1_5: function () {
    this.setData({
      show1_6: 'slideInLeft animated show',
      show1_7: 'slideInRight animated show'
    })
    setTimeout(this.show1_6, 1000)
  },
  show1_6: function () {
    this.setData({
      show1_8: 'slideInLeft animated show',
    })
    setTimeout(this.show1_7, 1000)
  },
  show1_7: function () {
    this.setData({
      show1_9: 'zoomIn animated show',
    })
    setTimeout(this.show1_8, 1000)
  },
  show1_8: function () {
    this.setData({
      show1_10: 'zoomIn animated show',
      show1_11: 'zoomIn animated show',
    })
    setTimeout(this.showarrow, 1000)
  },
  showarrow: function () {
    this.setData({
      showarrow: 'show fadeOutUp animated infinite',
      flag: true
    })
  },
  show2: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show2_1, 1000)
  },
  show2_1: function () {
    this.setData({
      show2_2: 'fadeInDown animated show'
    })
    setTimeout(this.show2_2, 1000)
  },
  show2_2: function () {
    this.setData({
      show2_3: 'fadeInRight animated show',
      show2_4: 'fadeInLeft animated show'
    })
    setTimeout(this.show2_3, 1000)
  },
  show2_3: function () {
    this.setData({
      show2_5: 'flipInY animated show'
    })
    setTimeout(this.show2_4, 1000)
  },
  show2_4: function () {
    this.setData({
      show2_6: 'bounce animated show'
    })
    setTimeout(this.showarrow,1000)
  },
  show3:function(){
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show3_1, 1000)
  },
  show3_1: function(){
    this.setData({
      show3_2: 'flipInY animated show'
    })
    setTimeout(this.show3_2,1000)
  },
  show3_2: function(){
    this.setData({
      show3_3: 'bounce animated show'
    })
    setTimeout(this.show3_3,1000)
  },
  show3_3: function(){
    this.setData({
      show3_4: 'flipInX animated show'
    })
    setTimeout(this.show3_4,1000)
  },
  show3_4: function(){
    this.setData({
      show3_5: 'fadeInLeft animated show'
    })
    setTimeout(this.show3_5,1000)
  },
  show3_5: function(){
    this.setData({
      show3_6: 'fadeInRight animated show'
    })
    setTimeout(this.showarrow,1000)
  },
  show4: function(){
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show4_1, 1000)
  },
  show4_1: function(){
    this.setData({
      show4_2: 'flipInY animated show'
    })
    setTimeout(this.show4_2,1000)
  },
  show4_2: function(){
    this.setData({
      show4_3: 'bounce animated show'
    })
    setTimeout(this.show4_3,1000)
  },
  show4_3: function(){
    this.setData({
      show4_4: 'flipInX animated show'
    })
    setTimeout(this.show4_4,1000)
  },
  show4_4: function(){
    this.setData({
      show4_5: 'fadeInRight animated show'
    })
    setTimeout(this.show4_5,1000)
  },
  show4_5: function(){
    this.setData({
      show4_6: 'fadeInLeft animated show'
    })
    setTimeout(this.showarrow,1000)
  },
  show5: function(){
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show5_1, 1000)
  },
  show5_1: function(){
    this.setData({
      show5_2: 'fadeInDown animated show'
    })
    setTimeout(this.show5_2,1000)
  },
  show5_2: function(){
    this.setData({
      show5_3: 'bounce animated show'
    })
    setTimeout(this.showarrow,1000)
  },
  onReady: function () {
    this.showbg()
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = 'music'
    backgroundAudioManager.src = 'https://github.com/799953468/WeChatProject/raw/main/music/mymusic.mp3'
  },

  onShow: function () {

  },


  onHide: function () {

  },

  onUnload: function () {

  },

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
  On: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.src = 'https://github.com/799953468/WeChatProject/raw/main/music/mymusic.mp3'
    backgroundAudioManager.play()
    this.setData({
      musicOn: false
    })
    this.setData({
      musicOff: true
    })
  },
  touchStart(e) {
    this.setData({
      startY: e.touches[0].pageY
    })
  },
  touchMove: function (e) {
    this.setData({
      moveY: e.touches[0].pageY
    })
  },
  touchEnd(e) {
    if (this.data.flag) {
      if (this.data.startY - this.data.moveY > 50) {
        switch (this.data.index) {
          case 1:
            this.setData({
              page1: true,
              page2: false,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 2
            })
            setTimeout(this.show2, 100);
            break;
          case 2:
            this.setData({
              page2: true,
              page3: false,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 3
            })
            setTimeout(this.show3, 100);
            break;
          case 3:
            this.setData({
              page3: true,
              page4: false,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 4
            })
            setTimeout(this.show4, 100);
            break;
          case 4:
            this.setData({
              page5: false,
              page4: true,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 5
            })
            setTimeout(this.show5, 100);
            break;
            case 5:
              this.setData({
                page6: false,
                page5: true,
                flag: false,
                showbg: '',
                show1: '',
                showarrow: '',
                index: 6
              })
              setTimeout(this.show6, 100);
              break;
        }
      }
    }
  },
})