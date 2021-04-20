const arrToString = (arr) => {
  let accStr = '';

  for (const v of arr) {
    accStr += ',' + v;
  }
  return '[' + accStr.substr(1) + ']';
};

const elementToString = (v) => '' + v;

const recursive = (arr, acc, i, stack) => {
  if (i < arr.length) {
    const currEl = arr[i];
    if (Array.isArray(currEl)) {
      stack.push([arr, acc, i + 1]);
      return recursive(arr[i], acc, i + 1, stack);
    } else {
      acc.push(elementToString(arr[i]));
      return recursive(arr, acc, i + 1, stack);
    }
  } else {
    let accStr = arrToString(acc);
    const prev = stack.pop();
    if (prev) {
      const [prevArr, prevAcc, prevIndex] = prev;
      prevAcc.push(accStr);
      return recursive(prevArr, prevAcc, prevIndex, stack);
    } else {
      return accStr;
    }
  }
};

const stringify = (arr) => recursive(arr, [], 0, []);

const arr = [1, 2, [3, 4], 5, [6, [7, [8]]]];

console.log(stringify(arr));
