import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  pickup: String,
  destination: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
