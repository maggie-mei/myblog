var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var options = require('../config.js');
var DB_CONN_STR = `mongodb://${options.db.host}:${options.db.port}/myblog`;
var register = function(str,res) {
  console.log('开始连接数据库');
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err){
      console.log('连接数据库失败');
      return;
    }
    console.log('连接数据库成功');
    var collection = db.collection('users');
    collection.find({name:str.name}).toArray(function(er,result){
      console.log('开始查询');
      if(er){
        console.log('查询失败');
        return;
      }
      console.log('查询成功');
      if(result.length){
        res.send({status:500,message:'账号已注册'})

      }else{
        collection.insert(str,function(erro,result){
          if(erro){
            console.log(erro);
            res.send({status:500,message:'账号注册失败'})
            return;
          }
          // res.clearCookie('user');
          res.cookie('user',{name:str.name},{httpOnly:true})
          res.send({status:200,message:'账号注册成功'})
        })
      }
      db.close();
    })
  });
}
module.exports = register;
