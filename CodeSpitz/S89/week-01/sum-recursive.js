const arr = Array.from({ length: 10 }, (_, i) => i + 1);
const arr_empty = [];
const arr_string = ["R", "E", "C", "U", "R", "S", "I", "V", "E"];

if (1) {
  // const _recursive = (arr, i, acc) => {
  //   if (i > 0) {
  //     return _recursive(arr, i - 1, arr[i] + acc);
  //   }

  //   return arr[0] ? arr[0] + acc : acc;
  // };

  const _recursive = (arr, i, acc) =>
    i > 0 ? _recursive(arr, i - 1, arr[i] + acc) : (arr[0] || 0) + acc;

  const recursive = (arr) => {
    _recursive(arr, arr.length - 1, 0);
  };

  console.log(recursive(arr));
  console.log(recursive(arr_empty));
  console.log(recursive(arr_string));
}
