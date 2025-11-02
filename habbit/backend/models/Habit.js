const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  doneDates: [Date] // Stores the dates when habit was done
});

module.exports = mongoose.model("Habit", habitSchema);
