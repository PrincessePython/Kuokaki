// ==================================== version jQuery =================================
// $(function() {
// alert ("It works, the JS file is integrated !");

// var transitionTime = 1500;
// Fade in des sections au scroll
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

// ==================================== titles version JS =================================

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


// ==================================== carrousel Swiper =================================
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  // loop: true,
  // loopAdditionalSlides: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

});

// ======================================== Burger Header ======================================

// function toggleMenu(){
//   const burgerMenu = document.querySelector(".burger-menu-opened");
//   const burgerOverlay = document.querySelector(".burger-overlay");

//   if (burgerMenu.classList.contains("active")) {
//     burgerMenu.classList.remove(".active");
//     burgerOverlay.classList.remove(".active");
//   }else{
//     burgerMenu.classList.add(".active"); 
//     burgerOverlay.classList.add(".active"); 
//   }

// }
// window.addEventListener('click', toggleMenu);

// ******? logique 2 **************
/*
1. je clique sur l'icon de burger menu  (.burger-menu-icon)
  -> created in html in nav .main-navigation
  -> add class active

  1.1 function js 'click' that executes the following action :
    ->function that toggles the display property once clicked
    

    1.1.1 New full screen window openes with menu 
      -> create this 'page' in html
      -> style it with css
      -> animate with  @keyframes all the flowers and cats

      function : 
        1. give a name to the function
        2. aim with query seceltor on the botton .burger-menu-icon
          -> add on click event listenner
          -> check if it's clicked : PROBLEME IS HERE
          -> if this botton is clicked -> display the .burger-menu-opened.active
          -> if not, keeps the inital site appereance
        3. call the function
        

*/
function openBurgerMenu() {
  const menuButton = document.querySelector('burger-menu-icon');
  // check if it's clicked 
  menuButton.addEventListener('click', () => {
    console.log('botton was clicked !');
  })
}

// ======================================= Clouds ======================================
const clouds = document.querySelector('.clouds');
const cloud1 = document.querySelector('.cloud-1');
const cloud2 = document.querySelector('.cloud-2');


window.addEventListener('scroll', function () {
  //when the scrolling position arrives on the 1355px, clouds will move
  // inside their container .cloud (size = 300px?) and during the scroll of 
  // 699px height. Total size of move is 300px
  // transform translateX 300 px - > ? 
  const currentPosition = document.documentElement.scrollTop
  // console.log(currentPosition);
  if (currentPosition >= 1300 && currentPosition <= 2400) {
    console.log('CLOUDS MOVING !');
    // cloud1 transform translateX + considering the width of the container .clouds 
    // cloud2 transform translateX
  } else {
    console.log('i am not in the zone :(')
    // rien de se passe ici. pas d'animation.
  };

});

// ============================================ Sections ================================

const sections = document.querySelectorAll('section');
console.log(sections);

function fadeInSections() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    if (rect.top <= viewHeight * 0.8) {
      section.classList.add('fade-in');
    }
  });
}
window.addEventListener('scroll', fadeInSections);

