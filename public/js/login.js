$(function(){
  $('body').on('keydown',function(e){
    if(e.which == 13){
      $('.login').click();
    }
  })
  $('.login').on('click',function(){
    var name = $('.name-input').val();
    var password = $('.password-input').val();
    var data = {
      name:name,
      password:password
    }
    $.ajax({
      url:'/api/login',
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
