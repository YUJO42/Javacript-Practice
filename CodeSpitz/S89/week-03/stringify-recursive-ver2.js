const arr = [1, 2, ['a', [1, 2], false], 3, ['b', 'c', [1, 2]]];

class Stack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }

  pop() {
    return this.list.pop();
  }

  empty() {
    return Boolean(this.list.length);
  }
}

const _recursive = (arr, i, acc, stack) => {
  if (arr.length === i) {
    if (stack.empty) {
      return `[${acc}]`;
    } else {
      const [arr, i] = stack.pop();
      //   acc = acc.length ? acc,
      _recursive(arr, i + 1, acc);
    }
  }
};

const recursive = (arr) => (arr.length < 1 ? '[]' : _recursive(arr, 0, '', new Stack()));

recursive(arr);
