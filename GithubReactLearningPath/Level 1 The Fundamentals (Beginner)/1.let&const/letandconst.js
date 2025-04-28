if (true) {
    let message = "Hello React Learner!";
    console.log(message);
}
// console.log(message); // ❌ Error: message is not defined outside the block


// let user = Rajat;
// user = vikas;
// console.log(user);


// Reassigning let

let score = 10;
score = 20; // ✅ Allowed
console.log(score); // Output: 20

// Example 3: const Cannot Be Reassigned

const PI = 3.1416;
// PI = 3.14; 
// ❌ Error: Assignment to constant variable
// 📌 Use const when the value should remain unchanged.

// Example 4: const with Objects (Can Modify Properties)

const user = { name : "Rajat" , age : 24 };
user.age = 25; // allowed modifying property
console.log(user); // Output: { name: "Rajat", age: 25 }