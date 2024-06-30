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
      setResult(eval(input)); 
    } catch (error) {
      setResult("Error");
    }
  };

  const handleToggleSign = () => {
    if (input) {
      if (input.startsWith('-')) {
        setInput(input.slice(1));
      } else {
        setInput('-' + input);
      }
    }
  };

  const handlePercentage = () => {
    if (input) {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          className="w-full p-2 border rounded text-black text-right"
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {["7", "8", "9", "/"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
          >
            {item}
          </button>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
          >
            {item}
          </button>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
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
            className="p-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
          >
            {item}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-2 p-4 bg-red-500 text-black dark:text-white rounded"
        >
          Clear
        </button>
        <button
          onClick={handleBackspace}
          className="col-span-2 p-4 bg-yellow-500 text-black dark:text-white rounded"
        >
          Backspace
        </button>
        <button onClick={handleToggleSign} className="col-span-2 p-4 bg-blue-500 text-black dark:text-white rounded">
          ±
        </button>
        <button onClick={handlePercentage} className="col-span-2 p-4 bg-green-500 text-black dark:text-white rounded">
          %
        </button>
      </div>
      {result && <div className="text-2xl font-bold flex justify-center text-black dark:text-white">Result: {result}</div>}
    </div>
  );
};

export default Calculator;
