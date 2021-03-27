const arr = Array.from({ length: 10 }, (_, i) => i + 1);

const sumArr = ([...arr]) => {
  let acc = 0;
  for (let i = 0; i < arr.length; ) {
    acc += arr.pop();
  }

  return acc;
};

console.log(sumArr(arr));
