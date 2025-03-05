// 1️⃣ Convert the following traditional functions into arrow function

function square(num) {
    return num * num;
}

function greetUser(name, age) {
    return `Hello ${name}, you are ${age} years old!`;
}

// ==============================
// arrow function

const square = (num) => num*num;

const greetUser = (name, age) => {
    return `Hello ${name}, you are ${age} years old`;
}


// 2️⃣ Create an arrow function getEvenNumbers that takes an array of numbers and returns only the even numbers.

// Use the filter() method to achieve this.
// const getEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);

const getEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);
