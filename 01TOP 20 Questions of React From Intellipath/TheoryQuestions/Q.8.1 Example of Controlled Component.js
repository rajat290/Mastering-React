import React, {useState} from 'react';

function  ControlledComponent(){
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
return (
    <div>
        <input
        type='text'
        value={name}
        onChange={handleChange}
        />
        <p>Name: {name}</p>
    </div>
);

}

export default ControlledComponent;

/*
Explanation:

State (name) is controlling the value of the input.
When we type in the input field, the handleChange function updates the state.
The input value is always synchronized with the state, hence it is a controlled component.*/

// Example of Uncontrolled Component:
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

// export default UncontrolledComponent;


// Explanation:

// We are using useRef() to directly access the input value (nameRef.current.value).
// React is not controlling the value, hence it is an uncontrolled component.
// When the form is submitted, we can access the value using the ref.
