let num1, num2;

do {
    num1 = prompt("Please enter the first integer:");
    if (!Number.isInteger(parseInt(num1))) {
        alert("Invalid input. Please enter a valid integer for the first number.");
    }
} while (!Number.isInteger(parseInt(num1)));

num1 = parseInt(num1);

do {
    num2 = prompt("Please enter the second integer:");
    if (!Number.isInteger(parseInt(num2))) {
        alert("Invalid input. Please enter a valid integer for the second number.");
    }
} while (!Number.isInteger(parseInt(num2)));

num2 = parseInt(num2);

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;

alert(`Addition: ${num1} + ${num2} = ${sum}\nSubtraction: ${num1} - ${num2} = ${difference}\nMultiplication: ${num1} * ${num2} = ${product}\nDivision: ${num1} / ${num2} = ${quotient}\nModulo: ${num1} % ${num2} = ${remainder}`);
