import { items } from '../store/items.js';

const tableTemplate = `<tr>
                         <th>ID</th>
                         <th>NAME</th>
                       </tr>`;

const tableInfoTemplate = ({ id, data }) => {
  return `<tr>
            <td>${id}</td>
            <td>${data}</td>
          </tr>`;
};

const renderRange = (targetPageNumber, index) => {
  if (Math.floor(index / 10) === targetPageNumber) {
    return true;
  }
  return false;
};

export const renderTable = (targetPageNumber) => {
  const $mainTable = document.querySelector('.main-table');
  $mainTable.innerHTML = tableTemplate;

  items().forEach((item, index) => {
    if (renderRange(targetPageNumber, index)) {
      $mainTable.insertAdjacentHTML('beforeend', tableInfoTemplate(item));
    }
  });
};
