require('dotenv').config();
const express = require('express');
const cors = require('cors');
const projectsRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Portfolio API Running');
});

// API routes
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
