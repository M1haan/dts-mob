const mainNav = document.querySelector('.navigation__list');
const navToggle = document.querySelector('.header__toggle');
const socialIcon = document.querySelector('.navigation__social');
mainNav.classList.remove('navigation__list--nojs');
navToggle.classList.remove('header__toggle--nojs');


if (!mainNav.classList.contains('navigation__list--closed')) {
  mainNav.classList.add('navigation__list--closed');
  socialIcon.classList.add('social--visibility');
}

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('navigation__list--closed');
  mainNav.classList.toggle('navigation__list--open');
  navToggle.classList.toggle('header__toggle--open');
  navToggle.classList.toggle('header__toggle--closed');
  socialIcon.classList.toggle('social--visibility');
  socialIcon.classList.toggle('social--hidden');
});

