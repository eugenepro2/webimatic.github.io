import Swiper from 'swiper';

let mySwiper = new Swiper('.team-slider', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 25,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 320px
    375: {
      slidesPerView: 1,
    },
  }
});
