import { items } from '../store/items.js';
import { SHOWING_PAGE_NUMBER } from '../store/constant.js';

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

export const renderTable = (targetPageNumber) => {
  const $mainTable = document.querySelector('.main-table');
  $mainTable.innerHTML = tableTemplate;

  items().forEach((item, index) => {
    if (
      targetPageNumber * 10 < index + 1 &&
      index + 1 <= targetPageNumber + 1 * SHOWING_PAGE_NUMBER
    ) {
      $mainTable.insertAdjacentHTML('beforeend', tableInfoTemplate(item));
    }
  });
};
