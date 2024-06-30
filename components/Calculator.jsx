"use client";

import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString()); // Not recommended for production due to eval
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-80">
      <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg mb-4 text-right text-xl">
        {input || "0"}
      </div>
      <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg mb-4 text-right text-xl">
        {result}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {["7", "8", "9", "/"].map((value) => (
          <button
            key={value}
            onClick={() => handleInput(value)}
            className="p-4 bg-gray-200 dark:bg-gray-500 rounded-lg text-xl"
          >
            {value}
          </button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <button
            key={value}
            onClick={() => handleInput(value)}
            className="p-4 bg-gray-200 dark:bg-gray-500 rounded-lg text-xl"
          >
            {value}
          </button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <button
            key={value}
            onClick={() => handleInput(value)}
            className="p-4 bg-gray-200 dark:bg-gray-500 rounded-lg text-xl"
          >
            {value}
          </button>
        ))}
        {["0", ".", "=", "+"].map((value) => (
          <button
            key={value}
            onClick={() =>
              value === "=" ? calculateResult() : handleInput(value)
            }
            className="p-4 bg-gray-200 dark:bg-gray-500 rounded-lg text-xl"
          >
            {value}
          </button>
        ))}
        <button
          onClick={clearInput}
          className="col-span-4 p-4 bg-red-400 rounded-lg text-xl text-white"
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
