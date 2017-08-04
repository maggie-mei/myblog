var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/myblog';
var mongo = {};
mongo.query = function(str,res) {
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
      console.log(result);
      if(result.length){
        res.send({status:200,message:'success'})

      }else{
        res.send({status:500,message:'false'})
      }
      db.close();
    })
  });
}
module.exports = mongo;
