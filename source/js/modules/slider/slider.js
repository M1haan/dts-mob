function initHeroSwiper() {
  let heroSwiper = new Swiper('.hero-swiper', {

    pagination: {
      el: '.hero__pagination',
      clickable: true,
      spaceBetween: 50,
    },

    direction: 'horizontal',
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
      delay: 0,
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
    speed: 1500,
    autoplay: {
      delay: 1000,
    },

    breakpoints: {
      390: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1440: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      1920: {
        slidesPerView: 1,
      },
    },
  });
  return reviewsSwiper;
}

function initProjectsSwiper() {

  let projectsSwiper = new Swiper('.swiper-projects', {
    pagination: {
      el: '.projects__pagination',
      clickable: true,
    },
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 2000,

    breakpoints: {
      390: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1440: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
      1920: {
        spaceBetween: 50,
        slidesPerView: 2,
      },
    },
  });
  return projectsSwiper;
}

export {initHeroSwiper, initPartnersSwiper, initReviewsSwiper, initProjectsSwiper};
