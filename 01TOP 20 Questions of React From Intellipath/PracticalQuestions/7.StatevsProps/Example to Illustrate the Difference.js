import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const increment =() => {
        setCount(count +1 );
    
    }
    return (
        <>
        <h1>
            Counter: {count}
            <button onClick={{increment}}>Increment</button>
        </h1>
        </>
    )
}

export default Counter;