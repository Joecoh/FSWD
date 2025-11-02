import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/cab", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/bookings", bookingRoutes);

app.listen(4000, () => console.log("Backend running on port 4000"));
