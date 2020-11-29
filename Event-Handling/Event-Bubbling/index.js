const $one = document.querySelector('.one');
$one.addEventListener('click', ({ target }) => {
  if (target.className === 'one') {
    console.log('asd');
  }
});
