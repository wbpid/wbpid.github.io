function scrollTop(x){
  $('#body').animate({scrollTop:x}, 800);
}

const RESULT = {
  feed: d =>{
    const e = d.feed.entry.sort(()=> Math.random()-0.5).slice(0,5);
    $('#feed-result').html(RESULT.articles(e));
  },
  articles: e =>{
    let a = '';
    e.forEach(d =>{
      a += '<table style="width:100%">'+
              '<tr>'+
                '<td rowspan="2" style="vertical-align:top">'+
                  '<picture class="thumbnail w3-card-2 w3-margin-right">'+
                    '<img width="0" height="0" src="'+ d.media$thumbnail.url +'" class="reponsive-img"/>'+
                  '</picture>'+
                '</td>'+
                '<td>'+
                  '<b class="w3-large w3-text-dark-gray">'+ d.title.$t +'</b>'+
                  '<div class="w3-small w3-justify">'+ d.summary.$t.slice(0, 100) +'..</div>'+
                '</td>'+
              '</tr>'+
              '<tr>'+
                '<td class="w3-right-align">'+
                  '<p><a class="w3-btn w3-small w3-border w3-round-large" href="'+ d.link[2].href +'">Baca selengkapnya</a></p>'+
                '</td>'+
              '</tr>'+
            '</table>';
    });
    return a;
  }
};

$(document).ready(()=>{
  if(+$('#feed-related').val()){
    const l = $('#article-label').val().split(',').filter(v => v.trim() != '');
    const r = Math.floor(Math.random() * l.length);
    APP.req(FEED.u2 +'/-/'+ l[r] + FEED.u3(1000), RESULT.feed);
  }
  else APP.req(FEED.u2 + FEED.u3(10), RESULT.feed);
});
