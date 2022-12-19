import React from "react";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import img from "../assets/space6.jpg";
const Item = ({imgUrl , desc}) => {
  return (
    <div className="flex justify-evenly items-center flex-col gap-8 sm:items-start sm:flex-row">
      {/* left  */}
      <div className="max-w-[40rem] space-y-5">

        <p className="text-xs text-gray-300 tracking-wide font-thin sm:text-sm">
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
