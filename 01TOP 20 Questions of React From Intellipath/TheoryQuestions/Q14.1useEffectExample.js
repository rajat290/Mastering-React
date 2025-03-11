// ✅ 3. Practical Example Using useEffect
// 👉 Task: Create a counter that automatically updates the document title every time the count changes.

// ✅ Problem Statement (What is the Problem?)
// We have a counter (useState) that increases every time you click the button.
// We want the title of the page (in the browser tab) to update with the count.
// So we need something that runs AFTER the page renders/re-renders — and that's what useEffect does.
/*
✅ 4. Why, What, and How to Solve the Problem?
Why? We want to change the page title when the count changes.
What? We can use the useEffect Hook.
How? We write the code inside useEffect that runs every time the count changes.*/

import React, { useState, useEffect} from 'react'

function Counter (){
    const [count, setCount] = useState(0);

useEffect(() => {
    document.title = `Count: ${count}`;

}, [count]); //runs only when count changes

return 
<div>
    <p>
        you clicked {count} times 
    </p>
    <button onClick={() => setCount(count +1)}>click me</button>
</div>


}

export default Counter;

// ✅ 6. Explanation of Code
// 👉 What happened here?

// We created a state: const [count, setCount] = useState(0)
// Every time the count changes, the useEffect() function runs and updates the document title (Count: 5).
// useEffect() takes 2 arguments:
// 1st argument: A function (what you want to do).
// 2nd argument: An array of dependencies (when to run the function).