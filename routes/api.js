module.exports = function(app){
  var register = require('./register.js');
  var index = require('./index.js');
  app.post('/api/register',function(req,res){

    register(req.body,res);
  })
  app.get('/api/getUser',function(req,res){
  	console.log(req.cookies);
  	index(req.cookies,res);
  })
}
