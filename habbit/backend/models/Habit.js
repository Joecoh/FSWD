const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  name: String,
  doneDates: [Date],
});

module.exports = mongoose.model("Habit", HabitSchema);
