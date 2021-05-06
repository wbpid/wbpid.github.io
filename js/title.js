const TITLE = {
  open: ()=>{
    let x1, x2, x3, n = '';
    $('h1 div').each(function(){
      x1 = $('#body').scrollTop();
      x2 = $(this).offset().top;
      x3 = (window.innerWidth > 600)? 150 : 80;
      n += '<button onclick="TITLE.scroll('+ Math.round(x1 + (x2 - x3)) +')" class="w3-bar-item w3-hover-light-gray w3-button">'+ $(this).text() +'</button>';
    });
    $('#title-nav').show().find('nav').html(n);
  },
  scroll: x =>{
    $('#body').animate({scrollTop:x}, 800);
    $('#title-nav').hide();
  }
};

$(document).ready(()=>{
  if($('h1 div').length == 0) $('#title-nav, .title-nav').remove();
});
