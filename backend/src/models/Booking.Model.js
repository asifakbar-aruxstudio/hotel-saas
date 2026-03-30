// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    unique: true,
  },
  userName: String,
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  checkin: Date,
  checkout: Date,
  totalPrice: Number,
  status: {
    type: String,
    default: "pending",
  },
});

// Auto generate Booking ID
bookingSchema.pre("save", function (next) {
  this.bookingId = "BK" + Date.now();
  next();
});

export default mongoose.model("Booking", bookingSchema);