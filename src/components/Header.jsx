import React from "react";
import Button from "./Button";

import { IoHome } from "react-icons/io5";
const Header = () => {
  return (
    <div className="bg-red-300 p-5">
      <header className="max-w-[60rem] flex justify-between items-center text-xl text-black/80 m-auto">
        <h1 className="text-3xl">
          <span className="font-extrabold text-[tomato]">B</span>rand
        </h1>
        <div className="px-[1rem] max-[770px]:hidden flex gap-7 items-center">
          <a href="">
            <IoHome className="text-blue-700 text-2xl" />
          </a>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integrations</a>
          <a href="">About Us</a>
        </div>
        <Button title="Join US" />
      </header>
    </div>
  );
};

export default Header;
