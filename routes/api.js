module.exports = function(app){
  var register = require('./register.js');
  var index = require('./index.js');
  var login = require('./login.js');
  var upload = require('./upload.js');
  var postArticle = require('./post-article.js')
  var multer = require('multer');
  app.post('/api/register',function(req,res){

    register(req.body,res);
  })
  app.get('/api/getUser',function(req,res){
  	console.log(req.cookies);
  	index(req.cookies,res);
  })
  app.get('/api/getUserInfo',function(req,res){
    if(req.cookies.user){
      index(req.cookies,res)
      // res.send(req.cookie)
    }else{
      res.send({status:500,message:'获取用户信息失败'});
    }
  })
  app.post('/api/register',function(req,res){
    register(req.body,res);
  })
  app.post('/api/upload',multer().single('file'),function(req,res){
    upload(req.file,res);
  })
  app.post('/api/login',function(req,res){
    login(req.body,res);
  })
  app.post('/api/article/post',function(req,res){
    postArticle(req.body,res);
  })
}
