import React from "react";

const BookingForm = () => {
  const timings = [
    { id: 1, time: "17:00" },
    { id: 2, time: "18:00" },
    { id: 3, time: "19:00" },
    { id: 4, time: "20:00" },
    { id: 5, time: "21:00" },
    { id: 6, time: "22:00" },
  ];

  const occations = [
    { id: 1, title: "Birthday" },
    { id: 2, title: "Anniversary" },
    { id: 3, title: "Wedding" },
  ];

  const inputClass = "p-1 rounded-lg";

  return (
    <form className="grid min-w-xs md:w-1/3 w-9/12 p-5 gap-5 border border-solid border-green-500">
      <div className="flex flex-col">
        <label htmlFor="res-date">Date</label>
        <input type="date" id="res-date" required className={inputClass} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="res-time">Time</label>
        <select name="time" id="res-time" required className={inputClass}>
          {timings.map((time, key) => (
            <option key={key}>{time.time}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="guests">Party size</label>
        <input
          type="number"
          placeholder="1"
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
