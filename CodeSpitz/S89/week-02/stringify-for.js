const arr = [1, 'abc', true, undefined, null, [123, '123'], (_) => 3, Symbol(), 'a\t\f\v\n\r~\b'];

const isValid = (value) => {
  const convertNullType = ['symbol', 'function', 'undefined'];

  if (typeof value === 'bigint') {
    throw new Error('Do not know how to serialize a BigInt');
  }

  if (convertNullType.includes(typeof value)) {
    return false;
  }

  if (Number.isNaN(value)) {
    return false;
  }

  if (typeof value === 'object' && value === null) {
    return false;
  }

  if (value === Infinity || value === -Infinity || value === Math.max() || value === Math.min()) {
    return false;
  }

  return true;
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
  if (!isValid(value)) {
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

const stringify_for = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Parameter is not array.');
  if (arr.length < 1) return '[]';

  let str = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    str = str.length ? `${stringify(arr[i])},${str}` : `${stringify(arr[i])}`;
  }
  return `[${str}]`;
};

console.log('JSON.stringify : ', JSON.stringify(arr));
console.log('My Stringify   : ', stringify_for(arr));
console.log(JSON.stringify(arr) === stringify_for(arr));
