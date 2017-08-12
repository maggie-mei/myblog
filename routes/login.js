var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/myblog';
<<<<<<< HEAD:routes/mongo.js
var mongo = {};
mongo.query = function(str,res) {
  console.log('开始连接数据库');
=======
const login = function(str,res) {
  console.log('开始查询');
>>>>>>> 391f1b5ffe5b800c2440cbfeb274aeabf270ad48:routes/login.js
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err){
      console.log('连接数据库失败');
      return;
    }
    console.log('连接数据库成功');
    var collection = db.collection('myblog');
    collection.find(str).toArray(function(er,result){
      console.log('开始查询');
      if(er){
        console.log('查询失败');
        return;
      }
      console.log('查询成功');
      if(result.length){
<<<<<<< HEAD:routes/mongo.js
        res.send({status:500,message:'false'});
        
      }else{
        res.send({status:200,message:'success'})
=======
        res.cookie('user',{name:str.name},{httpOnly:true});
        res.send({status:200,message:'登陆成功'})
      }else{
          res.send({status:500,message:'登陆失败'})
>>>>>>> 391f1b5ffe5b800c2440cbfeb274aeabf270ad48:routes/login.js
      }
      db.close();
    })
  });
}
module.exports = login;
