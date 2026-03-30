// controllers/adminController.js

import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";

export const getAnalytics = async (req, res) => {

  const totalBookings = await Booking.countDocuments();
  const totalHotels = await Hotel.countDocuments();

  const revenueData = await Booking.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);

  res.json({
    totalBookings,
    totalHotels,
    totalRevenue: revenueData[0]?.totalRevenue || 0,
  });
};