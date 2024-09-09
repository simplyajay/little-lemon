import React from "react";
import { useState, useEffect } from "react";
import CustomDatePicker from "./CustomDatePicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ updateTimes, availableTimes }) => {
  const [bookDate, setBookDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const timings = availableTimes || [];

  // Reset selected time when timings change
  useEffect(() => {
    setSelectedTime("");
  }, [timings]);

  const occations = [
    { id: 1, title: "Birthday" },
    { id: 2, title: "Anniversary" },
    { id: 3, title: "Wedding" },
  ];

  const isSunday = (date) => {
    const day = date.getDay(date);
    return day !== 0;
  };

  // Set the minimum date to tomorrow to exclude today and past dates
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);

  const inputClass = "p-1 rounded-lg";

  return (
    <form className="grid min-w-xs md:w-1/3 w-9/12 p-5 gap-5 border border-solid border-green-500">
      <div className="flex flex-col">
        <label htmlFor="date-picker">Date</label>
        <CustomDatePicker
          id="date-picker"
          iconSize={18}
          placeholderText="Reservation date"
          className={inputClass}
          selected={bookDate}
          filterDate={isSunday}
          minDate={minDate}
          onChange={(date) => {
            setBookDate(date);
            updateTimes();
          }}
        ></CustomDatePicker>
      </div>

      <div className="flex flex-col">
        <label htmlFor="res-time">Time</label>
        <select
          name="time"
          id="res-time"
          required
          className={inputClass}
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="" disabled>
            Select a time
          </option>
          {timings.map((time) => (
            <option key={time.id}>{time.time}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="guests">Party size</label>
        <input
          type="number"
          placeholder="Number of guests"
          min={1}
          max={6}
          id="guests"
          required
          className={inputClass}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="res-occation">Occation</label>
        <select name="time" id="res-occation" required className={inputClass}>
          {occations.map((occation, key) => (
            <option key={key}>{occation.title}</option>
          ))}
        </select>
      </div>

      <input
        type="submit"
        value="Make Your Reservation"
        className="border border-solid border-black rounded-lg p-2 bg-yellow-200"
      />
    </form>
  );
};

export default BookingForm;
