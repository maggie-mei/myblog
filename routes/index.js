var path = require('path');
module.exports = function(app){
  app.get('/login.html',function(req,res){
     res.sendFile(path.join(__dirname, '../public', 'login.html'));
  })
  app.get('/register.html',function(req,res){
     res.sendFile(path.join(__dirname, '../public', 'register.html'));
  })
}
