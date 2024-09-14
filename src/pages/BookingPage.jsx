import React from "react";
import { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import LittleLemonTitle from "../components/LittleLemonTitle";
import { fetchAPI, submitAPI } from "../api/api";
import PaymentForm from "../components/PaymentForm";
import BookingConfirmation from "../components/BookingConfirmation";

const initialState = {
  reservation: false,
  payment: false,
  confirmation: false,
  times: [],
};

const initializeTimes = (selectedDate) => {
  if (selectedDate) {
    const times = fetchAPI(selectedDate);
    return times;
  }
};

const reducer = (state, action) => {
  const confirm = (payload) => {
    return payload.reservation && payload.payment;
  };

  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: action.payload };
    case "UPDATE_RESERVATION":
      return { ...state, reservation: action.payload };
    case "UPDATE_PAYMENT":
      return { ...state, payment: action.payload };
    case "UPDATE_CONFIRMATION":
      return { ...state, confirmation: confirm(action.payload) };
    default:
      return state;
  }
};

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [booking, dispatch] = useReducer(reducer, initialState);
  const { reservation, payment, confirmation, times } = booking;

  const updateReducer = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  const occasions = [
    { id: 1, title: "Ordinary" },
    { id: 2, title: "Anniversary" },
    { id: 3, title: "Wedding" },
    { id: 4, title: "Birthday" },
  ];

  useEffect(() => {
    if (selectedDate) {
      const newTimes = fetchAPI(selectedDate);
      updateReducer("UPDATE_TIMES", newTimes);
    }
  }, [selectedDate]);

  useEffect(() => {
    updateReducer("UPDATE_CONFIRMATION", {
      reservation: reservation,
      payment: payment,
    });
  }, [reservation, payment]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full flex flex-col gap-10 md:px-10 pb-10 items-center justify-center mt-[101px] h-screen">
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
      {!confirmation ? (
        <>
          {!reservation ? (
            <BookingForm
              onDateChange={handleDateChange}
              availableTimes={times}
              occasions={occasions}
              onSubmit={() => updateReducer("UPDATE_RESERVATION", true)}
            ></BookingForm>
          ) : (
            <PaymentForm onSubmit={updateReducer} />
          )}
        </>
      ) : (
        <>
          <BookingConfirmation></BookingConfirmation>
        </>
      )}
    </div>
  );
};

export default BookingPage;
