

// 2. Understanding State in React

// State is An object that store data that changes over time in a React Component.
// when the state updates,React automattically re-renders the components to reflect the new data 

// Simplified Explanation
// Imagine you’re tracking the score of a game. When the player scores a point, the number on the screen should update instantly. In React, we store this changing data inside state instead of regular variables so that React can update the UI automatically when the data changes.

// Real-World Applications of State
// Toggling a dark mode switch in a website
// Updating a shopping cart’s total price dynamically
// Displaying notifications when a message is received
// Tracking a form’s input values before submission
// // 

// How to Use State in React?
// React state is used in two types of components:

// Class Components (Old way – uses this.state)
// Functional Components (Modern way – uses useState hook)

// Since functional components are the modern approach, we will focus on them.

// Declaring State with useState (Functional Components)

import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>
                Count: {count}
            </h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}


