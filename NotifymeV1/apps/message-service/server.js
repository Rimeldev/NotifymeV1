const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.MESSAGE_SERVICE_PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'message-service' });
});

app.listen(PORT, () => {
  console.log(`Message Service running on port ${PORT}`);
});
