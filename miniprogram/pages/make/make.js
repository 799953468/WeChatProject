// miniprogram/pages/make/make.js
const chooseLocation = requirePlugin('chooseLocation');
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
const str = new Date();
const nowDate= str.getFullYear() + "-" + (str.getMonth() + 1) + "-" + str.getDate();
var nowHours= new Date().getHours().toString();
var nowMin= new Date().getMinutes().toString();
const time = timeAdd0(nowHours) + ':' + timeAdd0(nowMin)
function timeAdd0(str) {
  if(str.length<=1){
      str='0'+str;
  }
  return str
}
Page({
  data: {
      showTopTips: false,
      date: nowDate,
      time: time
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  formInputChange(e) {
    const {field} = e.currentTarget.dataset
    this.setData({
      [`${field}`]: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  map: function() {
    const key = 'G3XBZ-Q2NR4-4KJUZ-X5MEV-6EBVO-M2BPN'
    const referer = '选择地址'
    const location = JSON.stringify({
      latitude: this.data.latitude,
      longitude: this.data.longitude
    })
    const category = ''
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    })
  },
  submitForm() {
    const bride = this.data.bride
    const bride_tel = this.data.bride_tel
    const groom = this.data.groom
    const groom_tel = this.data.groom_tel
    const latitude = this.data.latitude
    const longitude = this.data.longitude
    const address = this.data.address
    const date = this.data.date
    const time = this.data.time
    if (bride == undefined || bride_tel == undefined || groom == undefined || groom_tel == undefined || latitude == undefined || longitude == undefined || address == undefined || date == undefined || time == undefined) {
      wx.showToast({
        title: '资料未填写完成',
        icon: 'error',
        duration: 2000
      })
    } else {
      const that = this
      that.addinfo()
      that.onShareAppMessage()
    }
  },
  onLoad: function() {
    wx.hideShareMenu()
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        const that = this
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
     })
    db.collection('cards').where({
      _openid: app.openid
    }).get({
      success: res => {
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
  onShow: function() {
    const that = this
    const location = chooseLocation.getLocation();
    if (location){
      that.setData({
        address: location.address,
        latitude: location.latitude,
        longitude: location.longitude
      })
    }
  },
  onUnload () {
    chooseLocation.setLocation(null);
  },
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '婚礼请帖',
      path: '/pages/index/index?id=' + id + '&index=' + index,
      imageUrl: '../../images/share.jpg',
      success: res =>{
      }
    }
  },
  onReady: function(){
    db.collection('cards').where({
       _openid : app.openid
    }).get({
      success: res => {
        const that = this 
        that.setData({
          id: res.data[0]._id,
          index: res.data[0].cardinfo.length
        })
      }
    })
  },
  addinfo: function() {
    const index = this.data.index
    const bride = this.data.bride
    const bride_tel = this.data.bride_tel
    const groom = this.data.groom
    const groom_tel = this.data.groom_tel
    const latitude = this.data.latitude
    const longitude = this.data.longitude
    const address = this.data.address
    const date = this.data.date
    const time = this.data.time
    db.collection('cards').where({
       _openid: app.openid
    }).update({
      data:{
        cardinfo: _.push({index,bride,groom,bride_tel,groom_tel,latitude,longitude,address,date,time})
      },
      success: res => {
        console.log(res);
      }
    })
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
            that.setData({
                files: that.data.files.concat(res.tempFilePaths)
            });
        }
    })
  },
  previewImage: function(e){
      wx.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.data.files // 需要预览的图片http链接列表
      })
  },
  selectFile(files) {
      console.log('files', files)
  }
})