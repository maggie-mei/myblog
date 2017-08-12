var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
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
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json({type: 'application/*+json'}));
app.use(express.static('public'));
var routes = require('./routes/router.js');
var api = require('./routes/api.js');
routes(app);
api(app);
app.listen(8888,function(){
  console.log('server start on port 8888');
})
