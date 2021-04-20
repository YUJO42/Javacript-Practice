//* if (arr.length 끝) {
//* 	if (stack에 아무것도 없냐) 진짜 끝
//* 	else 부모가 남았으니 부모를 꺼내서 계속 진행
//* }else {
//* 	if (원소가 배열이냐 {
//* 		2번 상황 stack.push(현재 배열과 인덱스 정보를 기록),
//* 		대상배열을 자식원소 배열로 대체하고 인덱스는 0으로 초기화
//* 	} else {
//* 		acc에 문자열로 바꿔서 더해줌
//* 	}
//* }

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
    return `[${_recursive(element, element.length - 1, '')}]`;
  }

  return typeof element === 'string' ? `"${element}"` : String(element);
};

const _recursive = (arr, i, acc) => {
  return i < 0
    ? acc
    : acc.length
    ? `${_recursive(arr, i - 1, `${stringify(arr[i])},${acc}`)}`
    : `${_recursive(arr, i - 1, `${stringify(arr[i])}`)}`;
};

const recursive = (arr) => {
  if (!Array.isArray(arr)) throw Error('Parameter is not array.');

  return arr.length < 1 ? '[]' : `[${_recursive(arr, arr.length - 1, '')}]`;
};

console.log('JSON.stringify : ', JSON.stringify(arr));
console.log('My Stringify   : ', recursive(arr));
console.log(JSON.stringify(arr) === recursive(arr));
