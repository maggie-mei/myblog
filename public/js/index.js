$(function() {

  $.ajax({
    url: '/api/getUser',
    data: {},
    dataType: 'json',
    type: 'get',
    success: function(res) {
      if (res.status == 200) {
        $('.user').text(res.data.user)
      }
    }
  })
  $.fn.extend({
    tipOpen: function(str) {
      if ($(this).hasClass('tip')) {
        var html = '<p class="tip-content">' + str + '</p>';
        $(this).append(html)
      }
      $(this).on('mouseout', function() {
        $(this).find('p').remove();
      })
    }
  })
  $.ajax({
    url: "/api/getUserInfo",
    type: "get",
    success: function(res) {
      if (res.status == 200) {
        // $('.icon img').prop('src',res.data.icon);
        var img = $('.icon img')[0];
        img.src = './img/code.png'
        var newImg = new Image();
        newImg.src = res.data.icon;
        newImg.onerror = () => { // 图片加载错误时的替换图片
          newImg.src = './img/code.png';
        }
        newImg.onload = () => { // 图片加载成功后把地址给原来的img
          img.src = newImg.src
        }
        $('.user-name').text(res.data.name);
        // $('.user-name').on('mouseover',function(){
        //   $(this).tipOpen('哈哈')
        // })
      } else {
        location.href = 'login'
      }
    }
  })
})
