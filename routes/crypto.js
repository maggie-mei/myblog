var crypto = require('crypto');
var sha1 = crypto.createHash('sha1').update('guozhou').digest('hex');
console.log(sha1);
