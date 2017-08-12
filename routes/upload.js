var fs = require('fs');
var path = require('path');
var options = require('../config.js');
const upload = function(str,res) {
  var type = str.mimetype.split('/')[1];
  var buf = str.buffer;
  var imgName = new Date().getTime()+str.originalname
  var pathName = path.join(__dirname,'../public/uploads/',imgName);
  fs.writeFile(pathName, buf, function (err) {
    if (err) throw err;
    var url = 'http://'+options.host+':'+options.port+'/uploads/'+imgName;
    res.send({status:200,message:"上传成功",result:{url:url}});
  });
}
module.exports = upload;
