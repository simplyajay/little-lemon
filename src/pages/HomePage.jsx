import React from "react";
import LittleLemonTitle from "../components/LittleLemonTitle";
import Restaurant from "../assets/restaurant.png";

const HomePage = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5">
      <div className="menu-cover bg-customGreen p-10 shadow-xl rounded-xl border-b-8 border-t-8 border-green-300">
        <div className="p-10 lg:max-w-[40%] flex flex-col justify-evenly gap-10">
          <LittleLemonTitle titlesize="text-6xl" subtitlesize="text-5xl" />

          <h1 className="text-customGray ">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h1>

          <button className="border border-solid border-black rounded-lg bg-customYellow font-karla p-1 text-lg">
            Book a reservation
          </button>
        </div>
      </div>
      <div className="menu-image-wrapper p-5 hidden lg:block">
        <img
          className="menu-img rounded-xl shadow-xl border-[3px] border-solid border-gray-400 "
          src={Restaurant}
          alt="Restaurant image"
        />
      </div>
    </div>
  );
};

export default HomePage;
