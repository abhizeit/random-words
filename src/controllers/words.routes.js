const express = require("express");

const app = express.Router();
const words = [
  "favorite",
  "shoe",
  "building",
  "stairs",
  "more",
  "cheese",
  "butter",
  "mouth",
  "double",
  "private",
];
app.get("/random", (req, res) => {
  try {
    const word = words[Math.floor(Math.random() * words.length)];
    res.send({ error: false, word });
  } catch (e) {
    res.send({ error: true });
  }
});

module.exports = app;
