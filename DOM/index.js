const $all = document.querySelectorAll('h1');
console.log($all);

$all.forEach((item) => (item.style.display = 'none'));
// for (const item of $all) {
//   item.style.display = 'none';
// }
