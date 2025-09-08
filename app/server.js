const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BRANCH = process.env.GIT_BRANCH || 'unknown';

app.get('/', (req, res) => {
  res.send(`Hello from Node.js app scaffolded by DevHub! (You are currently on branch: <strong>${BRANCH}</strong>). <em>This is Revision 101</em>`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});