import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>This is a React application.</p>
    </div>
    //This will unnecessarily add an extra <div> in the DOM:instead of this we can use 
    
  );
}

export default App;


function App2() {
    return (
      <>
        <h1>Welcome to React</h1>
        <p>This is a React application.</p>
      </>
      //This will not add an extra <div> in the DOM:instead of Div we are using <>, </>
      
    );
  }
  
//   export default App2;
  