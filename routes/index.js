var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/myblog';
const index = function(str,res) {
  str = str.user;
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err){
      return;
    }
    var collection = db.collection('users');
    collection.find(str).toArray(function(er,result){
      if(er){
        res.send({status:500,message:'获取用户信息失败'})
        return;
      }
      if(result.length){
        var data = result[0];
        res.send({status:200,message:'获取用户信息成功',data:data})
      }else{
        res.send({status:500,message:'获取用户信息失败'})
      }

      db.close();
    })
  });
}
module.exports = index;
