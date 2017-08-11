$(function(){
  $('.upload-btn').on('click',function(){
    $('.upload-file').click();
  })
  $('.upload-file').on('change',function(e){
    console.log(e.target.files[0]);
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log(formData)
    $.ajax({
      url: '/api/upload',
      type: 'POST',
      // cache: false,
      data: formData,
      processData: false,
      contentType: false,
      // contentType: 'multipart/form-data',
      success:function(res){
        if(res.status == 200){
          var img = '<img src='+res.result.url+'>';
          $('.upload-img').html(img);
        }
      }
    })
    $('.upload-file').val('');
  })
  $('body').on('keydown',function(e){
    if(e.which == 13){
      $('.register').click();
    }
  })
  $('.register').on('click',function(){
    var name = $('.name-input').val();
    var password = $('.password-input').val();
    var icon = $('.upload-img>img').attr('src');
    var data = {
      name:name,
      password:password,
      icon:icon
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
