import React from "react";
import { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import LittleLemonTitle from "../components/LittleLemonTitle";
import { fetchAPI, submitAPI } from "../api/api";

const initializeTimes = (selectedDate) => {
  if (selectedDate) {
    const times = fetchAPI(selectedDate);
    return times;
  }
  return [];
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes(action.payload);
    default:
      return state;
  }
};
const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], () =>
    initializeTimes()
  );

  const updateTimes = (bookingDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: bookingDate });
  };

  const occasions = [
    { id: 1, title: "Ordinary" },
    { id: 2, title: "Anniversary" },
    { id: 3, title: "Wedding" },
    { id: 4, title: "Birthday" },
  ];

  return (
    <div className="w-full flex flex-col gap-10 md:px-10 pb-10 items-center justify-center mt-[101px]">
      <div className="min-h-48 w-full bg-customGreen p-4 border border-solid flex flex-col gap-3 items-center">
        <LittleLemonTitle titlesize="text-5xl" subtitlesize="text-4xl" />
        <div className="text-center">
          <h2 className="text-customGray">
            Opening times: Monday - Saturday 10am - 12pm.
          </h2>
          <h2 className="text-customGray">
            Food is served until 11pm Monday - Saturday.
          </h2>
        </div>
      </div>
      <BookingForm
        updateTimes={updateTimes}
        availableTimes={availableTimes}
        occasions={occasions}
      ></BookingForm>
    </div>
  );
};

export default BookingPage;
