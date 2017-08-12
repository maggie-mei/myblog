var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/myblog';
<<<<<<< HEAD
var register = function(str,res) {
  console.log('开始连接数据库');
=======
const register = function(str,res) {
  console.log('开始查询');
>>>>>>> 391f1b5ffe5b800c2440cbfeb274aeabf270ad48
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err){
      console.log('连接数据库失败');
      return;
    }
    console.log('连接数据库成功');
<<<<<<< HEAD
    var collection = db.collection('myblog');
    collection.find(str).toArray(function(er,result){
=======
    var collection = db.collection('users');
    collection.find({name:str.name}).toArray(function(er,result){
>>>>>>> 391f1b5ffe5b800c2440cbfeb274aeabf270ad48
      console.log('开始查询');
      if(er){
        console.log('查询失败');
        return;
      }
      console.log('查询成功');
<<<<<<< HEAD
      console.log(result);
      if(result.length){
        res.send({status:500,message:'账号已存在'});
        
      }else{
        // res.send({status:200,message:'success'});
        collection.insert(str,function(erro,resu){
          if(erro){
            return;
          }
          console.log(resu);
          if(resu.result.ok == 1){
            res.cookie("user", str.name);
            res.send({status:200,message:'success'});
          }else{
            res.send({status:500,message:'false'});
          }
=======
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
>>>>>>> 391f1b5ffe5b800c2440cbfeb274aeabf270ad48
        })
      }
      db.close();
    })
  });
}
module.exports = register;
