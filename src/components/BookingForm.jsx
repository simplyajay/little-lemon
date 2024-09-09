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

  const handleSubmit = (values, { resetForm }) => {
    alert("form submitted");
    resetForm();
  };

  const inputClass = "p-1 rounded-lg min-w-full";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="items-center min-w-xs md:w-1/2 w-9/12 p-5 shadow-lg bg-blue-100 border border-solid border-gray-400 rounded-xl">
        <h1 className="text-center text-xl">
          <strong>Reservation Details</strong>
        </h1>
        <div className="flex flex-col gap-4 md:gap-2 md:flex-row md:justify-evenly">
          <div className="flex flex-col gap-1 md:gap-3 flex-1 p-3">
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
              <Field
                name="time"
                as="select"
                id="res-time"
                className={inputClass}
              >
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
          </div>
          <div className="flex flex-col gap-1 md:gap-3 flex-1 p-3 ">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                className={inputClass}
              />
              <ErrorMessage
                className="text-red-500 text-sm"
                name="firstName"
                component="div"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
                className={inputClass}
              />
              <ErrorMessage
                className="text-red-500 text-sm"
                name="lastName"
                component="div"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className={inputClass}
              />
              <ErrorMessage
                className="text-red-500 text-sm"
                name="email"
                component="div"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mobile">Mobile number</label>
              <Field
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Mobile number"
                className={inputClass}
              />
              <ErrorMessage
                className="text-red-500 text-sm"
                name="mobile"
                component="div"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center p-3">
          <button
            type="submit"
            className="border border-solid border-black rounded-lg px-3 py-1 bg-yellow-200"
          >
            Make your reservartion
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;
