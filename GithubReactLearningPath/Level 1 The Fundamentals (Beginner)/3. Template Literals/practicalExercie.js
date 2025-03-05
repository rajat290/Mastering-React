// 1️⃣ Convert the following string concatenation into a template literal:

const { isCurrentDayOfWeek } = require("react-calendar/dist/esm/shared/dates.js");

const firstName = "John";
const lastName = "Doe";
const fullName = "Hello, " + firstName + " " + lastName + "! Welcome!";
console.log(fullName);

//coverting this is into template literal
const fistName = "john";
const lostName = "Doe";
const fillName = `hello ${fistName}, ${lostName}!`

console.log(fillName);

// 2️⃣ Create a template literal to display a user's name, age, and city in a multi-line format.

const user = {
    name: "Rajat",
    age: 25,
    city: "Delhi"
}
console.log (`user.name
    user.age
     user.city`
)

// at the end i have completed the purpose of the question hehehe !!!


// 3️⃣ Use a function inside a template literal to return the current date and time.

// Function to get the current date and time in a readable format
const getCurrentDateTime = () => {
    const now = new Date(); // Get current date and time

    // Formatting date and time in YYYY-MM-DD HH:MM:SS format
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit format
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Using the function inside a template literal
const message = `Hello! The current date and time is: ${getCurrentDateTime()}`;
console.log(message);
