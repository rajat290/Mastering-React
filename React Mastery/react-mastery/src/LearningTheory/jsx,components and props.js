// // 1. JSX (JavaScript XML)
// // Technical Definition:
// // JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It’s used in React to describe what the UI should look like. React components return JSX to render UI.

// // JSX gets converted into React’s React.createElement() function, which creates elements that React can manage. The browser doesn’t understand JSX directly, so it needs to be compiled to regular JavaScript.

// // Simplified Explanation:
// // JSX lets you write HTML structures in JavaScript code. It looks like HTML, but it’s actually JavaScript, so you can combine them. JSX makes it easier to write and understand UI code in React.

// // Real-World Application:
// // In React, JSX is used to build user interfaces. For example, in an e-commerce website, you might use JSX to display a product list, where each product is a component with its own details like name, price, and image.

// // Code Example:
// // Here’s a simple example of JSX:

// // jsx
// // Copy
// // Edit
// function Welcoome() {
//   return <h1>Hello, World!</h1>;
// }

// export default Welcoome;
// // This Welcome component uses JSX to return an <h1> tag, which React will render as part of the UI.
// // Important Points about JSX:
// // You can’t return multiple elements in JSX unless they’re wrapped in a parent element, like a <div> or a <React.Fragment>.

// // jsx
// // Copy
// // Edit
// // This won't work:
// return <h1>Hello</h1><h2>World</h2>;

// // This will work:
// return (
//   <>
//     <h1>Hello</h1>
//     <h2>World</h2>
//   </>
// );
// // JSX is not exactly HTML. For example, in JSX, you use className instead of class because class is a reserved keyword in JavaScript.

// // It’s important to close self-closing tags in JSX (like <img /> or <input />).

// // 2. Components
// // Technical Definition:
// // A component in React is a function or class that returns a JSX element. Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces.

// // There are two types of components in React:

// // Functional Components: These are simple JavaScript functions that return JSX.
// // Class Components: These are ES6 classes that extend React.Component and include a render() method to return JSX.
// // Simplified Explanation:
// // Components are like pieces of a puzzle that you put together to form a complete application. You can think of them as “mini-applications” that manage a specific part of the UI (e.g., a button, a card, a form).

// // Real-World Application:
// // For a user profile page, you could have a Header component, a ProfileInfo component, and a Footer component, where each component is responsible for rendering a part of the page.

// // Code Example:
// // Functional Component:

// // jsx
// // Copy
// // Edit
// function Greeting() {
//   return <p>Welcome to my website!</p>;
// }

// export default Greeting;
// Class Component:


// import React, { Component } from 'react';

// class Greeting extends Component {
//   render() {
//     return <p>Welcome to my website!</p>;
//   }
// }

// export default Greeting;
// // For most modern React apps, functional components are preferred, especially with the introduction of hooks, which we will cover later.

// // 3. Props (Properties)
// // Technical Definition:
// // Props (short for properties) are the mechanism by which data is passed from a parent component to a child component in React. Props allow a component to be dynamic by accepting inputs from its parent.

// // Simplified Explanation:
// // Props are like arguments passed to a function. They allow you to customize the behavior or appearance of a component by passing different values to it.

// // Real-World Application:
// // Imagine you have a UserCard component, and you want to display a user's name and age. Instead of hardcoding the data, you would pass the name and age as props to the UserCard component.

// // Code Example:
// // Parent Component (passing props):


// function App() {
//   return (
//     <div>
//       <UserCard name="John Doe" age={30} />
//     </div>
//   );
// }
// Child Component (receiving props):

// jsx
// Copy
// Edit
// function UserCard(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }
// // In this example, the App component passes the name and age props to the UserCard component, which then renders them in the UI.

// // Important Notes:
// // Props are read-only. A child component can’t modify the props it receives.
// // Props can be any type of data, like strings, numbers, arrays, objects, or even functions.
// // If props aren’t provided, React will issue a warning if you’re using PropTypes for validati