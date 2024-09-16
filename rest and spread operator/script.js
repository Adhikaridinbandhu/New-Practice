// spread operator

// array copying
const array = [1, 2, 3, 4, 5];
const array2 = [...array];
console.log(array2);
// merging array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// passing arguments

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [2, 4, 6];
console.log(sum(...numbers));

//object merging/cloning

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// Rest Operator

//function parameter

function total(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(total(1, 2, 3, 4, 5));

// array destructing
const fruits = ["mango", "banana", "papaya", "gauva", "pear"];
const [first, ...rest] = fruits;
console.log(first, rest);

// object destructing

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a, others);
