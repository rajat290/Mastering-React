import React from 'react'
function Greeting(props){
    return <h1> 
        Hello , {props.name}
    </h1>
}
    function App(){
        return <Greeting name = "Rajat "/>
    }
export default App;