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
        if(res.status == 200){
          $('.alert-success-box').show().text("注册成功");
          setTimeout(function(){
            location.href = 'index';
            },1000)
        }else{
          $('.alert-danger-box').show().text(res.message||"注册失败");
          setTimeout(function(){
            $('.alert-danger-box').fadeOut(1000);
            },500)
        }
      }
    })
  })
})
