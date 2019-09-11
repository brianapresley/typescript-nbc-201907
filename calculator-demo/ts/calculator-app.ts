
var readlineSync = require('readline-sync');

console.log("Welcome to my calculator!");

let str: string = readlineSync.question('Whats your name? ');
console.log("Hello, "+str)
let n1: number = readlineSync.questionInt('Enter a number ');
let n2: number = readlineSync.questionInt('Enter a number ');

let sum: number = n1 + n2;
let diff: number = n1 - n2;
let product: number = n1 * n2;
let quotient: number = n1 / n2;
let mod: number = n1 % n2;

console.log("sum = "+sum);
console.log("diff = "+diff);
console.log("product = "+product);
console.log("quotient = "+quotient);
console.log("mod = "+mod);


console.log("Bye!")