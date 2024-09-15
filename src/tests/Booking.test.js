import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import { reducer } from "../pages/BookingPage";
import { Formik } from "formik";
import CustomDatePicker from "../components/CustomDatePicker";
import BookingForm from "../components/BookingForm";
import PaymentForm from "../components/PaymentForm";

// Mock the props
const bookingFormMockProps = {
  onDateChange: jest.fn(),
  formInitialValues: {
    date: null,
    time: "",
    guests: 1,
    occasion: "Ordinary",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  },
  availableTimes: ["Select a time"],
  occasions: [
    { id: 1, title: "Birthday" },
    { id: 1, title: "Anniversarry" },
    { id: 1, title: "Wedding" },
  ],
  onSubmit: jest.fn(),
};

const paymentFormMockProps = {
  onDateChange: jest.fn(),
  formInitialValues: {
    cardholdername: "",
    cardnumber: "",
    cardexpiry: null,
    ccv: "",
  },
  onSubmit: jest.fn(),
};

const fillFieldAndBlur = (labelText, value) => {
  // Find the input fields
  const input = screen.getByLabelText(new RegExp(labelText, "i"));
  fireEvent.change(input, { target: { value } });
  fireEvent.blur(input);
};

const checkErrorMessages = async (type, messages) => {
  if (type === "toBe") {
    for (const message of messages) {
      expect(await screen.findByText(message)).toBeInTheDocument();
    }
  } else {
    for (const message of messages) {
      expect(await screen.queryByText(message)).not.toBeInTheDocument();
    }
  }
};

describe("Available Times with useReducer", () => {
  test("reducer should return an array when selecting a date", () => {
    const initialState = [];
    const action = {
      type: "UPDATE_TIMES",
      payload: ["10:00", "12:00", "11:00"],
    };

    //test the reducer,
    const updateTimes = reducer(initialState, action);

    expect(Array.isArray(updateTimes)).toBe(true); // Checking if updateTimes is an array
    expect(updateTimes.length).toBeGreaterThan(0); //check if it returns a non-empty array
  });
});

describe("Custom Datepicker", () => {
  const mockDateChange = jest.fn();
  //check if the datepicker is rendered
  test("date picker is properly rendered and fully functional", () => {
    render(
      <div data-testid="custom-date-picker">
        <CustomDatePicker
          id="date-picker"
          selected={new Date()}
          onChange={mockDateChange}
          // data-testid is for testing ID,
        />
      </div>
    );

    // Find the DatePicker input by its id
    const datePickerWrapper = screen.getByTestId("custom-date-picker");
    // Ensure the input element is rendered
    expect(datePickerWrapper).toBeInTheDocument();

    // Query within the wrapper
    const datePickerInput = within(datePickerWrapper).getByRole("textbox");
    expect(datePickerInput).toBeInTheDocument();

    // Optionally, check if the input has the expected id
    expect(datePickerInput).toHaveAttribute("id", "date-picker");

    // Simulate clicking the date picker to open it

    // Simulate selecting a date (for example, September 15, 2023)
    fireEvent.change(datePickerInput, { target: { value: "09/15/2023" } });

    // Assert that the onChange function was called
    expect(mockDateChange).toHaveBeenCalled();
    fireEvent.focus(datePickerInput);
  });
});

describe("BookingForm Fields", () => {
  //check text fields
  test("shows error message when fields are invalid or is empty", async () => {
    render(
      <Formik initialValues={bookingFormMockProps.formInitialValues}>
        <BookingForm {...bookingFormMockProps} />
      </Formik>
    );

    // Simulate submitting without entering any value in the  field
    fillFieldAndBlur("First name", "");
    fillFieldAndBlur("Last name", "");
    fillFieldAndBlur("Email", "");
    fillFieldAndBlur("Mobile number", "");

    // Find and submit the form
    const submitButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(submitButton);

    // Check if error message appears
    await waitFor(() => {
      checkErrorMessages("toBe", [
        /First name is required/,
        /Last name is required/,
        /Email is required/,
        /Mobile number is required/,
      ]);
    });
  });

  test("does not show error message when a field is valid", async () => {
    render(
      <Formik initialValues={bookingFormMockProps.formInitialValues}>
        <BookingForm {...bookingFormMockProps} />
      </Formik>
    );

    // Simulate entering a valid value in the first name field
    fillFieldAndBlur("First name", "j");
    fillFieldAndBlur("Last name", "Jones");
    fillFieldAndBlur("Email", "johnjones@gmail.com");
    fillFieldAndBlur("Mobile number", "09090909");

    // Find and submit the form
    const submitButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(submitButton);

    // Ensure there is no error message
    await waitFor(() => {
      checkErrorMessages("notToBe", [
        /First name is required/,
        /Last name is required/,
        /Email is required/,
        /Mobile number is required/,
      ]);
    });
  });

  test("time select element should update available times when selecting a date", async () => {
    //test the BookingPage Component

    render(
      <Formik initialValues={bookingFormMockProps.formInitialValues}>
        <BookingForm {...bookingFormMockProps} />
      </Formik>
    );

    //Find the CustomDatePicker component since it is responsible for triggering the updateTimes function
    const datePicker = screen.getByPlaceholderText(/Reservation date/i);

    //Simulate selecting a date
    fireEvent.change(datePicker, { target: { value: "2024-09-10" } });

    //wait for the available times to update
    await waitFor(() => {
      // For example, if you render availableTimes in the BookingForm, you might check the select element
      // Check if available times are updated
      const timeSelect = screen.getByLabelText(/Time/i);
      const timeOptions = within(timeSelect).getAllByRole("option");
      expect(timeOptions.length).toBeGreaterThan(0);
    });
  });

  test("ocassion select element should properly render all the options", async () => {
    render(
      <Formik initialValues={bookingFormMockProps.formInitialValues}>
        <BookingForm {...bookingFormMockProps} />
      </Formik>
    );
    await waitFor(() => {
      // Check if available times are updated
      const occasionSelect = screen.getByLabelText(/Occasion/i);
      const occasionOptions = within(occasionSelect).getAllByRole("option");
      expect(occasionOptions.length).toBe(3); // anniversary, wedding, and birthday
    });
  });
});

describe("Payment form fields", () => {
  test("shows error message when fields are invalid or is empty", async () => {
    render(
      <Formik initialValues={paymentFormMockProps.formInitialValues}>
        <PaymentForm {...paymentFormMockProps} />
      </Formik>
    );

    // Simulate entering a valid value in the first name field
    fillFieldAndBlur("Cardholder name", "");
    fillFieldAndBlur("Card number", "");
    fillFieldAndBlur("CCV", "");

    // Find and submit the form
    const submitButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(submitButton);

    // Ensure there is no error message
    await waitFor(() => {
      checkErrorMessages("toBe", [
        /Cardholder name is required/,
        /Card number is required/,
        /CCV is required/,
      ]);
    });
  });

  test("does not show error message when a field is valid", async () => {
    render(
      <Formik initialValues={paymentFormMockProps.formInitialValues}>
        <PaymentForm {...paymentFormMockProps} />
      </Formik>
    );

    // Simulate entering a valid value in the first name field
    fillFieldAndBlur("Cardholder name", "John Jones");
    fillFieldAndBlur("Card number", "232323232");
    fillFieldAndBlur("CCV", "111");

    // Find and submit the form
    const submitButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(submitButton);

    // Ensure there is no error message
    await waitFor(() => {
      checkErrorMessages("notToBe", [
        /Cardholder name is required/,
        /Card number is required/,
        /CCV is required/,
      ]);
    });
  });
});
