"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-gray-200 dark:bg-gray-800">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>
      <div className="flex items-center">
        <button onClick={toggleTheme} className="mr-4 text-xl">
          {theme === "light" ? "🌞" : "🌜"}
        </button>
        <a
          href="https://github.com/theonlyhennygod/my-cal"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <FaGithub className="text-black dark:text-white text-3xl" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
