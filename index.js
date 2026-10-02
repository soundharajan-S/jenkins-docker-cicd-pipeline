const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>CI/CD Node App is LIVE! 🚀</h1>
    <p>Deployed with Jenkins + Docker + EC2</p>
    <p>Project by Soundhar</p>
    <p>Status: Running on Port 3000</p>
  `);
});

app.listen(port, () => {
  console.log('Running on port 3000');
});
