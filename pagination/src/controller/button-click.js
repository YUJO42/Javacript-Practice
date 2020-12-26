import { renderTable } from '../render/render-table.js';

export const buttonClick = () => {
  const $buttonContainer = document.querySelector('#button-container');

  $buttonContainer.addEventListener('click', ({ target }) => {
    if (target.nodeName === 'BUTTON') {
      renderTable(Number(target.innerHTML) - 1);
    }
  });
};
