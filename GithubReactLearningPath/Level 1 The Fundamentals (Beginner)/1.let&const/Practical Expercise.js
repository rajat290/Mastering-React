// 1️⃣ Declare a variable using let inside a block {} and try to access it outside. What happens?

if (true){
    let x = 10;
    console.log(x);
}

// console.log (x) it will show error 

// 2️⃣ Create a const object representing a student {name, age, grade} and try:

// Changing the name property.
// // Assigning a completely new object.

const user = { Myname : "Rajat" , Age : 24, Grade : "A"};
user.Myname = "Rajat Tomar"
console.log(user);