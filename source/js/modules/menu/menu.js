const navMain = document.querySelector('.main-header__nav');
const navToggle = document.querySelector('.main-header__toggle');
const social = document.querySelector('.main-header__social');
navMain.classList.remove('main-header__nav--nojs');

if (navMain.classList.contains('main-header__nav')) {
  navMain.classList.add('main-header__nav--closed');
}

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
    social.classList.remove('social--no-visibility');
    social.classList.add('social--visibility');
  } else {
    navMain.classList.add('main-header__nav--closed');
    navMain.classList.remove('main-header__nav--opened');
    social.classList.add('social--no-visibility');
    social.classList.remove('social--visibility');
  }
});

if (window.innerWidth >= 1440) {
  social.classList.remove('social--no-visibility');
}
