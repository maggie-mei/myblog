var path = require('path');
module.exports = function(app){
<<<<<<< HEAD
	app.get('/',function(req,res){
     	// res.sendFile(path.join(__dirname, '../public', 'index.html'));
     	res.redirect('/index')
  	})
	app.get('/index',function(req,res){
     	res.sendFile(path.join(__dirname, '../public', 'index.html'));
  	})
	app.get('/login',function(req,res){
     	res.sendFile(path.join(__dirname, '../public', 'login.html'));
  	})
  	app.get('/register',function(req,res){
     	res.sendFile(path.join(__dirname, '../public', 'register.html'));
  	})
=======
  app.get('/',function(req,res){
      res.sendFile(path.join(__dirname, '../public', 'login.html'));
  })
  app.get('/index',function(req,res){
    if(req.cookies.user){
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    }else{
      res.redirect('/login');
    }
  })
  app.get('/login',function(req,res){
     res.sendFile(path.join(__dirname, '../public', 'login.html'));
  })
  app.get('/register',function(req,res){
     res.sendFile(path.join(__dirname, '../public', 'register.html'));
  })
  app.get('/chat',function(req,res){
    var socket = require('./socket.js');
    socket();
    res.sendFile(path.join(__dirname, '../public', 'chat.html'));
  })
>>>>>>> 391f1b5ffe5b800c2440cbfeb274aeabf270ad48
}
