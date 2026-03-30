// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "owner"],
    default: "owner",
  },
});

export default mongoose.model("User", userSchema);