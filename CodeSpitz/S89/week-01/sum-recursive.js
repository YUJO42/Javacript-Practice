const arr = Array.from({ length: 10 }, (_, i) => i + 1);

const sumArr = (arr) => {
  return arr.length && arr.shift() + sumArr(arr);
};

console.log(sumArr(arr));
