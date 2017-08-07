var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(bodyParser.json({type: 'application/*+json'}));
app.use(express.static('public'));
var routes = require('./routes/router.js');
var api = require('./routes/api.js');
routes(app);
api(app);
app.listen(8888,function(){
  console.log('server start on port 8888');
})
