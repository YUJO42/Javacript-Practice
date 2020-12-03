const $all = document.querySelectorAll('h1');
console.log($all);
for (const item of $all) {
  item.style.display = 'none';
}
