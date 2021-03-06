const TESTI = [
  {
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Annisa Putri',
    city: 'Bandung, Jawa Barat.',
    msg: 'Terima kasih kepada WBP yang telah membantu saya dalam mengenal dunia pemrograman. Materinya mudah dipahami dan sangat bermanfaat. Walaupun materinya gratis, tetapi sangat berbobot dan berkualitas.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Faizal Azmi',
    city: 'Semarang, Jawa Tengah.',
    msg: 'WBP ini sangat informatif dan bermanfaat bagi siapapun yang hendak mengenal dunia pemrograman. Hal ini dikarenakan materi pendekatan dan bahasa yang digunakan sangatlah ringan, menjadikan saya mudah memahami tentang pemrograman dari 0 dan tidak buta arah untuk menentukan langkah selanjutnya.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Aryani Agista',
    city: 'Surabaya, Jawa Timur.',
    msg: 'WBP ini benar-benar memberikan pemahaman yang baik tentang ilmu pemrograman. Dengan bahasa yang menarik dan mudah dipahami. Saya selaku orang non-IT dapat memahami materinya dengan sangat baik.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Rosyid Trianggana',
    city: 'Banjarmasin, Kalimantan Selatan.',
    msg: 'Setelah belajar di WBP, saya menyadari betapa pentingnya basic yang kuat bagi seorang programmer. Sebab, bangunan yang tinggi dan besar juga haruslah memiliki pondasi yang kuat.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Heni Marsyanti',
    city: 'Pekanbaru, Riau.',
    msg: 'Senang sekali rasanya bisa mengenal WBP. Materinya jelas, terstruktur, dan lengkap. Tidak hanya sekedar teori tetapi ada contoh kasusnya juga sehingga bisa langsung dipraktekin. Terima kasih WBP.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Ryan Pradita',
    city: 'Makassar, Sulawesi Selatan.',
    msg: 'WBP mengajarkan saya bagaimana membuat sebuah website dengan ilmu fundamental yang sangat baik. Materi yang diberikan tidak hanya mudah dipahami tetapi juga memberikan habbit bagaimana menulis kode yang baik dan benar.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Fitri Utami',
    city: 'Kendari, Sulawesi Tenggara.',
    msg: 'Patut dijadikan salah satu referensi utama WBP ini. Sebab kita bisa kembali mengenal hal-hal dasar yang justru sering disepelekan soal pemrograman. Materinya dijelaskan secara lengkap dan tersusun rapih. Ditambah lagi dengan menggunakan bahasa yang mudah dipahami. Yang utama sih semuanya disuguhkan secara gratis. All-in banget deh pokoknya.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Arief Pratama',
    city: 'Medan, Sumatera Utara.',
    msg: 'Rekommended banget nih WBP, awalnya kukira biasa-biasa aja mengingat banyaknya web belajar pemrograman yang beredar di internet saat ini. Setelah membaca 1-2 materi langsung terasa bedanya, unik, simple, dan menarik. Tampilannya sederhana dan bikin kita nyaman saat membaca. Betah pengen sering-sering belajar disini.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Nurul Alfiani',
    city: 'Palembang, Sumatera Selatan.',
    msg: 'Materi yang diberikan WBP sangat membantu saya dalam mempelajari dasar-dasar ilmu pemrograman. Tadinya sempat berfikir pemrograman itu sangat rumit, ternyata memang hanya masalah logika dan algoritma. Jika kita paham dasarnya maka membuat program dengan skala apapun akan lebih mudah.'
  },{
    img: 'https://1.bp.blogspot.com/-8-kl99ByO0I/YGVHXcM26xI/AAAAAAAAAf8/Fu2PAd9Qh-sz8MuB5XWYlUoMfSHXpTH9ACLcBGAsYHQ/s0/user.jpg',
    name: 'Aditya Mahendra',
    city: 'Jakarta Selatan, DKI Jakarta.',
    msg: 'Saya mengenal WBP dari salah satu teman saya yang memang punya hobi pemrograman. Sebelumnya saya kurang tertarik karena tidak paham cara kerjanya. Setelah menyempatkan baca materi-materi dasarnya, saya bisa langsung paham karena pembawaan bahasanya benar-benar sangat mudah dipahami. Saya jadi penasaran ingin belajar lebih dalam soal pemrograman.'
  }
];

$(document).ready(()=>{
  let t = '';
  TESTI.sort(()=> Math.random()-0.5).slice(0,5).forEach(d =>{
    t += '<td class="w3-container">'+
            '<p><picture class="thumbnail"><img width="0" height="0" loading="lazy" class="responsive-img w3-circle w3-card" src="'+ d.img +'"/></picture></p>'+
            '<p>'+
              '<b class="w3-large w3-text-dark-gray">'+ d.name +'</b><br/>'+
              '<span class="w3-small w3-text-gray">'+ d.city +'</span>'+
            '</p>'+
            '<p><q>'+ d.msg +'</q></p>'+
          '</td>';
  });
  $('#testi table').html('<tr>'+ (t+t) +'</tr>').css('animation', 'testi 40s linear infinite');
});