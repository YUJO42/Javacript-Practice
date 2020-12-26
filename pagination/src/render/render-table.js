import { items } from '../store/items.js';

const tableInfoTemplate = ({ id, data }) => {
  return `<tr>
            <td>${id}</td>
            <td>${data}</td>
          </tr>`;
};

export const renderTable = (number) => {
  const $mainTable = document.querySelector('.main-table');
  items().forEach((item, index) => {
    $mainTable.insertAdjacentHTML('beforeend', tableInfoTemplate(item));
  });
};
