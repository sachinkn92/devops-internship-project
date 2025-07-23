const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('DevOps Internship Project - Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});