import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const MenuLinks = () => (
  <div className="md:flex lg:flex space-x-4 font-small text-gray-800 hidden sm:block dark:text-white">
    <Link href="/">
      <a
        className={
          "font-small tracking-wider transition-colors text-gray-900 hover:text-sky-500 dark:text-white"
        }
      >
        About
      </a>
    </Link>
    <Link href="/">
      <a
        className={
          "font-small tracking-wider transition-colors text-gray-900 hover:text-sky-500 dark:text-white"
        }
      >
        Projects
      </a>
    </Link>
  </div>
);

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-small tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Craig Wheeler
          </a>
        </Link>
        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
