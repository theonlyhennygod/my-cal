"use client";

import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Note: Using eval is not recommended for security reasons. Use a proper math library instead.
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          className="w-full p-2 border rounded"
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {["7", "8", "9", "/"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {item}
          </button>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {item}
          </button>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {item}
          </button>
        ))}
        {["0", ".", "=", "+"].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "=" ? calculateResult() : handleClick(item)
            }
            className="p-4 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {item}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-2 p-4 bg-red-500 text-white rounded"
        >
          Clear
        </button>
        <button
          onClick={handleBackspace}
          className="col-span-2 p-4 bg-yellow-500 text-white rounded"
        >
          Backspace
        </button>
      </div>
      {result && <div className="text-2xl font-bold">Result: {result}</div>}
    </div>
  );
};

export default Calculator;
