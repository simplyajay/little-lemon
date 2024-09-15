import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { paymentValidationSchema } from "../validation/BookingFormValidation";
import CustomDatePicker from "./CustomDatePicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";

const PaymentForm = ({ formInitialValues, onPrevious, onSubmit }) => {
  const today = new Date();
  const minDate = new Date(today);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={paymentValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="items-center min-w-xs md:w-1/3 w-9/12 p-5 flex flex-col gap-5">
        <div className="w-full shadow-lg bg-blue-100 border border-solid p-5 border-gray-400 rounded-xl">
          <h1 className="text-center text-xl">
            <strong>Payment Details</strong>
          </h1>
          <div className="flex flex-col gap-4 md:gap-2 md:flex-row md:justify-evenly">
            <div className="flex flex-col gap-1 md:gap-3 flex-1 p-3">
              <FormField
                label="Cardholder name"
                name="cardholdername"
                placeholder="Enter cardholder name"
                type="text"
              />

              <FormField
                label="Card number"
                name="cardnumber"
                placeholder="Enter cardnumber"
                type="text"
              />
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1 md:pr-5">
                  <Field>
                    {({ field, form }) => (
                      <div className="flex flex-col">
                        <label htmlFor="cardexpiry">Expiry Date</label>
                        <CustomDatePicker
                          {...field}
                          name="cardexpiry"
                          id="cardexpiry"
                          iconSize={18}
                          placeholderText="Card expiry date"
                          className="p-1 rounded-lg min-w-full"
                          minDate={minDate}
                          selected={form.values.cardexpiry}
                          onChange={(date) => {
                            form.setFieldValue("cardexpiry", date);
                          }}
                        ></CustomDatePicker>
                        <ErrorMessage
                          className="text-red-500 text-sm"
                          name="cardexpiry"
                          component="div"
                        />
                      </div>
                    )}
                  </Field>
                </div>

                <div className="flex-1 md:pl-5">
                  <FormField
                    label="CCV"
                    name="ccv"
                    placeholder="Enter ccv"
                    type="text"
                  />
                </div>
              </div>
            </div>
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
            aria-label="submit form"
          >
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default PaymentForm;
