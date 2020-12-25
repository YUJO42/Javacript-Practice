const items = [];
for (let i = 1; i <= 12; i++) {
  items.push({
    id: i,
    data: `dummy data ${i}`,
  });
}

const tableInfoTemplate = ({ id, data }) => {
  return `<tr>
            <td>${id}</td>
            <td>${data}</td>
          </tr>`;
};

const renderTable = () => {
  const $mainTable = document.querySelector('.main-table');
  items.forEach((item, index) => {
    $mainTable.insertAdjacentHTML('beforeend', tableInfoTemplate(item));
  });
};

const buttonTemplate = (number) => {
  return `<button id="number-button">${number}</button>`;
};

const getItemLength = () => {
  if (items % 10 === 0) {
    return Math.floor(items.length / 10);
  }
  return Math.floor(items.length / 10) + 1;
};

const renderButton = () => {
  const $buttonContainer = document.querySelector('#button-container');
  const length = getItemLength();

  for (let i = 1; i <= length; i++) {
    $buttonContainer.insertAdjacentHTML('beforeend', buttonTemplate(i));
  }
};

window.onload = () => {
  renderButton();
  renderTable();
};
