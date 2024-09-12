import * as Yup from "yup";

export const reservationValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string().required("Mobile number is required"),
  date: Yup.date().required("Reservation date is required"),
  time: Yup.string().required("Reservation time is required"),
  guests: Yup.number()
    .min(1, "Number of guests must be at least 1")
    .max(6, "Number of guests can be at most 6")
    .required("Number of guests is required"),
  occation: Yup.string(),
});

export const paymentValidationSchema = Yup.object({
  cardholdername: Yup.string().required("Cardholder name is required"),
  cardnumber: Yup.string().required("Card number is required"),
  cardexpiry: Yup.date().required("Card expiry date is required"),
  ccv: Yup.string().required("CCV is required"),
});
