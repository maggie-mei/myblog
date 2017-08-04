module.exports = function(app){
  var mongo = require('./mongo.js');
  app.post('/api/register',function(req,res){
    mongo.query({name:req.body.name},res);
  })
}
