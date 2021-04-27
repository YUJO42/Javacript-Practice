const objEntries = function* (obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      yield [k, obj[k]];
    }
  }
};

const convert = (v) => '' + v;

const accToString = (isObject, acc) => {
  const [START, END] = isObject ? '{}' : '[]';
  let result = '';

  if (acc.prev) {
    let curr = acc;
    do {
      result = ',' + (isObject ? `"${curr.value[0]}": ${convert(curr.value[1])}` : convert(curr.value)) + result;
    } while ((curr = curr.prev));
    result = result.substr(1);
  }

  return START + result + END;
};

const recursive = (iter, isObject, acc, prev) => {
  const { done, value } = iter.next();

  if (!done) {
    const v = isObject ? value[1] : value;

    switch (true) {
      case Array.isArray(v):
        return recursive(v[Symbol.iterator](), false, null, {
          target: iter,
          isObject,
          k: isObject ? value[0] : '',
          acc,
          prev,
        });
      case v && typeof v === 'object':
        return recursive(objEntries(v), true, null, { target: iter, isObject, acc, k: isObject ? value[0] : '', prev });
      default:
        return recursive(iter, isObject, { prev: acc, value }, prev);
    }
  } else {
    let accStr = accToString(isObject, acc);
    if (prev) {
      return recursive(prev.target, prev.isObject, {
        prev: prev.acc,
        value: prev.isObject ? [prev.k, accStr] : accStr,
      });
    } else {
      return accStr;
    }
  }
};

const stringify = (v) =>
  recursive(Array.isArray(v) ? v[Symbol.iterator]() : objEntries(v), !Array.isArray(v), null, null);

console.log(stringify({ a: 3, b: 5, c: [1, (2)[(3, 4, { a: 4, b: 5 }, 7)], 3], d: 3 }));
console.log(stringify({ a: [1, 2], b: 3 }));
