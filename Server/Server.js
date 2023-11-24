const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

// Endpoint de test
app.get('/api/test', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Serverul ruleaza la adresa http://localhost:${port}`);
});

app.use(cors());