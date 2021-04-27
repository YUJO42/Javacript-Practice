if (1) {
  let i = 0;
  const filter = function* (arr, block) {
    for (const v of arr) {
      i++;
      if (block(v)) {
        yield v;
      }
    }
  };
  const map = function* (arr, block) {
    for (const v of arr) {
      i++;
      yield block(v);
    }
  };
  const f = [
    ...map(
      filter([1, 2, 3, 4, 5], (v) => v % 2),
      (v) => v * 2,
    ),
  ];
  console.log(f, i);
}

if (1) {
  let i = 0;
  const copy = (iter) => {
    iter.filter = (block) =>
      copy(
        (function* () {
          for (const v of iter) {
            i++;
            if (block(v)) yield v;
          }
        })(),
      );
    iter.map = (block) =>
      copy(
        (function* () {
          for (const v of iter) {
            i++;
            yield block(v);
          }
        })(),
      );
    return iter;
  };
  const lazyArray = (iter) => copy(iter);
  const f = [
    ...lazyArray([1, 2, 3, 4, 5])
      .filter((v) => v % 2)
      .map((v) => v * 2),
  ];
  console.log(f, i);
}
