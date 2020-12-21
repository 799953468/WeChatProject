// pages/index.js
const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    musicOn: false,
    musicOff: true,
    flag: false,
    index: 1,
    page1: false,
    page2: true,
    page3: true,
    page4: true,
    page5: true,
    page6: true,
    page7: true,
    page8: true,
    page9: true,
    page10: true,
  },

  onLoad: function (options) {
    const that = this
    db.collection("cards").where({
      _id: options.id
    }).get({
      success(res){
        const index = options.index
        const data = res.data[0].cardinfo[index]
        console.log(data);
        that.setData({
          groom: data.groom,
          bride: data.bride,
          bride_tel: data.bride_tel,
          groom_tel: data.groom_tel,
          date: data.date,
          time: data.time,
          latitude: data.latitude,
          longitude: data.longitude,
          markers: [{
            id: 1,
            latitude: data.latitude,
            longitude: data.longitude,
            title: data.address
          }]
        })
      }
    })
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
    setTimeout(this.showarrow, 1000)
  },
  show3: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show3_1, 1000)
  },
  show3_1: function () {
    this.setData({
      show3_2: 'flipInY animated show'
    })
    setTimeout(this.show3_2, 1000)
  },
  show3_2: function () {
    this.setData({
      show3_3: 'bounce animated show'
    })
    setTimeout(this.show3_3, 1000)
  },
  show3_3: function () {
    this.setData({
      show3_4: 'flipInX animated show'
    })
    setTimeout(this.show3_4, 1000)
  },
  show3_4: function () {
    this.setData({
      show3_5: 'fadeInLeft animated show'
    })
    setTimeout(this.show3_5, 1000)
  },
  show3_5: function () {
    this.setData({
      show3_6: 'fadeInRight animated show'
    })
    setTimeout(this.showarrow, 1000)
  },
  show4: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show4_1, 1000)
  },
  show4_1: function () {
    this.setData({
      show4_2: 'flipInY animated show'
    })
    setTimeout(this.show4_2, 1000)
  },
  show4_2: function () {
    this.setData({
      show4_3: 'bounce animated show'
    })
    setTimeout(this.show4_3, 1000)
  },
  show4_3: function () {
    this.setData({
      show4_4: 'flipInX animated show'
    })
    setTimeout(this.show4_4, 1000)
  },
  show4_4: function () {
    this.setData({
      show4_5: 'fadeInRight animated show'
    })
    setTimeout(this.show4_5, 1000)
  },
  show4_5: function () {
    this.setData({
      show4_6: 'fadeInLeft animated show'
    })
    setTimeout(this.showarrow, 1000)
  },
  show5: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show5_1, 1000)
  },
  show5_1: function () {
    this.setData({
      show5_2: 'fadeInDown animated show'
    })
    setTimeout(this.show5_2, 1000)
  },
  show5_2: function () {
    this.setData({
      show5_3: 'bounce animated show'
    })
    setTimeout(this.showarrow, 1000)
  },
  show6: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show6_1, 1000)
  },
  show6_1: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show6_2: 'fadeInDown animated show'
    })
    setTimeout(this.show6_2, 1000)
  },
  show6_2: function () {
    this.setData({
      show6_4: 'fadeInUp animated show'
    })
    setTimeout(this.show6_3, 1000)
  },
  show6_3: function () {
    this.setData({
      show6_3: 'swing animated show'
    })
    setTimeout(this.showarrow, 1000)
  },
  show7: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show7_1, 1000)
  },
  show7_1: function () {
    this.setData({
      show7_2: 'slideInDown animated show'
    })
    setTimeout(this.show7_2, 1000)
  },
  show7_2: function () {
    this.setData({
      show7_3: 'fadeInUp animated show'
    })
    setTimeout(this.showarrow, 1000)
  },
  show8: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show8_1, 1000)
  },
  show8_1: function () {
    this.setData({
      show8_2: 'slideInDown animated show'
    })
    setTimeout(this.show8_2, 2000)
  },
  show8_2: function () {
    this.setData({
      show8_3: 'slideInLeft animated show',
      show8_5: 'slideInRight animated show'
    })
    setTimeout(this.show8_3, 1000)
  },
  show8_3: function () {
    this.setData({
      show8_4: 'zoomIn animated show'
    })
    setTimeout(this.showarrow, 1000)
  },
  show9: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show9_1, 1000)
  },
  show9_1: function () {
    this.setData({
      show9_2: 'rubberBand animated show'
    })
    setTimeout(this.show9_2, 1000)
  },
  show9_2: function () {
    this.setData({
      show9_4: 'lightSpeedIn animated show'
    })
    setTimeout(this.show9_3, 1000)
  },
  show9_3: function () {
    this.setData({
      show9_3: 'swing animated show'
    })
    setTimeout(this.showarrow, 1000)
  },
  show10: function () {
    this.setData({
      showbg: 'zoomIn animated show',
      show1: 'fadeInLeft animated show'
    })
    setTimeout(this.show10_1, 1000)
  },
  show10_1: function () {
    this.setData({
      show10_1: 'fadeInDown animated show'
    })
    setTimeout(this.show10_2, 1000)
  },
  show10_2: function () {
    console.log(this.data.latitude);
    console.log(this.data.longitude);
    this.setData({
      show10_3: 'fadeInRight animated show',
      show10_4: 'fadeInLeft animated show'
    })
    setTimeout(this.show10_3, 1000)
  },
  show10_3: function () {
    this.setData({
      show10_5: 'flipInY animated show'
    })
    setTimeout(this.show10_4, 1000)
  },
  show10_4: function () {
    this.setData({
      show10_6: 'bounce animated show'
    })
  },
  onReady: function () {
    this.showbg()
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = 'music'
    backgroundAudioManager.src = 'cloud://invitationcard-1gwrctmp0b02c9ca.696e-invitationcard-1gwrctmp0b02c9ca-1304225837/music/mymusic.mp3'
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
    backgroundAudioManager.src = 'cloud://invitationcard-1gwrctmp0b02c9ca.696e-invitationcard-1gwrctmp0b02c9ca-1304225837/music/mymusic.mp3'
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
          case 6:
            this.setData({
              page7: false,
              page6: true,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 7
            })
            setTimeout(this.show7, 100);
            break;
          case 7:
            this.setData({
              page8: false,
              page7: true,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 8
            })
            setTimeout(this.show8, 100);
            break;
          case 8:
            this.setData({
              page9: false,
              page8: true,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 9
            })
            setTimeout(this.show9, 100);
            break;
          case 9:
            this.setData({
              page10: false,
              page9: true,
              flag: false,
              showbg: '',
              show1: '',
              showarrow: '',
              index: 10
            })
            setTimeout(this.show10, 100);
            break;
        }
      }
    }
  },
  gotohere:function(e){    
  console.log(e);    
  let lat = ''; // 获取点击的markers经纬度    
  let lon = ''; // 获取点击的markers经纬度    
  let name = '';  
  let markerId = e.markerId;  
  let markers = this.data.markers;
  for (let item of markers){      
    if (item.id === markerId) {        
      lat = item.latitude;        
      lon = item.longitude;        
      name = item.title;    
      let plugin = requirePlugin('routePlan');
      let key = 'G3XBZ-Q2NR4-4KJUZ-X5MEV-6EBVO-M2BPN';
      let referer = '路线规划';
      let endPoint = JSON.stringify({
          'name': name,
          'latitude': lat,
          'longitude': lon
      });
      wx.navigateTo({
          url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
      });      
      break;      
    }    
  }  
}
})