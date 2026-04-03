// routes/roomRoutes.js
import express from "express";
import Room from "../models/Room.js";

const router = express.Router();

// Get all rooms
router.get("/", async (req, res) => {
  const rooms = await Room.find().populate("hotelId");
  res.json(rooms);
});

// Get single room
router.get("/:id", async (req, res) => {
  const room = await Room.findById(req.params.id).populate("hotelId");
  res.json(room);
});

export default router;