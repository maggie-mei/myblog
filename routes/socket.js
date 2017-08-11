var socket = function(){
  var io = require('../start.js');
  io.sockets.on('connection',function(socket){
    // console.log('connection')
    socket.on('message',function(data){
      console.log(data);
      socket.broadcast.emit('message', data);
    })


  })

}
module.exports = socket;
