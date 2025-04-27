import express from "express";
const app = express();
const port = 3000; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import {Note} from "./models/schema.js"; // Import the Note model

dotenv.config();

await mongoose.connect(process.env.MONGO_URI) // Connect to MongoDB
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  let title = await Note.find();
  res.render("index", { title });
});

app.post("/create", async (req, res) => { 
  const { title, note } = req.body;
  const newNote = await Note.create({ title, note });
  res.redirect("/"); 
});

app.get("/show/:id", async (req, res) => {
  let note = await Note.findOne({ _id: req.params.id });
  res.render("show", { note });
});

app.post("/delete/:id", async (req, res) => {
  let note = await Note.findOneAndDelete({ _id: req.params.id });
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  let note = await Note.findOne({ _id: req.params.id });
  res.render("edit", { note });
});

app.post("/edit/:id", async (req, res) => {
  let note = await Note.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title, note: req.body.note }
  );
  res.redirect("/show/" + req.params.id); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
