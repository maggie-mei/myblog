$(function(){
  $.ajax({
    url:"/api/getUserInfo",
    type:"get",
    success:function(res){
      if(res.status == 200){
        $('.user-name').text(res.data.name);
      }
    }
  })
})
