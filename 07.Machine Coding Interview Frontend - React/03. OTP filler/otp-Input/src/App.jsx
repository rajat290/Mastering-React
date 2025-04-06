import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


  const OTP_DIGITS_COUNT = 5;
  

export default function App() {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("1")
  );

  return (
    <div className="App">
      <h1>OTP VALIDATOR</h1>
      {inputArr.map((input, index) => {
        return <input className="otp" key={index} type="text" />;
      })}
    </div>
  );
}
