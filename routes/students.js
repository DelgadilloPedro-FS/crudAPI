const express = require("express");
const { model } = require("mongoose");
const router = express.Router();


// GET ALL
router.get("/", (req, res) => {
  res.send("All students here");
});

// GET ONE 
router.post("/", (req, res) => {});

// PATCH UPDATE
router.patch("/:id", (req, res) => {
  res.send(`Student id: ${req.params.id}`);
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send(`Student id: ${req.params.id}`);
});

module.exports = router;
