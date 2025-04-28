import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Note } from "./models/schema.js";
import { User } from "./models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();
app.use(cookieParser());
app.use(express.static("public"));

await mongoose
  .connect(process.env.MONGO_URI) // Connect to MongoDB
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const newUser = await User.create({ email, password: hash });
      const token = jwt.sign({ id: newUser._id, email }, process.env.JWT_SECRET);
      res.cookie("token", token);
      res.redirect("/dashboard");
    });
  });
});

app.post("/logout", async (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.get("/login", async (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("Invalid email");
  }
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (!isMatch) {
      return res.status(401).send("Invalid password");
    }
    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res.redirect("/dashboard");
  });
});

app.get("/dashboard", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch notes created by the logged-in user
    const notes = await Note.find({ userId: decoded.id });
    res.render("dashboard", { title: notes });
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/create", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { title, note } = req.body;

    // Make sure the userId is passed when creating the note
    const newNote = await Note.create({
      title,
      note,
      userId: decoded.id, // This ensures that the user ID is associated with the note
    });

    res.redirect("/dashboard");
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(500).send("Internal Server Error");
  }
});


app.get("/show/:id", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ensure the note belongs to the logged-in user
    const note = await Note.findOne({ _id: req.params.id, userId: decoded.id });
    if (!note) {
      return res.status(403).send("Access denied");
    }

    res.render("show", { note });
  } catch (err) {
    console.error("Error fetching note:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/delete/:id", async (req, res) => {
  let note = await Note.findOneAndDelete({ _id: req.params.id });
  res.redirect("/dashboard");
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
