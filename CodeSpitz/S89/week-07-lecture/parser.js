const rNum = /^\s*([0-9]+)\s*[,]?/;
const rKey = /^\s*"((?:[^"]|\\")+)"\s*:\s*/;

// k = key
const parser = (str, acc, k, stack) => {
  let v = str.trim();

  if (!v.length) return acc;

  switch (v[0]) {
    case '[':
    case '{':
      stack.push({ acc, k });
      return parser(v.substr(1), v[0] == '[' ? [] : {}, null, stack);

    case ']':
    case '}':
      if (!stack.length) throw 'invalid json ' + v;
      const { acc: prev, k: key } = stack.pop() ?? {};
      if (!prev) {
        return acc;
      } else {
        if (prev instanceof Array) {
          prev.push(acc);
        } else {
          prev[key] = acc;
        }
        v = v.substr(1).trim();
        return parser(v[0] == ',' ? v.substr(1) : v, prev, null, stack);
      }
    default:
      if (acc instanceof Array) {
        const value = rNum.exec(v);
        if (!value) {
          throw 'invalid array value: ' + v;
        }
        acc.push(parseFloat(value[1]));
        return parser(v.substr(value[0].length), acc, null, stack);
      } else {
        if (k == null) {
          const key = rKey.exec(v);
          if (!key) throw 'invalid key: ' + v;

          return parser(v.substr(key[0].length), acc, key[1], stack);
        } else {
          const value = rNum.exec(v);
          if (!value) throw 'invalid object value : ' + v;
          acc[k] = parseFloat(value[1]);
          return parser(v.substr(value[0].length), acc, null, stack);
        }
      }
  }
};

console.log(parser(`{"a": [1, 2, [3, 4], 5], "b": {"a": 123, "b" : 456}}`, null, null, []));
