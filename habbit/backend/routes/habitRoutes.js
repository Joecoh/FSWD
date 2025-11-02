const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

// Get all habits
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new habit
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const habit = new Habit({ name, description });
  try {
    const newHabit = await habit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Mark habit as done for today
router.put("/done/:id", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: "Habit not found" });

    const today = new Date().toDateString();
    if (!habit.doneDates.some(d => new Date(d).toDateString() === today)) {
      habit.doneDates.push(new Date());
      await habit.save();
    }

    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a habit
router.delete("/:id", async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habit deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
