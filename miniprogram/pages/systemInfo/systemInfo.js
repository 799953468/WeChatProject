Page({
  data:{
    cells: [],
    minaVersion: 'v1.0'
  },
  onLoad:function(options){
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        var cells = [[]]
        var resolution = res.windowWidth*res.pixelRatio + '*' + res.windowHeight*res.pixelRatio
        cells[0].push({title:'手机型号', text:res.model})
        cells[0].push({title:'分辨率', text:resolution})
        cells[0].push({title:'系统语言', text:res.language})
        cells[0].push({title:'微信版本', text:res.version})
        cells[0].push({title:'小程序版本', text:that.data.minaVersion})
        that.setData({
          cells: cells
        })
      }
    })
  }
})