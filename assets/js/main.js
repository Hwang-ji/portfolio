// menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach(n => n.addEventListener("click", linkAction));

// swiperProjects
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // mousewheel: true,
  // keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

// scroll sections active link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// show scroll up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUpBtn.classList.add("show-scroll")
    : scrollUpBtn.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// change background header
const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 100,
  //reset: true /* Animation repeat */,
});

sr.reveal(`.projects__container, .footer__container`);
sr.reveal(`.home__images img`, { delay: 300, origin: "bottom", interval: 100 });
sr.reveal(`.skills__content:nth-child(1),.contact__content`, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2)`, {
  origin: "right",
});
sr.reveal(`.qualification__content, .services__card`, { interval: 100 });
