// ==================================== version jQuery =================================
// $(function() {
// // alert ("It works, the JS file is integrated !");

// var transitionTime = 1500;
// // Fade in des sections au scroll
// $(window).scroll(function() {
//     var scrolledFromTop = $(window).scrollTop() + $(window).height();
//     $("section, footer").each(function() {
//         var distanceFromTop = $(this).offset().top;
//         if (scrolledFromTop >= distanceFromTop) {
//             $(this).animate({
//                'top': '0',
//                'opacity':'1'
//             }, transitionTime);
//         }
//     });
// });

// });

// ==================================== version JS =================================

const titles = document.querySelectorAll('.fade-in-scroll');

function fadeInTitles() {
  titles.forEach((title) => {
    const rect = title.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    if (rect.top <= viewHeight * 0.8) {
      title.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', fadeInTitles);
