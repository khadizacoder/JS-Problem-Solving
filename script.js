// * Problem Solving

/*
*👉 Problem:
1️⃣ Take two numbers as input from the user.
2️⃣ Use comparison operators to display the larger number in the console.

JS Operators Problem  01 Solve

const userInput1 = parseFloat(prompt('Enter first number:'));
const userInput2 = parseFloat(prompt('Enter second  number:'));

if (userInput1 >= userInput2) {
    console.log(`The larger number is ${userInput1}`);
} else {
    console.log(`The larger number is ${userInput2}`);
}

*/

/*
*👉 Problem:
1️⃣ Take three numbers as input from the user.
2️⃣ Find the maximum number using the Comparison operator.


let first = parseFloat(prompt('Enter first number:'));
let second = parseFloat(prompt('Enter Second number:'));

if (first > second) {
    alert(`The larger number is ${first}`);
}else if (first < second){
    alert(`The larger number is ${second}`);
} else {
    alert('Both numbers are equal.');
}
*/

/*
const number1 = parseFloat(prompt('Enter First number'));
const number2 = parseFloat(prompt('Enter second number'));
const number3 = parseFloat(prompt('Enter third number'));

let max;
if (number1 >= number2 && number1 >= number3) {
    max = number1;
}else if(number2 >= number1 && number2 >= number3){
    max = number2;
}else {
    max = number3;
}

console.log(`the larger number is ${max}`);
document.write(`<h2> The larger number is ${max}</h2>`);

* Different Way

const num1 = parseFloat(prompt('Enter 1st number'));
const num2 = parseFloat(prompt('Enter 2nd number'));
const num3 = parseFloat(prompt('Enter 3rd number'));
const num4 = parseFloat(prompt('Enter 4th number'));

let max;

if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
    max = num1;
}else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
    max = num2;
}else if (num3 >= num1 && num3 >= num2 && num3 >= num4){
    max = num3;
}else{
    max = num4;
}

console.log(`The larger number is ${max}`);

* Different Way (Math.max() Using

const numbers = [
    parseFloat(prompt('Enter first number')),
    parseFloat(prompt('Enter second number')),
    parseFloat(prompt('Enter third number')),
    parseFloat(prompt('Enter fore number')),
]
// let max = Math.min(...numbers);
let max = Math.max(...numbers);
console.log(`The larger number is ${max}`);

* Different Way 

const numbersArray = [30, 32, 45, 50];
const maxNumberFind = (numbers) => {
  let maxNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
};
console.log(maxNumberFind(numbersArray));

*/

/*
*👉 Problem:
1️⃣ Input a number from the user.
2️⃣ Check whether the number is Even or Odd using the Modulo (%) operator.

const userInput = parseFloat(prompt('Enter a number: '));
if (userInput % 2 === 0) {
    console.log(`${userInput} is an Even number.`);
} else {
    console.log(`${userInput} is an Odd number.`);
}
*/

/*
*👉 Problem:
1️⃣ Input the exam number from the user (0-100).
2️⃣ Determine the grade according to the following rules:
Marks	Grade
80-100	A+
70-79	A
60-69	A-
50-59	B
40-49	C
33-39	D
0-32	F

* if else use

const userInput = parseFloat(prompt('Enter your marks:'));

if (userInput >= 80 && userInput <= 100) {
    console.log(`Your grade is: A+`);
}else if(userInput >= 70 && userInput < 80){
    console.log(`Your grade is: A`);
} else if(userInput >= 60 && userInput < 70){
    console.log(`Your grade is: A-`);
}else if(userInput >= 50 && userInput < 60){
    console.log(`Your grade is: B`);
}else if(userInput >= 40 && userInput < 50){
    console.log(`Your grade is: C`);
}else if(userInput >= 30 && userInput < 40){
    console.log(`Your grade is: D`);
}else{
    console.log(`Your grade is: F`);
}

* Different Way Function Use

function getGrade(marks){
    if (marks >= 80 && marks <= 100) return 'A+';
    else if (marks >= 70) return 'A';
    else if (marks >= 60) return 'A-';
    else if (marks >= 50) return 'B';
    else if (marks >= 40) return 'C';
    else if (marks >= 30) return 'D';
    else if (marks >= 0) return 'F';
    else return "Invalid marks";
}
const makes = parseFloat(prompt('Enter your marks:'));
const grade = getGrade(makes);

console.log(`Your grade is: ${grade}`);
document.write(`<h2>Your grade is: ${grade} </h2>`);

* Different Way Switch Case Use

const marks = parseFloat(prompt('Enter your marks:'));
switch (true){
    case (marks >= 80 && marks <= 100):
        console.log('Your grade is: A+');
    break;
    case (marks >= 70 && marks < 80):
        console.log('Your grade is A');
    break;
    case (marks >= 50 && marks < 70):
        console.log('Your grade is A-');
    break;
    case (marks >= 40 && marks < 50):
        console.log('Your grade is B');
    break;
    case (marks >= 30 && marks < 40):
        console.log('Your grade is C');
    break;
    case (marks >= 0 && marks < 30):
        console.log('Your grade is D');
    break;
    default:
        console.log("Invalid input. Please enter a number between 0 and 100.");
}

*/