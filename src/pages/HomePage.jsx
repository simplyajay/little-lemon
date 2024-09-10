import React from "react";
import LittleLemonTitle from "../components/LittleLemonTitle";
import Restaurant from "../assets/restaurant.png";

const HomePage = () => {
  return (
    <div className="p-5 menu-grid-container">
      <div className="menu-cover bg-customGreen p-10 shadow-lg rounded-xl">
        <div className=" p-5 md:max-w-md h-auto flex flex-col justify-evenly gap-10">
          <LittleLemonTitle titlesize="text-6xl" subtitlesize="text-5xl" />
          <h1 className="text-customGray">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h1>
          <button className="border border-solid border-gray-600 rounded-lg bg-customYellow font-karla p-1 text-lg">
            Book a reservation
          </button>
        </div>
      </div>
      <div className="menu-image-wrapper p-5 hidden md:block">
        <img
          className="menu-img rounded-xl shadow-xl border border-solid border-gray-500 "
          src={Restaurant}
          alt="Restaurant image"
        />
      </div>
    </div>
  );
};

export default HomePage;
