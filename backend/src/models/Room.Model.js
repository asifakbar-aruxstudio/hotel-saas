// models/Room.js
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  title: String,
  price: Number,
  image: String,
  description: String,
  city: String,
});

export default mongoose.model("Room", roomSchema);