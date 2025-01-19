// const ary: readonly [1, 2, 3]
const ary = [1, 2, 3] as const;

// const obj: {
//     readonly name: "John";
//     readonly age: 30;
// }  
const obj = {
  name: "John",
  age: 30,
} as const;
