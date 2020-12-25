const dummy = [];
for (let i = 1; i <= 100; i++) {
  dummy.push({
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
  dummy.forEach((item) => {
    $mainTable.insertAdjacentHTML('beforeend', tableInfoTemplate(item));
  });
};

const renderButton = () => {
  //
};

window.onload = () => {
  renderTable();
};
