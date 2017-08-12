var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/myblog';
var index = function(cookie,res){
	if(cookie){
		res.send({status:200,data:cookie})
	}
}
module.exports = index;