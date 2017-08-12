var express = require('express');
var app = express();
var http = require('http').Server(app);
var io=require('socket.io')(http);
var options = require('./config.js')
var path = require('path');
var bodyParser = require('body-parser');
<<<<<<< HEAD
// var session = require("express-session");
var cookieParser = require("cookie-parser");
// app.configure(function(){
// 	app.use(cookie());
// 	app.use(session({
// 		name:"final",
// 		secret:"123456",
// 		cookie:{maxAge:100000},
// 		resave:true,
// 		rolling:true
// 	}))
// })
app.use(cookieParser())
=======
var cookieParser = require('cookie-parser');
>>>>>>> 391f1b5ffe5b800c2440cbfeb274aeabf270ad48
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser({httpOnly:true}));
app.use(express.static('public'));
var routes = require('./routes/router.js');
var api = require('./routes/api.js');
routes(app);
api(app);
http.listen(options.port,options.host,function(){
console.log(`server start on ${options.host}:${options.port}`);
})

module.exports = io;
