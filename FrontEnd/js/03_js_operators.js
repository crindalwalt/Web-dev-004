console.log("Operators in JavaScript");

/**
 * Operators in JS
 * 4 types of operators in JS
 * 1) Arithmatics operator (+,-,*,/,%)
 * 2) Camparision operator (<,>,<=,>=,==,!=,===)
 * 3) Assignement operator (=,+=,-=.*=,/=)
 * 4) Logical operator (&&,||,!)
 *
 */

// ? Arithmatics operators
let num1 = 34;
let num2 = 20;
let result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = num1 % num2;
// console.log(result);

//? Camparision operator

num1 = 34;
num2 = 20;
let age = 23;
let secondAge = "23";
result = num1 < num2;
result = num2 > num2;
result = num2 >= num2;
result = num1 <= num2;
result = num1 == num2;
result = num1 != num2;
result = num1 === num2;

let newResult = age === secondAge;
// console.log(newResult);




let n1 = 50;
let n2 = 160;
console.log("n1 = " + n1)
console.log("n2 = " + n2)
// n1 = n1 + 70;
n1 += 70;


console.log("n1 = " + n1)
console.log("n2 = " + n2)

n1 -= 20;
console.log("n1 = " + n1)

let n3 = 45;
n1 = n3;
n1 += 30;
console.log("n1 = " + n1)




// ? Logical operator 

let condition = 34 > 45 || num1 > num2;
console.log(!condition)


let daysLeft = 67;
daysLeft += 56;
