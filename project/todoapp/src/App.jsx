import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import './App.css';

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem1 /> 
      {/* we can write in both type of syntax using closing tags and selft closing tags */}
     <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;
