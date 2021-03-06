const SLIDE = {
  index: 0,
  left: ()=>{
    if(SLIDE.index == 1) SLIDE.show(0);
  },
  right: ()=>{
    if(SLIDE.index == 0) SLIDE.show(1);
  },
  show: n =>{
    SLIDE.index = n;
    const s = $('.slide');
    s.eq(0).addClass('w3-animate-zoom');
    s.eq(1).addClass('w3-animate-opacity');
    s.addClass('w3-hide-small w3-hide-medium');
    s.eq(n).removeClass('w3-hide-small w3-hide-medium');
  }
};

$(document).ready(()=>{
  const a = $('.a-slide');
  $('#body').scroll(function(){
    if(a.length > 0){
      const h = $(this).height();
      const s = $(this).scrollTop();
      a.each(function(){
        const t = $(this).offset().top;
        if(((h+s)-(s+t)) > 50){
          $(this).find('.a-left').addClass('w3-animate-left');
          $(this).find('.a-right').addClass('w3-animate-right');
          $(this).removeClass('a-slide');
        }
      });
    }
  });
  const c = $('.code');
  c.eq(0).find('code').text('\n function tambah(a, b){\n   return a + b;\n }\n function kurang(a, b){\n   return a - b;\n }\n\n console.log(tambah(1, 2));\n console.log(kurang(9, 4));\n ');
  c.eq(1).find('code').text('\n body {\n   background: blue;\n }\n h1 {\n   text-align: center;\n }\n p {\n   font-size: 20px;\n }\n ');
  c.eq(2).find('code').text('\n <html>\n   <head>\n     <title>Nama web</title>\n   </head>\n   <body>\n     <h1>Judul artikel</h1>\n     <p>Paragraf</p>\n   </body>\n </html>\n ');
  c.click(()=>{
    const r = e =>{
      if($(e).hasClass('code1')) $(e).removeClass('code1').addClass('code2');
      else if($(e).hasClass('code2')) $(e).removeClass('code2').addClass('code3');
      else $(e).removeClass('code3').addClass('code1');
    };
    r('.code.html');
    r('.code.css');
    r('.code.javascript');
  });
});