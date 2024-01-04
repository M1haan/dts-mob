// import Swiper from 'swiper';

function initHeroSwiper() {
  let heroSwiper = new Swiper('.swiper-hero', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // autoplay: {
    //   delay: 5000,
    // },

    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    speed: 2000,
  });
  return heroSwiper;
}

function initPartnersSwiper() {

  let partnersSwiper = new Swiper('.swiper-partners', {

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
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
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    // speed: 1500,
    // autoplay: {
    //   delay: 5000,
    // },
  });
  return reviewsSwiper;
}

export {initHeroSwiper, initPartnersSwiper, initReviewsSwiper};
