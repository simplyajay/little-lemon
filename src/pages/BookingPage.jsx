import React from "react";
import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";

export const generateRandomTimes = (totalTimes) => {
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

export const timesReducer = (state, action) => {
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
    <div className="w-full flex flex-col items-center justify-center">
      <h1>This is booking page</h1>
      <BookingForm
        updateTimes={updateTimes}
        availableTimes={availableTimes}
        occations={occations}
      ></BookingForm>
    </div>
  );
};

export default BookingPage;
