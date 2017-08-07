$(function(){
  $('body').on('keydown',function(e){
    if(e.which == 13){
      $('.register').click();
    }
  })
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
        if(res.status == 200){
          location.href = '/';
        }
      }
    })
  })
})
