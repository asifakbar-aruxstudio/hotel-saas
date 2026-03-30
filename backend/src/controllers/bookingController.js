// controllers/bookingController.js
import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
};

export const getBookings = async (req, res) => {
  const bookings = await Booking.find().populate("room");
  res.json(bookings);
};


import { sendEmail } from "../utils/sendEmail.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);

  await sendEmail(
    req.body.email,
    "Booking Confirmed",
    `Your booking ID is ${booking.bookingId}`
  );

  res.json(booking);
};