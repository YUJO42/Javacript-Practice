const arr = [1, 2, ['a', [1, 2], false], 3, ['b', 'c', [1, 2]]];

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

const stringify = (element) => {
  if (typeof element === 'bigint') {
    throw new Error('Do not know how to serialize a BigInt');
  }

  if (!validator.router(element)) {
    return 'null';
  }

  if (typeof element === 'string') {
    return `"${string.router(element, element.length - 1)}"`;
  }

  if (Array.isArray(element)) {
    return `${loop(element)}`;
  }

  return typeof element === 'string' ? `"${element}"` : String(element);
};

const loop = (arr) => {
  if (!Array.isArray(arr)) throw Error('Parameter is not array.');
  if (arr.length < 1) return '[]';

  let i = arr.length;
  let acc = '';
  while (i--) {
    acc = acc.length ? `${stringify(arr[i])},${acc}` : `${stringify(arr[i])}`;
  }

  return `[${acc}]`;
};

console.log('JSON.stringify : ', JSON.stringify(arr));
console.log('My Stringify   : ', loop(arr));
console.log(JSON.stringify(arr) === loop(arr));
