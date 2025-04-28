import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const OTP_DIGITS_COUNT = 5;

export default function App() {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index, value) => {
    const newArr = [...inputArr];
    newArr[index] = value;
    setInputArr(newArr);
    if (value.length > 0 && index < OTP_DIGITS_COUNT - 1) {
      setCurrentIndex(index + 1);
      const inputFields = document.querySelectorAll(".otp");
      inputFields[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && inputArr[index] === "") {
      if (index > 0) {
        const newArr = [...inputArr];
        newArr[index - 1] = "";
        setInputArr(newArr);
        setCurrentIndex(index - 1);
        const inputFields = document.querySelectorAll(".otp");
        inputFields[index - 1].focus();
      }
    } else if (e.key === "Backspace" && inputArr[index] !== "") {
      const newArr = [...inputArr];
      newArr[index] = "";
      setInputArr(newArr);
      const inputFields = document.querySelectorAll(".otp");
      inputFields[index].focus();
    }
  };

  const handleInput = (index, e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
  };

  const handleFocus = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="App">
      <h1>OTP VALIDATOR</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className={`otp ${currentIndex === index ? "active" : ""}`}
            key={index}
            type="text"
            value={input}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onInput={(e) => handleInput(index, e)}
            onFocus={() => handleFocus(index)}
            maxLength={1}
          />
        );
      })}
    </div>
  );
}

