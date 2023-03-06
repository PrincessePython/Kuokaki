// ==================================== Titles  =================================

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


// ==================================== Carrousel Swiper =================================
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
      linkClicked();
    }
  })
}
openBurgerMenu();

function linkClicked(){
  const links = document.querySelectorAll("a");
  // console.log(links); // node list des liens
  const burgerMenuIcon = document.querySelector(".toggleMenuIcon");
  const closeIcon = document.querySelector(".closeIcon");
  const menu = document.querySelector('.burger-menu-opened');
  
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      burgerMenuIcon.classList.add("active");
      closeIcon.classList.remove("active");
      menu.classList.remove('active');
    });
  }
}
linkClicked();

// ======================================= Clouds ======================================

const cloudsSection = document.getElementById("place");

window.addEventListener('scroll', function() {
  const positionContainerTop = cloudsSection.offsetTop;
  
  const positionContainerBottom = positionContainerTop + cloudsSection.offsetHeight;
  const positionCurrent = window.pageYOffset;

  const clouds = document.querySelector(".clouds");
  
  // console.log(positionContainer, positionCurrent);
  if (positionCurrent > positionContainerTop && positionCurrent < positionContainerBottom) {
    clouds.classList.add('move-to-left');
  }
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

