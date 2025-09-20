import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="bg-red-300 p-5">
      <header className="px-[1rem] max-w-[60rem] grid grid-cols-5 max-[770px]:gap-[2rem] max-[770px]:grid-cols-2 text-xl text-black/80 m-auto pb-8 max-[400px]:grid-cols-1 ">
        <h1 className="text-3xl">
          <span className="font-extrabold text-[tomato]">B</span>rand
        </h1>
        <div className="flex  flex-col gap-[1px] ">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integrations</a>
          <a href="">About Us</a>
        </div>
        <div className="flex  flex-col gap-1">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integrations</a>
          <a href="">About Us</a>
          <a href="">Features</a>
          <a href="">Use Case</a>
        </div>
        <div className="flex  flex-col gap-1">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integrations</a>
          <a href="">About Us</a>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Features</a>
          <a href="">Use Case</a>
        </div>
        <div className="flex  flex-col gap-1">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integrations</a>
          <a href="">About Us</a>
        </div>
      </header>
      <div className="w-full h-[1px] bg-[tomato] "></div>
      <div className="max-w-[60rem] pt-3 m-auto flex justify-between max-[770px]:flex-col px-[1rem]">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
          hic.
        </p>
        <div className="flex gap-5">
          <a href="#" className="font-bold">
            T
          </a>
          <a href="#" className="font-bold">
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
