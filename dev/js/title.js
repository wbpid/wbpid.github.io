function scrollTitle(x){
  $('#body').animate({scrollTop:x}, 900);
  $('#title-nav').hide();
}

window.addEventListener('load', ()=>{
  setTimeout(()=>{    
    if($('h1 div').length > 0){
      let x1, x2, n = '';
      $('h1 div').each(function(){
        x1 = $(this).offset().top;
        x2 = (window.innerWidth > 600)? 150 : 80;
        n += '<button onclick="scrollTitle('+ Math.round(x1 - x2) +')" class="w3-bar-item w3-hover-light-gray w3-button">'+ $(this).text() +'</button>';
      });
      $('#title-nav nav').html(n);
    }
    else $('#title-nav, .title-nav').remove();
  }, 30);
});
