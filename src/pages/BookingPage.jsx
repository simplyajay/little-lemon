import React from "react";
import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import LittleLemonTitle from "../components/LittleLemonTitle";

const generateRandomTimes = (totalTimes) => {
  const times = [
    { id: 1, time: "17:00" },
    { id: 2, time: "18:00" },
    { id: 3, time: "19:00" },
    { id: 4, time: "20:00" },
    { id: 5, time: "21:00" },
    { id: 6, time: "22:00" },
  ];

  const shuffledTimes = times.sort(() => Math.random() - 0.5);

  const cutTimes = shuffledTimes.slice(0, totalTimes);

  return cutTimes.sort((a, b) => a.time.localeCompare(b.time));
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return generateRandomTimes(4);

    default:
      return state;
  }
};
const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], () =>
    generateRandomTimes(0)
  );

  const updateTimes = () => {
    dispatch({ type: "UPDATE_TIMES" });
  };

  const occations = [
    { id: 1, title: "Ordinary" },
    { id: 2, title: "Anniversary" },
    { id: 3, title: "Wedding" },
    { id: 4, title: "Birthday" },
  ];

  return (
    <div className="w-full flex flex-col gap-10 md:px-10 pb-10 items-center justify-center">
      <div className="min-h-48 w-full bg-customGreen p-4 border border-solid flex flex-col gap-3 items-center">
        <LittleLemonTitle titlesize="text-5xl" subtitlesize="text-4xl" />
        <div className="text-center">
          <h2 className="text-customGray">
            Opening times: Monday - Saturday 10am - 9pm.
          </h2>
          <h2 className="text-customGray">
            Food is served until 8pm Monday - Saturday.
          </h2>
        </div>
      </div>
      <BookingForm
        updateTimes={updateTimes}
        availableTimes={availableTimes}
        occations={occations}
      ></BookingForm>
    </div>
  );
};

export default BookingPage;
