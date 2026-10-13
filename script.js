// JavaScript Class Task: Numbers and Math Methods

// Create a file named `numbers-task.js`. Complete the tasks below and display each result using `console.log()`.

// 1. Practise mathematical operators

// Declare these variables:

// js
// const firstNumber = 25;
// const secondNumber = 4;

const firstNumber = 25;
const secondNumber = 4;

// Use mathematical operators to:

// 1. Add the two numbers.
console.log(firstNumber + secondNumber);

// 2. Subtract `secondNumber` from `firstNumber`.
console.log(firstNumber - secondNumber);

// 3. Multiply the two numbers.
console.log(firstNumber * secondNumber);

// 4. Divide `firstNumber` by `secondNumber`.
console.log(firstNumber / secondNumber);

// 5. Find the remainder when `firstNumber` is divided by `secondNumber`.
console.log(firstNumber % secondNumber);

// 6. Raise `secondNumber` to the power of `3`.
console.log(secondNumber**3);


// 2. Increase and decrease numbers
// js
// let score = 10;
let score = 10;

// 1. Increase `score` by `1` using `++` and display it.
console.log(score++);

// 2. Increase the updated score by `5` using `+=` and display it.
console.log(score+=5);

// 3. Decrease the updated score by `1` using `--` and display it.
console.log(score--);

// 4. Decrease the updated score by `3` using `-=` and display it.
console.log(score-=3);


// 3. Practise Math methods

// js
// const price = 18.75;
// const negativeNumber = -45;

const price = 18.75;
const negativeNumber = -45;

// 1. Round `price` to the nearest whole number.
console.log(Math.round(price));

// 2. Round `price` down.
console.log(Math.floor(price));

// 3. Round `price` up.
console.log(Math.ceil(price));

// 4. Remove the decimal part of `price`.
console.log(Math.trunc(price));

// 5. Find the absolute value of `negativeNumber` using `Math.abs()`.
console.log(Math.abs(negativeNumber));

// 6. Find the greatest number among `12`, `45`, and `7`.
console.log(Math.max(12, 45, 7));

// 7. Find the smallest number among `12`, `45`, and `7`.
console.log(Math.min(12, 45, 7));

// 8. Calculate `5` raised to the power of `2` using `Math.pow()`.
console.log(Math.pow(5, 2));

// 9. Find the square root of `81`.
console.log(Math.sqrt(81));

// 10. Generate a random number using `Math.random()`.
console.log(Math.random());

// 4. Predict, then check

// Write your predicted answers as comments before running:

// js
// console.log(5 + 2 * 3);
// console.log((5 + 2) * 3);

console.log(5 + 2 * 3); //predicted ans = 11
console.log((5 + 2) * 3); //predicted ans = 21

// Explain why the results are different.
//the answers are different simply because of the rules of operation precedence

// Reminder: Multiplication, division, and remainder have equal precedence and are evaluated from left to right. Addition and subtraction also have equal precedence and are evaluated from left to right.