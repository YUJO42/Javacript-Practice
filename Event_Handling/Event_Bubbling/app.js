const $divs = document.querySelectorAll('div');
$divs.forEach(function (div) {
  div.addEventListener('click', logEvent);
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
