import Swiper from 'swiper';
import device from 'current-device';

let teamSlider = new Swiper('.team-slider', {
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
    767: {
      slidesPerView: 1,
    },
  }
});

if (device.tablet()) {
  teamSlider.slideTo(1);
}



let lookSlider = new Swiper('.look-slider', {
  speed: 400,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoHeight: true
});
