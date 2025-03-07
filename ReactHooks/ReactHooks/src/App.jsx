import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)


// let counter = 5
const addValue = () => {
  setCounter(counter + 1)
  console.log("value Added", counter)
}
const removeValue = () => {
  setCounter(counter - 1)
  console.log("value remove", counter )
}
  return (
    <>
    <h1>React Hooks</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value </button>
     <button onClick={removeValue}>remove value </button>     
    </>
  )
}

export default App
