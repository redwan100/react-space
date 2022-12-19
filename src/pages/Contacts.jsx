import React from "react";
import SectionTitle from "../shared/SectionTitle";

const Contacts = () => {
  return (
    <div className="contact py-[5rem]" id="contacts">
      <div className=" text-center text-white relative z-10 space-y-3 mb-[3rem]">
        <SectionTitle title="Get in touch" />
        <h1 className="text-lg capitalize tracking-wider">
          Subscribes to our newsletter
        </h1>
      </div>

      <div className=" text-center relative z-30 space-y-5">
        <div className="flex justify-center items-center flex-col gap-5 sm:flex-row">
          <input
            type="text"
            placeholder="Enter name"
            className="border-2 border-blue-500 bg-transparent py-[5px] px-[10px] rounded text-gray-200 text-xs md:text-sm"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="border-2 border-blue-500 bg-transparent py-[5px] px-[10px] rounded text-gray-200 text-xs md:text-sm"
          />
        </div>
        <button className="border-2 border-blue-600 text-white text-xs py-[5px] px-[10px] rounded  bg-blue-500 sm:text-sm w-[100px] sm:w-[130px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contacts;
