require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const snippetRoutes = require('./routes/snippet');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/snippets', snippetRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

// Connect DB + Start Server
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
