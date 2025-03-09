// App.jsx
import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) {
      characters += "0123456789";
    }

    if (includeSpecialChars) {
      characters += "~!@#$%^&*()_+{}";
    }

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  }, [passwordLength, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeNumbers, includeSpecialChars]);

  const handleLengthChange = (event) => {
    setPasswordLength(event.target.value);
  };

  const handleIncludeNumbersChange = () => {
    setIncludeNumbers((prev) => !prev);
  };

  const handleIncludeSpecialCharsChange = () => {
    setIncludeSpecialChars((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-100">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={generatedPassword}
          className="w-full p-4 text-gray-700 placeholder-gray-400 bg-gray-100"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={passwordLength}
            className="cursor-pointer"
            onChange={handleLengthChange}
          />
          <label>Length: {passwordLength}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeNumbers}
            id="include-numbers"
            onChange={handleIncludeNumbersChange}
          />
          <label htmlFor="include-numbers">Include Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            id="include-special-chars"
            onChange={handleIncludeSpecialCharsChange}
          />
          <label htmlFor="include-special-chars">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;