function setUp() {
  var btn = document.getElementById("btn-1");
  var section2 = document.getElementById("section-2");
  
  window.loaction.replace = "https://pontesdaterra.org/";

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    var id = btn.getAttribute('href');
    var targetOffset = section2.offsetTop;
    section2.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  });
}

// function redirect() {
//   window.loaction.replace = "https://pontesdaterra.org/";
// }

// redirect();

// $('.nav a[href^="#"]').on('click', function(e) {
//   e.preventDefault();
//   var id = $(this).attr('href'),
//       targetOffset = $(id).offset().top;
      
//   $('html, body').animate({ 
//     scrollTop: targetOffset - 100
//   }, 500);
// });

window.onload = setUp;

