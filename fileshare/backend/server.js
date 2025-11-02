import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/filesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const FileSchema = new mongoose.Schema({
  name: String,
  size: Number,
  date: String,
});

const File = mongoose.model("File", FileSchema);

// Upload a file
app.post("/upload", async (req, res) => {
  const file = new File(req.body);
  await file.save();
  res.send("File saved to MongoDB");
});

// Get all files
app.get("/files", async (req, res) => {
  const files = await File.find();
  res.json(files);
});

app.listen(4000, () => console.log("Server running on port 4000"));
