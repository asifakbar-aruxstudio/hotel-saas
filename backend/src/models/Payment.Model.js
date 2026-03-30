const paymentSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  amount: Number,
  method: String,
  status: {
    type: String,
    default: "pending",
  },
});

export default mongoose.model("Payment", paymentSchema);