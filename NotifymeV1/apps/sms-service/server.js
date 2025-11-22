const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.SMS_SERVICE_PORT || 3003;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'sms-service' });
});

app.listen(PORT, () => {
  console.log(`SMS Service running on port ${PORT}`);
});
