import React from "react";
import CustomLabel from "./CustomLabel";

const formatDate = (date) => {
  const d = new Date(date);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return d.toLocaleString("en-US", options);
};

const ConfirmedBooking = ({ onPrevious, onSubmit, reservationDetails }) => {
  const bookingDate = formatDate(reservationDetails.date);
  return (
    <div className="items-center min-w-xs md:w-1/3 w-9/12 p-5 flex flex-col gap-5">
      <div className="w-full shadow-lg bg-blue-100 border border-solid p-5 border-gray-400 rounded-xl">
        <h1 className="text-center text-xl">
          <strong>Confirm Reservation</strong>
        </h1>
        <div className="flex flex-col gap-2 md:gap-2 md:justify-evenly py-5">
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="First Name"
            val={reservationDetails.firstName}
          />
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="Last Name"
            val={reservationDetails.lastName}
          />
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="Email"
            val={reservationDetails.email}
          />
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="Mobile Number"
            val={reservationDetails.mobile}
          />
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="Date"
            val={bookingDate}
          />
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="Time"
            val={reservationDetails.time}
          />
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="Guests"
            val={reservationDetails.guests}
          />
          <CustomLabel
            className="w-full flex"
            textContainerClassName="w-[40%]"
            text="Occasion"
            val={reservationDetails.occasion}
          />
        </div>
      </div>

      <div className="w-full flex justify-between">
        <button
          type="button"
          className="border border-solid border-black rounded-lg p-2 bg-customYellow min-w-28"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          type="submit"
          className="border border-solid border-black rounded-lg p-2 bg-customYellow min-w-28"
          onClick={onSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
