// controllers/paymentController.js
import Payment from "../models/Payment.js";

export const makePayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};