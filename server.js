const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.send('Hello from Node.js app scaffolded by DevHub!');
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Simple list
app.get('/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' },
  ]);
});

// Path parameter
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: `Item ${id}` });
});

// Query parameter
app.get('/search', (req, res) => {
  const { q } = req.query;
  res.json({ query: q, results: [`Result for "${q}"`] });
});

// POST with JSON body
app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
