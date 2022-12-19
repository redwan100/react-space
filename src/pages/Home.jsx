import React from "react";
import Navbar from "../components/nav/Navbar";
import img from "../assets/space1.jpg";
const Home = () => {
  return (
    <div className="w-screen h-screen hero" id="home">
      <Navbar />
      <div className="w-screen min-h-screen flex justify-center items-center">
        <div className=" rounded-md max-w-[700px] md:w-[700px] m-20 flex items-center flex-col sm:flex-row bg-gray-400/10 backdrop-blur-md">
          <div className="text-white flex-1 py-10 px-10 space-y-4">
            <h1 className="text-3xl uppercase  font-semibold leading-8 md:text-5xl md:leading-[3.25rem]">
              What's in <br /> <span className=" tracking-[18px]">space?</span>
            </h1>
            <p className="text-xs text-gray-300 font-thin tracking-wide">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              nobis velit eveniet praesentium, doloremque error harum alias
              asperiores, nulla nesciunt deleniti,
            </p>

            <p className="text-1xl font-semibold uppercase text-teal-500 cursor-pointer">
              let's find out!
            </p>
          </div>

          <div className="w-[200px] h-[240px] overflow-hidden sm:h-max border-4 border-teal-500">
            <img src={img} alt="space"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
