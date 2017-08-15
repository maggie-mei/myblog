$(function(){
	$.ajax({
		url:'/api/getUser',
	    data:{},
	    dataType:'json',
	    type:'get',
	    success:function(res){
	        if(res.status == 200){
	        	$('.user').text(res.data.user)
	        }
	    }
	})
  $.fn.extend({
    tipOpen:function(str){
      if($(this).hasClass('tip')){
        var html = '<p class="tip-content">'+str+'</p>';
        $(this).append(html)
      }
      $(this).on('mouseout',function(){
        $(this).find('p').remove();
      })
    }
  })
  $.ajax({
    url:"/api/getUserInfo",
    type:"get",
    success:function(res){
      if(res.status == 200){
        $('.icon img').prop('src',res.data.icon);
        $('.user-name').text(res.data.name);
        // $('.user-name').on('mouseover',function(){
        //   $(this).tipOpen('哈哈')
        // })
      }else{
        location.href = 'login'
      }
    }
  })
})
