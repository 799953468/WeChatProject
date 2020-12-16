// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  
  const bride = event.bride
  const openid = event.openid
  console.log(openid);
  db.collection('cards').where({
    _openid: openid
  }).update({
    data: {
      cardinfo: _.push({bride})
    }
  })
}