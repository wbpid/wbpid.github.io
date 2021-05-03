const APP = {
  REQ: [],
  req: (u, c)=>{
    $.ajax({
      method: 'GET',
      url: u,
      beforeSend: ()=> APP.loader(true),
      complete: ()=> APP.loader(false)
    }).done(r => c(r)).fail((x, s, e)=>{
      if(e){
        APP.toast('Error, please check console for details');
        console.log(e);
      }
      else APP.toast(s);
    });
  },
  loader: s =>{
    const l = $('#loader');
    if(s){
      if(typeof s == 'number'){
        l.show();
        setTimeout(()=>{
          l.hide();
        }, s);
      } else {
        if(APP.REQ.length == 0) l.show();
        APP.REQ.push(1);
      }
    } else {
      if(APP.REQ.length > 0) APP.REQ.pop();
      if(APP.REQ.length == 0) l.hide();
    }
  },
  TOAST: null,
  toast: m =>{
    if(APP.TOAST) clearTimeout(APP.TOAST);
    const t = $('#toast');
    t.show().find('p').text(m);
    APP.TOAST = setTimeout(()=>{
      APP.TOAST = null;
      t.hide();
    }, 3000);
  },
  copy: e =>{
    $(e).select();
    document.execCommand('copy');
    APP.toast('Teks telah disalin');
  },
  preventDefault: e =>{
    e.preventDefault();
    return false;
  }
};

const FEED = {
  u1: 'https://'+ location.hostname +'/search',
  u2: 'https://'+ location.hostname +'/feeds/posts/default',
  u3: m => '?alt=json&max-results='+ m,
  search: ()=>{
    const s = $('#searchbar');
    if(+$('[name=searchbar]:checked').val()) location.assign(encodeURI(FEED.u1 +'/label/'+ s.find('select').val()));
    else {
      const q = s.find(':text').val().trim();
      q ? location.assign(encodeURI(FEED.u1 +'?q='+ q)) : APP.toast('Kata kunci tidak boleh kosong');
    }
  }
};

$(document).ready(()=>{  
  const d = new Date();
  const h = d.getHours();
  $('#body').addClass(((h >= 5 && h <= 6) || (h >= 16 && h <= 17))? 'bg-sunny' : (h >= 7 && h <= 15)? 'bg-day' : 'bg-night');
  $('.what-time-is').text((h >= 3 && h <= 10)? 'pagi' : (h >= 11 && h <= 14)? 'siang' : (h >= 15 && h <= 17)? 'sore' : 'malam');
  $('.copyright-year').text(d.getFullYear());
  $('form').submit(APP.preventDefault).trigger('reset');
  $(':radio').change(function(){
    $('[name='+ $(this).attr('name') +']').removeAttr('checked');
    $(this).attr('checked', true);
  });
  $('#searchbar :radio').change(function(){
    const s = $('.searchbar');
    s.hide();
    s.eq(+$(this).val()).show();
  });
  $('[data-pattern]').on('input', function(){
    $(this).val($(this).val().replace(new RegExp(('[^'+ $(this).attr('data-pattern') +']'), 'gim'), ''));
  });
});