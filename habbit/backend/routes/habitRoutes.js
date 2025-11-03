const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

// Get all habits
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits); // ✅ This must send an array
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new habit
router.post("/", async (req, res) => {
  try {
    const habit = new Habit({ name: req.body.name });
    const newHabit = await habit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
