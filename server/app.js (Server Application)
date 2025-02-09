const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dreamAI = require('./dream-ai');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/interpret-dream', (req, res) => {
  const { dreamText } = req.body;
  const interpretedData = dreamAI.interpretDream(dreamText);
  res.json(interpretedData);
});

app.listen(5000, () => console.log('Server running on port 5000'));
