import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-red-600 bg-amber-400 border-x-yellow-50" >TailwindCss</h1>
    </>
  )
}

export default App
