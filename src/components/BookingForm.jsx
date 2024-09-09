import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../validation/BookingFormValidation";
import CustomDatePicker from "./CustomDatePicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ updateTimes, availableTimes, occations }) => {
  const [bookDate, setBookDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("Select a Time");

  const timings = availableTimes || [];

  // Reset selected time when timings change
  useEffect(() => {
    setSelectedTime("Select a Time");
  }, [timings]);

  // Set the minimum date to tomorrow to exclude today and past dates
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);

  //excluded dates
  const filteredDates = (date) => date.getDay() !== 0;

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    date: null,
    time: "",
    guests: "",
    occation: "Ordinary",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const inputClass = "p-1 rounded-lg";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="grid min-w-xs md:w-1/3 w-9/12 p-5 gap-5 shadow-lg bg-blue-100">
        <Field>
          {({ field, form }) => (
            <div className="flex flex-col">
              <label htmlFor="date-picker">Date</label>
              <CustomDatePicker
                {...field}
                name="date"
                id="date-picker"
                iconSize={18}
                placeholderText="Reservation date"
                className={inputClass}
                selected={bookDate}
                filterDate={filteredDates}
                minDate={minDate}
                onChange={(date) => {
                  setBookDate(date);
                  form.setFieldValue("date", date);
                  updateTimes();
                }}
              ></CustomDatePicker>
              <ErrorMessage
                className="text-red-500 text-sm"
                name="date"
                component="div"
              />
            </div>
          )}
        </Field>
        <div className="flex flex-col">
          <label htmlFor="res-time">Time</label>
          <Field name="time" as="select" id="res-time" className={inputClass}>
            <option value="" disabled>
              Select a time
            </option>
            {timings.map((time) => (
              <option key={time.id}>{time.time}</option>
            ))}
          </Field>
          <ErrorMessage
            className="text-red-500 text-sm"
            name="time"
            component="div"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="guests">Party size</label>
          <Field
            type="number"
            name="guests"
            id="guests"
            placeholder="Number of guests"
            className={inputClass}
          />
          <ErrorMessage
            className="text-red-500 text-sm"
            name="guests"
            component="div"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="res-occation">Occation</label>
          <Field
            name="occation"
            as="select"
            id="res-occation"
            className={inputClass}
          >
            {occations.map((occation) => (
              <option key={occation.id} value={occation.title}>
                {occation.title}
              </option>
            ))}
          </Field>
        </div>

        <button
          type="submit"
          className="border border-solid border-black rounded-lg p-1 bg-yellow-200"
        >
          Make your reservartion
        </button>
      </Form>
    </Formik>
  );
};

export default BookingForm;
