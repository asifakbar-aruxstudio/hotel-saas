// controllers/authController.js
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ msg: "User not found" });

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ user, token });
};