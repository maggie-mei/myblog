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
})