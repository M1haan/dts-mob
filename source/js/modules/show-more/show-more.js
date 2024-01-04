/* const moreLinkClickHandler = (evt) => {
  const element = evt.target.closest('a.life-cycle__more');

  if (!element) {
    return;
  }
  evt.preventDefault();

  const ContentContainer = element.closest('.life-cycle__list');
  const descriptionElement = ContentContainer.querySelector('.life-cycle__item');

  if (descriptionElement) {
    descriptionElement.classList.toggle('short');
    element.textContent = descriptionElement.classList.contains('short') ? 'показать еще' : 'Скрыть';
  }
};

const buttonShowMore = document.querySelector('.life-cycle__more');
buttonShowMore.addEventListener('click', moreLinkClickHandler);
 */

const showMore = document.querySelector('.life-cycle__more');
// const item = document.querySelectorAll('.life-cycle__item');

showMore.addEventListener('click', () => {
  const arr = Array.from(document.querySelector('.life-cycle__list').children);

  arr.forEach((el) => el.classList.add('is-visible'));
  showMore.style.display = 'none';
  // showMore.textContent = arr.classList.contains('is-visible') ? 'Еще.' : 'Скрыть';
});
