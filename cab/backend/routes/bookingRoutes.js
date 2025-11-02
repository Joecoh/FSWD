import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

// POST new booking
router.post("/", async (req, res) => {
  const { name, pickup, destination } = req.body;
  if (!name || !pickup || !destination) {
    return res.status(400).json({ message: "All fields required" });
  }
  try {
    const newBooking = new Booking({ name, pickup, destination });
    await newBooking.save();
    res.json(newBooking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

