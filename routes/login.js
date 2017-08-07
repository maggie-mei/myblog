var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/myblog';
const login = function(str,res) {
  console.log('开始查询');
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err){
      console.log('连接数据库失败');
      return;
    }
    console.log('连接数据库成功');
    var collection = db.collection('users');
    collection.find(str).toArray(function(er,result){
      console.log('开始查询');
      if(er){
        console.log('查询失败');
        return;
      }
      console.log('查询成功');
      if(result.length){
        res.cookie('user',{name:str.name});
        res.send({status:200,message:'登陆成功'})
      }else{
          res.send({status:500,message:'登陆失败'})
      }
      db.close();
    })
  });
}
module.exports = login;
