import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([])


const fetchData = async () => {

  const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
  const json = await data.json();
setResults(json?.recipes);
};

useEffect(() => {
  fetchData();
} , [input])

  return (
    <>
      <div className="App">
        <h1> AutoComplete Search Bar</h1>
        <input type="text" 
        placeholder="search" 
        className="search-bar"
        value={input} 
        onChange={(e) => setInput(e.target.value)}/>
        <div className="results-container">
        {results.map((r)=> <span className="result"key={r.id}>{r.name}</span>)}
        </div>
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";