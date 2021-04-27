const validator = {
  table: [
    (element) => !['symbol', 'function', 'undefined'].includes(typeof element),
    (element) => !Number.isNaN(element),
    (element) => !(typeof element === 'object' && element === null),
    (element) => !(element === Infinity || element === -Infinity || element === Math.max() || element === Math.min()),
  ],

  router(element) {
    return this.table.every((valid) => valid(element));
  },
};

const string = {
  table: {
    ['"']: () => '\\"',
    ['\\']: () => '\\\\',
    ['\t']: () => '\\t',
    ['\r']: () => '\\r',
    ['\n']: () => '\\n',
    ['\f']: () => '\\f',
    ['\b']: () => '\\b',
    ['\v']: () => '\\u000b',
  },

  router(element) {
    return this.table[element]?.(element) ?? String(element);
  },
};

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
    switch (true) {
      case Array.isArray(currEl):
        stack.push([arr, acc, i + 1]);
        return recursive(arr[i], acc, i + 1, stack);
      case typeof currEl === 'object':
        acc.push('{' + arr[i] + '}');
        return recursive(arr[i], acc, i + 1, stack);
      default:
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

const arr = [1, 2, [3, { a: 'b' }, 4], 5, { b: 'c' }[(6, [7, [8]])]];

console.log(stringify(arr));
