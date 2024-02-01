// import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initHeroSwiper, initPartnersSwiper, initReviewsSwiper, initProjectsSwiper} from './modules/slider/slider';
import './modules/menu/menu';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import './modules/show-more/show-more';
import './modules/adaptive-runner/index';
import './modules/custom-select/index';


window.addEventListener('DOMContentLoaded', () => {
  // iosVhFix();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initHeroSwiper();
    initTabs();
    initPartnersSwiper();
    initProjectsSwiper();
    initAccordions();
    initReviewsSwiper();
  });
});


// import { onModalKeydown } from './form.js';
// const submitButton = document.querySelector(".feedback__button");
const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successTemplate.querySelector('.success__button');

const onSuccessAnywhereClick = (evt) => {
  if (evt.target === successTemplate) {
    successTemplate.remove();
    document.removeEventListener('click', onSuccessAnywhereClick);
    document.removeEventListener('keydown', onSuccessKeydown);
  }
};

function onSuccessKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (successTemplate) {
      successTemplate.remove();
    }
  }
}

const onSuccessButtonClick = () => {
  if (successTemplate) {
    successTemplate.remove();
  }
};

const showSuccessMessage = () => {
  successTemplate.cloneNode(true);
  body.append(successTemplate);
  document.addEventListener('keydown', onSuccessKeydown);
  document.addEventListener('click', onSuccessAnywhereClick);
};

successButton.addEventListener('click', onSuccessButtonClick);

export {showSuccessMessage};
