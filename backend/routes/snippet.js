const express = require("express");
const Snippet = require("../models/Snippet");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create snippet
router.post("/", protect, async (req, res) => {
  const { title, code } = req.body;
  const snippet = await Snippet.create({
    title,
    code,
    userId: req.user._id,
  });
  res.json(snippet);
});

// Get user's snippets
router.get("/", protect, async (req, res) => {
  const snippets = await Snippet.find({ userId: req.user._id });
  res.json(snippets);
});

module.exports = router;
