import express from "express";
const app = express();
const port = 3000;
import path from "path";
import fs from "fs";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.render("index", { files: files });
  });
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf8", (err, data) => {
    res.render("show", { file: req.params.filename, data: data });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("_")}`,
    req.body.note,
    (err) => {
      res.redirect("/"); // Redirect to the home page after form submission
    }
  );
});

app.post("/delete/:filename", (req, res) => {
  const filePath = `./files/${req.params.filename}`;
  fs.unlink(filePath, (err) => {
    res.redirect("/"); // Redirect to the home page after deletion
  });
});

app.get("/edit/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf8", (err, data) => {
    res.render("edit", { file: req.params.filename, data: data });
  });
});

app.post("/edit/:filename", (req, res) => {
  const oldPath = `./files/${req.params.filename}`;
  const newFilename = req.body.title.trim().split(" ").join("_");
  const newPath = `./files/${newFilename}`;
  fs.rename(oldPath, newPath, (renameErr) => {
    fs.writeFile(newPath, req.body.note, "utf8", (writeErr) => {
      res.redirect("/");
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
