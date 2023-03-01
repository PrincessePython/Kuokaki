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

// ======================================== Burger Hero Header ======================================

function openBurgerMenu() {
  const menuButton = document.querySelector('.burger-menu-icon');
  // check if it's clicked 
  menuButton.addEventListener('click', () => {

    const burgerMenuIcon = document.querySelector(".toggleMenuIcon");
    const closeIcon = document.querySelector(".closeIcon");
    const menu = document.querySelector('.burger-menu-opened');

    if (burgerMenuIcon.classList.contains('active')) {
      burgerMenuIcon.classList.remove("active");
      closeIcon.classList.add("active");
      //ouvrir le .burger menu
      menu.classList.add('active');

    } else {
      burgerMenuIcon.classList.add("active");
      closeIcon.classList.remove("active");
      menu.classList.remove('active');
    }
  })
}
openBurgerMenu();

// *! ne fonctionne pas encore

// function openBurgerMenu() {
//   const menuButton = document.querySelector('.burger-menu-icon');
//   // check if it's clicked 
//   menuButton.addEventListener('click', () => {

//     const burgerMenuIcon = document.querySelector(".toggleMenuIcon");
//     const closeIcon = document.querySelector(".closeIcon");
//     const menu = document.querySelector('.burger-menu-opened');

//     if (burgerMenuIcon.classList.contains('active')) {
//       burgerMenuIcon.classList.remove("active");
//       closeIcon.classList.add("active");
//       //ouvrir le .burger menu
//       menu.classList.add('active');

//     } else if(closeIcon.classList.contains('active')) {
//       burgerMenuIcon.classList.add("active");
//       closeIcon.classList.remove("active");
//       menu.classList.remove('active');
//     }
//   })
// }
// openBurgerMenu();

// function linkClicked(){
//   const link = document.querySelectorAll("a");
//   link.addEventListener('click', () => {
//     console.log("hello");
//   })
// }
// linkClicked();


// ======================================= Clouds ======================================
const clouds = document.querySelector('.clouds');
const cloud1 = document.querySelector('.cloud-1');
const cloud2 = document.querySelector('.cloud-2');


window.addEventListener('scroll', function () {
  //when the scrolling position arrives on the 1355px, clouds will move
  // inside their container .cloud (size = 300px?) and during the scroll of 
  // 699px height. Total size of move is 300px
  const currentPosition = document.documentElement.scrollTop;
  // const rect = MON - VAR.getBoundingClientRect();
  // console.log(currentPosition);
  if (currentPosition >= 1355 && currentPosition <= 2400) {
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    console.log('CLOUDS MOVING !');
    // console.log(viewHeight);

    // cloud1 transform translateX + considering the width of the container .clouds 
    // cloud2 transform translateX
  } else {
    console.log('i am not in the zone :(')
    // rien de se passe ici. pas d'animation.
  };

});

// ============================================ Sections ================================

const sections = document.querySelectorAll('section');
// console.log(sections);

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

