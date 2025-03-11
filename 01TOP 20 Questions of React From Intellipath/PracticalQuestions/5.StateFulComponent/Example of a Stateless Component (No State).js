import React from 'react'

function Greeting(props){
    return (
        <div> 
            <h1> Hello, {props.name}</h1>
        </div>
    )
}
export default Greeting;

// This component simply displays the name received from props.
// It has no state, no lifecycle methods — just pure UI.
// Hence, it is called a Stateless Component