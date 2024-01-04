// import Swiper from 'swiper';

function initHeroSwiper() {
  let heroSwiper = new Swiper('.swiper-hero', {
    /* navigation: {
      nextEl: '.button-slider--next',
      prevEl: '.button-slider--prev',
    }, */

    pagination: {
      el: '.swiper-pagination',
    },

    // autoplay: {
    //   delay: 5000,
    // },

    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    slidesPerView: 1,
    speed: 2000,
  });
  return heroSwiper;
}

function initPartnersSwiper() {

  let partnersSwiper = new Swiper('.swiper-partners', {

    direction: 'horizontal',
    loop: true,
    speed: 2000,

    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      390: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 6,
      },
      1920: {
        spaceBetween: 70,
        slidesPerView: 8,
      },
    },
  });
  return partnersSwiper;
}

function initReviewsSwiper() {
  let reviewsSwiper = new Swiper('.reviews__slider-container', {

    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 5000,
    },
  });
  return reviewsSwiper;
}

export {initHeroSwiper, initPartnersSwiper, initReviewsSwiper};
