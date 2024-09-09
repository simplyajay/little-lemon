import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import BookingPage from "../pages/BookingPage";

test("renders your component", () => {
  render(<BookingPage />);
  const element = screen.getByText("This is booking page");
  expect(element).toBeInTheDocument();
});
