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
