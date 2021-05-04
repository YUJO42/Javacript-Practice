// class ValueParser {
//   test(v) {}
//   convert(v) {}
// }

const valueTest = Symbol();
const valueConvert = Symbol();

class StringParser {
  #reg = /"([^"]|\\")+"/;

  [valueTest](v) {
    return this.#reg.test(v);
  }

  [valueConvert](v) {
    return this.#reg.exec(v)[1];
  }
}

class NumberParser {
  #reg = /[0-9.]+/;

  [valueTest](v) {
    return this.#reg.test(v);
  }

  [valueConvert](v) {
    return this.#reg.exec(v)[1];
  }
}

class DataParser {
  // #reg = //;

  [valueTest](v) {
    return this.#reg.test(v);
  }

  [valueConvert](v) {
    return this.#reg.exec(v)[1];
  }
}

class Test {
  #a;
  #b;
  #c;

  constructor(a, b, c) {
    this.#a = a;
    this.#b = b;
    this.#c = c;
  }

  toJSON() {
    return new TestParser(this.#a, this.#b, this.#c);
  }
}

class TestParser {
  #reg = /"@Test\{([0-9]+),([0-9]+),([0-9]+)\}/;

  [valueTest](v) {
    return this.#reg.test(v);
  }

  [valueConvert](v) {
    const [, ...arg] = this.#reg.exec(v);
    return new Test(arg.map((it) => parseFloat(it)));
  }

  toJSON(a, b, c) {
    return `"@Test{${a},${b},${c}}"`;
  }
}

const router = {
  type: [new StringParser(), new NumberParser(), new DataParser(), new TestParser()],

  router(v) {
    let result;
    if (
      this.type.some((converter) => {
        if (converter.test(v)) {
          result = converter.convert(v);
          return true;
        } else {
          return false;
        }
      })
    ) {
      return result;
    } else {
      throw Error('aer');
    }
  },
};
