import React from "react";
import Button from "./Button";

const Item = ({imgUrl , desc}) => {
  return (
    <div className="flex justify-evenly items-center flex-col gap-8 sm:items-start sm:flex-row">
      {/* left  */}
      <div className="max-w-[40rem] space-y-5 sm:text-left">

        <p className="text-xs text-gray-300 tracking-wide font-thin sm:text-sm text-left max-w-[400px]">
          {desc}
        </p>

        <Button text="Learn More"/>
      </div>
      {/* right  */}
      <div className="max-w-[23rem] ring ring-blue-400">
        <img src={imgUrl} alt="about img" />
      </div>
    </div>
  );
};

export default Item;
