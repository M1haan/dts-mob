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
