function codeEditor(){
  const t = $('#x-editor textarea');
  const w = window.open('', 'x-frame').document;
  w.open();
  w.write('<!DOCTYPE html><html><head><base href="https://wbpid.github.io/"/><style>'+ t.eq(1).val() +'</style></head><body>'+ t.eq(0).val() +'<script>'+ t.eq(2).val() +'</script></body></html>');
  w.close();
}

window.addEventListener('load', ()=>{
  setTimeout(codeEditor, 100);
  const b = $('.x-btn');
  const t = $('#x-editor textarea');
  b.click(function(){
    const i = b.index(this);
    b.removeClass('w3-border-gray');
    b.eq(i).addClass('w3-border-gray');
    t.hide();
    t.eq(i).show();
  });
});
