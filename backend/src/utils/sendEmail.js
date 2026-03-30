// utils/sendEmail.js
import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_app_password",
    },
  });

  await transporter.sendMail({
    from: "Hotel Booking",
    to,
    subject,
    text,
  });
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