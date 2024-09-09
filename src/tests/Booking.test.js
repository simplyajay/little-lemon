import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { generateRandomTimes } from "../pages/BookingPage";
import { timesReducer } from "../pages/BookingPage";
import BookingPage from "../pages/BookingPage";

describe("generateRandomTimes", () => {
  it("should return an array of times with the correct length", () => {
    const totalTimes = 4;
    const times = generateRandomTimes(totalTimes);

    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBe(totalTimes);
  });

  it("should return times sorted in ascending order", () => {
    const totalTimes = 4;
    const times = generateRandomTimes(totalTimes);

    const sortedTimes = times
      .slice()
      .sort((a, b) => a.time.localeCompare(b.time));
    expect(times).toEqual(sortedTimes);
  });
});

describe("BookingPage", () => {
  it("should update available times when updateTime is called", () => {
    const initialState = [];
    const action = { type: "UPDATE_TIMES" };

    //test the reducer
    const updateTimes = timesReducer(initialState, action);
    expect(Array.isArray(updateTimes)).toBe(true);
    expect(updateTimes.length).toBe(4);

    //test the BookingPage Component

    render(<BookingPage />);

    //Find the CustomDatePicker component since it is responsible for triggering the updateTimes function
    const datePicker = screen.getByPlaceholderText(/Reservation date/i);

    //Simulate selecting a date
    fireEvent.change(datePicker, { target: { value: "2024-09-10" } });

    //Check if available times are updated
    // For example, if you render availableTimes in the BookingForm, you might check the select element
    const timeSelect = screen.getByLabelText(/Time/i);
    const timeOptions = timeSelect.querySelectorAll("option");
    expect(timeOptions).toHaveLength(5); // 4 is expected but there is a default option which is "Select a time" option therefore, +1
  });
});
