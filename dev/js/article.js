$(document).ready(()=>{
  $('#article-body').on('select copy cut', APP.preventDefault);
  $('.preview').find('button.active').click(function(){
    const a = $(this).parent().parent();
    const b = a.find('button');
    const p = a.find('pre');
    const c = a.find('code');
    const i = b.index(this);
    if(i < 3){
      b.removeClass('w3-border-gray');
      b.eq(i).addClass('w3-border-gray');
      p.hide();
      p.eq(i).show();
    } else {
      const w = window.open('/p/code-editor.html');
      $(w).on('load', ()=>{
        [0,1,2].forEach((n, d)=>{
          d = c.eq(n).text();
          if(d) $(w.document).find('#x-editor textarea').eq(n).val(d);
        });
      });
    }
  });
});