const arr = Array.from({ length: 10 }, (_, i) => i + 1);

const sumArr = (arr, acc = 0) => {
  if (!arr.length) {
    return acc;
  }

  const sum = acc + arr.pop();
  return sumArr(arr, sum);
};

console.log(sumArr(arr));
