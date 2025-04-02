// 4️⃣ useCallback (Optimize Function Re-Creation)
// Definition:
// useCallback returns a memoized function to prevent unnecessary re-creations.

import { useState, useCallback } from React;

const Button = ({ handleClick }) => {
    return <button onClick={handleClick}>clcik me </button>

const Parent = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Button clicked")

    }, []);
    return (
        <div>
            <Button handleClick={handleClick} />
        </div>
    )
    }
}
