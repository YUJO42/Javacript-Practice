const arr = Array.from({ length: 10 }, (_, i) => i + 1);

const sumArr = ([...arr], acc = 0) => {
  return arr.length ? sumArr(arr, acc + arr.pop()) : acc;
};

console.log(sumArr(arr));
