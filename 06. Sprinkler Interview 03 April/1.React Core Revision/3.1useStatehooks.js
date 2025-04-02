import React from 'react'
import { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0);
    return(
        <div> 
            <p>Count: {count}</p>
            <button onClick={() =>
                setCount(count + 1)
            }>Increment</button>
        </div>
    )
}

/*
📌 Key Points:
✅ Used to manage dynamic values inside a component.
✅ Calling setCount re-renders the component with the new value.

*/ 