var express = require('express');
var app = express();
var http = require('http').Server(app);
var io=require('socket.io')(http);
var options = require('./config.js')
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
app.use(cookieParser())
var cookieParser = require('cookie-parser');
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
