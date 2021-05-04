RESULT.search = d =>{
  RESULT.data = d.feed.entry ? d.feed.entry.sort(()=> Math.random()-0.5) : [];
  $('#search-detail span').eq(0).text(RESULT.data.length);
  RESULT.load();
};
RESULT.pages = ()=>{
  const p = Math.ceil(RESULT.data.length/7);
  return (p > 1)? p : 1;
};
RESULT.previous = ()=>{
  if(RESULT.page > 1){
    RESULT.page -= 1;
    RESULT.load();
  }
};
RESULT.next = ()=>{
  if(RESULT.page < RESULT.pages()){
    RESULT.page += 1;
    RESULT.load();
  }
};
RESULT.load = ()=>{
  APP.loader(900);
  const e = [...RESULT.data].splice(((RESULT.page-1)*7),7);
  if(e.length > 0) $('#search-result').html(RESULT.articles(e));
  else {
    const r = $('.search-result');
    r.hide();
    r.eq(1).show();
  }
  const p = $('#search-pages span');
  p.eq(0).text(RESULT.page);
  p.eq(1).text(RESULT.pages());
  scrollTop();
};

$(document).ready(()=>{
  RESULT.page = 1;
  const d = $('#search-detail span').eq(1);
  if(+$('#search-query').val()){
    const q = new URL(location.href).searchParams.get('q');
    d.text('kata kunci "'+ q +'"');
    APP.req(FEED.u2 + FEED.u3(1000) +'&q='+ q, RESULT.search);
  } else {
    const p = new URL(location.href).pathname;
    const l = p.slice((p.lastIndexOf('/')+1), p.length);
    d.text('kategori "'+ l +'"');
    APP.req(FEED.u2 +'/-/'+ l + FEED.u3(1000), RESULT.search);
  }
});