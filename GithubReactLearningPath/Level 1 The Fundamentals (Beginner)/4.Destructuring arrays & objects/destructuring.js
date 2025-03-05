// How to Use Destructuring?
// 🔹 1️⃣ Array Destructuring
// Example: Assigning values from an array to variables
const fruits = ['apple', 'banana', 'cherry'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// Explanation: Instead of accessing elements using numbers[0], numbers[1], we assign them directly.

// 🔹 2️⃣ Skipping Elements in Array Destructuring

// Example: Skipping elements in an array while destructuring
// const numbers = [1,2,3,4];
// const [num1, , num3] = numbers;
// Explanation: A comma , is used to skip the second element.

// 🔹 3️⃣ Using Default Values in Array Destructuring
// Example: Providing default values for skipped elements
const numbers = [1,2,3,4];
const [num1, num2 = 10, num3] = numbers;
// Explanation: If the second element is skipped, it will be assigned the default value 10