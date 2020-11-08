const nums = [1, 2, 3, 4, 5];

const obj = {
  1: 'one',
  2: 'two',
  3: 'three',
};

const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

const set = new Set([1, 2, 3]);

// for (let num in nums) {
//   console.log('for in', num);
// }

// for (let num of nums) {
//   console.log('for of', num);
// }

// for (const key of obj.keys()) {
//   console.log(`key : ${key}`);
//   // console.log(`val : ${val}`);
// }

// for (const key of map.keys()) {
//   console.log(`key : ${key}`);
// }

// for (const val of map.values()) {
//   console.log(`val : ${val}`);
// }

// for (const [key, val] of map) {
//   console.log(`key : ${key}, val : ${val}`);
// }

// console.log(set);
// for (let i = 0; i < set.length; i++) {
//   console.log('for', set[i]);
// }

// for (const val of set) {
//   console.log(val);
// }

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const test = [3, 5, 7];
test.foo = 'hello';

for (let val in test) {
  console.log(`for ...in ${val}`);
}

for (let val of test) {
  console.log(`for ...of ${val}`);
}
