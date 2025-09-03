const express = require('express');
const app = express();
const PORT = process.env.PORT || ${{ values.port }};

app.get('/', (req, res) => {
  res.send('Hello from Node.js app scaffolded by DevHub!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});