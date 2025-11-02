const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const habitRoutes = require("./routes/habitRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/habitDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/api/habits", habitRoutes);

const PORT = process.env.PORT || 5001; // changed from 5000 to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

