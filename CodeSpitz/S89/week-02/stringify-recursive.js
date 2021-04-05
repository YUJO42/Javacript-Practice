const arr = [1, 'abc', true, undefined, null, [123, '123'], (_) => 3, Symbol(), 'a\t\f\v\n\r~\b'];

const validator = {
  data: [
    (element) => !['symbol', 'function', 'undefined'].includes(typeof element),
    (element) => !Number.isNaN(element),
    (element) => !(typeof element === 'object' && element === null),
    (element) => !(element === Infinity || element === -Infinity || element === Math.max() || element === Math.min()),
  ],

  validate(element) {
    return this.data.every((valid) => valid(element));
  },
};

const characterToString = (char) => {
  const escapeMap = {
    ['"']: '\\"',
    ['\\']: '\\\\',
    ['\t']: '\\t',
    ['\r']: '\\r',
    ['\n']: '\\n',
    ['\f']: '\\f',
    ['\b']: '\\b',
    ['\v']: '\\u000b',
  };

  return escapeMap[char] ? escapeMap[char] : char;
};

const escapeString = (value, i) => {
  return i < 1 ? characterToString(value[i]) : `${escapeString(value, i - 1)}${characterToString(value[i])}`;
};

const arrayStringify = (arr, i) => {
  return i < 1 ? stringify(arr[i]) : `${arrayStringify(arr, i - 1)},${stringify(arr[i])}`;
};

const stringify = (value) => {
  if (typeof value === 'bigint') {
    throw new Error('Do not know how to serialize a BigInt');
  }

  if (!validator.validate(value)) {
    return 'null';
  }

  if (typeof value === 'string') {
    return `"${escapeString(value, value.length - 1)}"`;
  }

  if (Array.isArray(value)) {
    return `[${arrayStringify(value, value.length - 1)}]`;
  }

  return typeof value === 'string' ? `"${value}"` : String(value);
};

const _stringify_recursive = (arr, i) => {
  return i < 1 ? stringify(arr[i]) : `${_stringify_recursive(arr, i - 1)},${stringify(arr[i])}`;
};

const stringify_recursive = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Parameter is not array.');
  if (arr.length < 1) return '[]';

  return `[${_stringify_recursive(arr, arr.length - 1)}]`;
};

console.log('JSON.stringify : ', JSON.stringify(arr));
console.log('My Stringify   : ', stringify_recursive(arr));
console.log(JSON.stringify(arr) === stringify_recursive(arr));
