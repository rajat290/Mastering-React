import React , { useState }from 'react'
function Counter (){
  const [ count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count +1)}>Increse</button>
      <button onClick={() => setCount(count -1)}>Decrese</button>
    </div>
  );

}
export default Counter;

// 👉 Example of Class Component with State:

// import React from 'react'

// class Counter extends Component {
//   constructor (){
//     super();
//     this.state = {
//       count: 0
//     };
//   }
// render(){
//   return (
//    <div>
//     <h1>
//       count: {this.state.count}
//       <button onClick={() => this.setState({
//          count: this.state.count + 1
//       })}>Increse</button>
//     </h1>
//    </div>
//   )
// }




// }

// export default Counter;