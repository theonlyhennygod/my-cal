"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-gray-800 dark:text-white" />
        </a>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <FaSun className="text-2xl text-yellow-400" />
          ) : (
            <FaMoon className="text-2xl text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
