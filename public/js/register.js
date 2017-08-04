$(function(){
  $('.register').on('click',function(){
    var name = $('.name-input').val();
    var password = $('.password-input').val();
    var data = {
      name:name,
      password:password
    }
    $.ajax({
      url:'/api/register',
      data:data,
      dataType:'json',
      type:'post',
      success:function(res){

      }
    })
  })
})
