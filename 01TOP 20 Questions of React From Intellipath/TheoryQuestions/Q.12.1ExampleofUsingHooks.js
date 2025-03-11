import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;


// ✅ What is happening here?

// We created a state variable count with initial value 0.
// We used setCount to update the state whenever the button is clicked.
// The useState() Hook made this possible without a class component.