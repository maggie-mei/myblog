var tools = {
  getTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    month = month<10?('0'+month):month;
    var day = date.getDay();
    day = day<10?('0'+day):day;
    var hour = date.getHours();
    hour = hour<10?('0'+hour):hour;
    var min = date.getMinutes();
    min = min<10?('0'+min):min;
    var sec = date.getSeconds();
    sec = sec<10?('0'+sec):sec;

    var time = year + '-'+month+'-'+day+' '+hour+':'+min+':'+sec;
    return time;
  }
}
module.exports = tools;
