// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx0e586074e7d8c61b&secret=2d4884e5a482c2b7964893222ee3a529&js_code=' + event.code + '&grant_type=authorization_code';
  return await rp(url)
    .then(function (res) {
      return res
    })
    .catch(function (err) {
      return '失败'
    });
}