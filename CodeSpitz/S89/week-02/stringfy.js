// JSON.stringify

// String : 그대로, escape는 '\'함께 출력
// Number : 그대로
// Boolean : 그대로
// Object(Array) : 그대로
// Symbol : null
// Function : Null
// undefined : null
// Infinity : Null
// Math.max : Null

const arr = [
  1, // Number expect : 1
  "abc", // String-general : "abc"
  'a""', // String-escape : "a\"\"\""
  true, // Boolean : true
  undefined, // Undefined : null
  null, // null : null
  () => console.log("I`m Fn"), // function : null
  Symbol(1), // Symbol : null
  { asd: 123 },
  [123, 123123],
  Infinity,
  -0,
  -123123,
  NaN,
];

const _stringify_recursive = (arr, index, stringify);
const stringify_recursive = (arr) =>
  _stringify_recursive(arr, arr.length - 1, []);

// const myStringify = (arr) => {
//   const newStringify = [];
//   const nullType = ["NaN"];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "bigint") {
//       throw new Error("Do not know how to serialize a BigInt");
//     }
//   }
// };

console.log("JSON.stringify : ", JSON.stringify(arr));
console.log("My Stringify : ");
console.log(
  typeof 1,
  typeof "asd",
  typeof true,
  typeof null,
  typeof undefined,
  typeof { asd: 123 },
  typeof [123, 123],
  typeof BigInt(123)
);
