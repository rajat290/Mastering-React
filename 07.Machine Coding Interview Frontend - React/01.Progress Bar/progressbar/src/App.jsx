import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  ///<<<<<<<<<<<<<<------HARD CODED approach----->>>>>>>>>>>>>>>>>>
  // return (
  // <>
  // <h2>My Progress Bar</h2>
  //     <div className="progress-bar">
  //       <div className="progress-bar__fill" style={{ width: `${10}%` }}>
  //         <span className="progress-bar__text">10%</span>
  //       </div>
  //     </div>
  //     <div className="progress-bar" >
  //       <div className="progress-bar__fill" style={{ width: `${30}%` }}>
  //         <span className="progress-bar__text">30%</span>
  //       </div>
  //     </div>
  //     <div className="progress-bar">
  //       <div className="progress-bar__fill" style={{ width: `${50}%` }}>
  //         <span className="progress-bar__text">50%</span>
  //       </div>
  //     </div>
  //     <div className="progress-bar">
  //       <div className="progress-bar__fill" style={{ width: `${70}%` }}>
  //         <span className="progress-bar__text">70%</span>
  //       </div>
  //     </div>
  //     <div className="progress-bar">
  //       <div className="progress-bar__fill" style={{ width: `${90}%` }}>
  //         <span className="progress-bar__text">90%</span>
  //       </div>
  //     </div>
  //   </>
  // )

  // this is the Dynamic Approach ---->>>>
  <h1>My percentage Bar </h1>
  const percentages = [10, 30, 50, 70, 90];
  return percentages.map((percentage, index) => (
    <div key={index} className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${percentage}%` }}>
        <span className="progress-bar__text">{percentage}%</span>
      </div>{" "}
    </div>
  ));
}

export default App;
