// Для описания карточек жизненного цикла
const buttonShowMore = document.querySelectorAll('.life-cycle__link');

const moreLinkClickHandler = (evt) => {
  const element = evt.target.closest('a.life-cycle__link');

  if (!element) {
    return;
  }
  evt.preventDefault();

  const cardContainer = element.closest('.life-cycle__item');
  const descriptionElement = cardContainer.querySelector('.life-cycle__description');

  if (descriptionElement) {
    descriptionElement.classList.toggle('life-cycle__description--short');
    element.textContent = descriptionElement.classList.contains('life-cycle__description--short') ? 'Еще...' : 'Скрыть';
  }
};

buttonShowMore.forEach(function (link) {
  link.addEventListener('click', moreLinkClickHandler);
});

// Для ограничения количества отображаемых карточек в блоке жизненный цикл
const showMore = document.querySelector('.life-cycle__more');

showMore.addEventListener('click', () => {
  const arr = Array.from(document.querySelector('.life-cycle__list').children);

  arr.forEach((el) => el.classList.add('is-visible'));
  showMore.style.display = 'none';
});

// Для описания карточек в отзывах
const reviewsShowMore = document.querySelectorAll('.reviews__button');

const reviewsMoreLinkClickHandler = (evt) => {
  const element = evt.target.closest('a.reviews__button');

  if (!element) {
    return;
  }
  evt.preventDefault();

  const cardContainer = element.closest('.reviews__card');
  const descriptionElement = cardContainer.querySelector('.reviews__description');

  if (descriptionElement) {
    descriptionElement.classList.toggle('reviews__description--short');
    element.textContent = descriptionElement.classList.contains('reviews__description--short') ? 'Показать полностью' : 'Свернуть';
  }
};

reviewsShowMore.forEach(function (link) {
  link.addEventListener('click', reviewsMoreLinkClickHandler);
});
