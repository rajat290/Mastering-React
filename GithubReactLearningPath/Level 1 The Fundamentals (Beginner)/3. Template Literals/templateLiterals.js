const name = "RAjat";
const age = 24;
// using template literals 

const message = `Hello , My name is ${name} and i am ${age} years old`;
console.log(message);

// 📌 Explanation: ${name} and ${age} are dynamically inserted into the string.

// Multi-line Strings Without \n

const paragraph = `this is 
multi line string 
without using the (\n).`;
console.log(paragraph);


// Using Expressions Inside Template Literals

const num1 = 10;
const num2 = 20;
// const num = {
//     num1: 10,
//     num2: 20,
// num1: 22,
// } //just trying to change the value of the const 


const sum = `The sum of ${num1} and ${num2}
is ${num1 + num2}`;
console.log(sum);

// Function Calls Inside Template Literals

const getGreetings = () => "Good Morning";
const greetMessage = `Hey ! ${getGreetings}, have a nice day `
console.log(greetMessage);
// 📌 Explanation: Function calls can be embedded inside ${}.


// 5️⃣ Nested Template Literals

const user = {name: "Rajat", city: "Delhi"};

const welcomeMessage = `welcome, ${user.name}
from ${user.city}`;
console.log(welcomeMessage);

// 📌 Explanation: Template literals can include objects and variables dynamically.

