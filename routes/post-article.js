var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var options = require('../config.js');
var tools = require('./tools.js')
var DB_CONN_STR = `mongodb://${options.db.host}:${options.db.port}/myblog`;
var postArticle = function(str,res) {
  console.log('开始连接数据库');
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err){
      console.log('连接数据库失败');
      return;
    }
    console.log('连接数据库成功');
    var collection = db.collection('posts');
    str.createTime = tools.getTime();
    collection.insert(str,function(erro,result){
      if(erro){
        res.send({status:500,message:'文章发表失败'})
        return;
      }
      res.send({status:200,message:'文章发表成功'})
    })
  });
}
module.exports = postArticle;
