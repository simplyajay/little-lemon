import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1>This is booking page</h1>
      <BookingForm></BookingForm>
    </div>
  );
};

export default BookingPage;
