import React from "react";
import { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import LittleLemonTitle from "../components/LittleLemonTitle";
import { fetchAPI, submitAPI } from "../api/api";
import PaymentForm from "../components/PaymentForm";
import BookingConfirmation from "../components/BookingConfirmation";

const bookingInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  date: null,
  time: "Select a time",
  guests: "",
  occasion: "Ordinary",
};

const paymentInitialValues = {
  cardholdername: "",
  cardnumber: "",
  cardexpiry: null,
  ccv: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [selectedReservationDate, setSelectedReservationDate] = useState(null);
  const [times, dispatch] = useReducer(reducer, []);

  const [step, setStep] = useState("reservation");
  const [reservationDetails, setReservationDetails] =
    useState(bookingInitialValues);
  const [paymentDetails, setPaymentDetails] = useState(paymentInitialValues);

  const updateReducer = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  const occasions = [
    { id: 1, title: "Ordinary" },
    { id: 2, title: "Anniversary" },
    { id: 3, title: "Wedding" },
    { id: 4, title: "Birthday" },
  ];

  //initialize times
  useEffect(() => {
    if (reservationDetails.time == "Select a time") {
      if (selectedReservationDate) {
        const newTimes = fetchAPI(selectedReservationDate);
        updateReducer("UPDATE_TIMES", newTimes);
      }
    }
  }, [selectedReservationDate]);

  const handleReservationDateChange = (date) => {
    setSelectedReservationDate(date);
  };

  const handleReservationSubmit = (reservationDetails) => {
    setReservationDetails(reservationDetails);
    setStep("payment");
  };

  const handlePaymentSubmit = (paymentDetails) => {
    setPaymentDetails(paymentDetails);
    setStep("confirmation");
  };

  const handlePreviousClick = () => {
    if (step === "payment") {
      setStep("reservation");
    }
    if (step === "confirmation") {
      setStep("payment");
    }
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
      <>
        {step === "reservation" && (
          <BookingForm
            onDateChange={handleReservationDateChange}
            formInitialValues={reservationDetails}
            availableTimes={times}
            occasions={occasions}
            onSubmit={handleReservationSubmit}
          />
        )}
        {step === "payment" && (
          <PaymentForm
            formInitialValues={paymentDetails}
            onPrevious={handlePreviousClick}
            onSubmit={handlePaymentSubmit}
          />
        )}
        {step === "confirmation" && (
          <BookingConfirmation
            onPrevious={handlePreviousClick}
            reservationDetails={reservationDetails}
            paymentDetails={paymentDetails}
          />
        )}
      </>
    </div>
  );
};

export default BookingPage;
