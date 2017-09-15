$(function(){
  $('.post-article').on('click',function(){
    var title = $('#title').val().trim();
    var content = $('#content').val().trim();
    var data = {
      title:title,
      content:content,
    }
    if(title&&content){
      $.ajax({
        url: '/api/article/post',
        type: 'POST',
        dataType:'json',
        data: data,
        success:function(res){
          if(res.status == 200){
            alert('ok');
          }else{
            alert('false')
          }
        },
        error:function(){
          alert('error')
        }
      })
    }else{
      alert('不能为空')
    }

  })

})
