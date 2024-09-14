import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { reservationValidationSchema } from "../validation/BookingFormValidation";
import CustomDatePicker from "./CustomDatePicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";

const BookingForm = ({ onDateChange, availableTimes, occasions, onSubmit }) => {
  const timings = availableTimes || [];

  // Set the minimum date to tomorrow to exclude today and past dates
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);

  //excluded dates
  const filteredDates = (date) => date.getDay() !== 0;

  const ResetTimeField = () => {
    const { setFieldValue } = useFormikContext();

    useEffect(() => {
      setFieldValue("time", "");
    }, [timings, setFieldValue]);

    return null;
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    date: null,
    time: "",
    guests: "",
    occasion: "Ordinary",
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={reservationValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="items-center min-w-xs md:w-1/2 w-9/12 p-5 shadow-lg bg-blue-100 border border-solid border-gray-400 rounded-xl">
        <ResetTimeField />
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
                    className="p-1 rounded-lg min-w-full"
                    selected={form.values.date}
                    filterDate={filteredDates}
                    minDate={minDate}
                    onChange={(date) => {
                      form.setFieldValue("date", date);
                      onDateChange(date);
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
            <FormField
              label="Time"
              name="time"
              as="select"
              defaultoption={{ value: "", label: "Select a Time" }}
              options={timings.map((time) => ({ value: time, label: time }))}
            />

            <FormField
              label="Party Size"
              name="guests"
              placeholder="Number of guests"
              type="number"
            />

            <FormField
              label="Occasion"
              name="occasion"
              as="select"
              options={occasions.map((occasion) => ({
                value: occasion.id,
                label: occasion.title,
              }))}
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-3 flex-1 p-3 ">
            <FormField
              label="First name"
              name="firstName"
              placeholder="Enter first name"
              type="text"
            />

            <FormField
              label="Last name"
              name="lastName"
              placeholder="Enter last name"
              type="text"
            />

            <FormField
              label="Email"
              name="email"
              placeholder="Enter email address"
              type="email"
            />

            <FormField
              label="Mobile Number"
              name="mobile"
              placeholder="Enter mobile number"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-center p-3">
          <button
            type="submit"
            className="border border-solid border-black rounded-lg px-3 py-1 bg-customYellow min-w-64"
          >
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;
