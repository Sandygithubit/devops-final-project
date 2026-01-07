const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    service: "DevOps Backend API",
    status: "Running",
    version: "1.0.0"
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
