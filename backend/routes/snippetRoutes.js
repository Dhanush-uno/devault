const express = require('express');
const jwt = require('jsonwebtoken');
const Snippet = require('../models/Snippet');

const router = express.Router();

// Auth middleware
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch {
    return res.status(401).json({ msg: 'Token failed' });
  }
};

// Create snippet
router.post('/', protect, async (req, res) => {
  const snippet = await Snippet.create({ ...req.body, owner: req.user });
  res.json(snippet);
});

// Get all user snippets
router.get('/', protect, async (req, res) => {
  const snippets = await Snippet.find({ owner: req.user });
  res.json(snippets);
});

// Get all public snippets
router.get('/public', async (req, res) => {
  const snippets = await Snippet.find({ isPublic: true });
  res.json(snippets);
});

// Get single snippet
router.get('/:id', protect, async (req, res) => {
  const snippet = await Snippet.findOne({ _id: req.params.id, owner: req.user });
  res.json(snippet);
});

// Update snippet
router.put('/:id', protect, async (req, res) => {
  const snippet = await Snippet.findOneAndUpdate(
    { _id: req.params.id, owner: req.user },
    req.body,
    { new: true }
  );
  res.json(snippet);
});

// Delete snippet
router.delete('/:id', protect, async (req, res) => {
  await Snippet.findOneAndDelete({ _id: req.params.id, owner: req.user });
  res.json({ msg: 'Deleted' });
});

module.exports = router;
