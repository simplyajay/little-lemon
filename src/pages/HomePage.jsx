import React from "react";
import LittleLemonTitle from "../components/LittleLemonTitle";
import Restaurant from "../assets/restaurant.png";

const HomePage = () => {
  return (
    <div className="border border-solid border-pink-500">
      <div className="min-h-48 w-full bg-customGreen flex gap-3 p-5">
        <div className="p-10 md:max-w-md flex flex-col gap-10">
          <LittleLemonTitle titlesize="text-6xl" subtitlesize="text-5xl" />
          <h1 className="text-customGray">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h1>
          <button className="border border-solid border-gray-600 rounded-lg bg-customYellow font-karla p-1 text-lg">
            Book a reservation
          </button>
        </div>
        <div className="p-5 hidden md:flex flex-1 items-center justify-center ">
          <img
            className="rounded-xl max-h-96"
            src={Restaurant}
            alt="Bruchetta image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
