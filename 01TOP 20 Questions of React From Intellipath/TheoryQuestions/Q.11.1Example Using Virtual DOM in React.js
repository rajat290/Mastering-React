import React from 'react'

function App (){
    const [text , setText] = useState('Hello , User');

    return (
        <>
        <h1> {text} </h1>
        <button onClick={() => setText('Hello , React User')}></button>
        </>
    )
}

export default App;