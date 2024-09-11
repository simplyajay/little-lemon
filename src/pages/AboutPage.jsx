import React from "react";
import LittleLemonTitle from "../components/LittleLemonTitle";
import Chefs from "../assets/marioAndAdrian.png";

const AboutPage = () => {
  return (
    <div className="flex justify-evenly p-10 border-t-8 bg-customGreen">
      <div className="flex flex-1 justify-center">
        <img
          className="max-h-80 hidden md:block rounded-lg"
          src={Chefs}
          alt="chef"
        />
      </div>
      <div className="flex self-center gap-10 max-w-full md:px-10 px-5 md:max-w-[50%] flex-col">
        <div className="">
          <LittleLemonTitle titlesize="text-6xl" subtitlesize="text-5xl" />
        </div>
        <div className="flex items-start">
          <p className="font-karla text-lg break-words text-customGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
