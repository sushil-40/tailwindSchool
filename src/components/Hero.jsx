import React from "react";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="px-[1rem] max-w-[60rem] m-auto text-center py-[8rem]">
      <h1 className=" max-[500px]:text-3xl text-5xl font-serif font-bold">
        The Best Way To{" "}
        <span className="bg-red-300 rounded-2xl px-3">Review</span> Creative
        Assets
      </h1>
      <p className="text-lg my-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus
        dolorum officiis voluptatum consequatur voluptas molestias, fuga eius
        obcaecati non!
      </p>
      <div className="max-[500px]:text-sm text-3xl">
        <Button title="Join Subscription" />
      </div>
    </div>
  );
};

export default Hero;
