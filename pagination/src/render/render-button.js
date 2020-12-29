const buttonTemplate = (number) => {
  return `<button id="number-button">${number}</button>`;
};

const getItemLength = (items, number) => {
  if (items % number === 0) {
    return Math.floor(items.length / number);
  }
  return Math.floor(items.length / number) + 1;
};

export const renderButton = (items, number) => {
  const $buttonContainer = document.querySelector('#button-container');
  const length = getItemLength(items, number);

  for (let i = 1; i <= length; i++) {
    $buttonContainer.insertAdjacentHTML('beforeend', buttonTemplate(i));
  }
};
