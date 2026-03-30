// controllers/paymentController.js
import Stripe from "stripe";

const stripe = new Stripe("YOUR_STRIPE_SECRET_KEY");

export const stripePayment = async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};

// controllers/paymentController.js
export const jazzcashPayment = async (req, res) => {
  const { amount } = req.body;

  const fakeResponse = {
    status: "success",
    transactionId: "JC" + Date.now(),
  };

  res.json(fakeResponse);
};