const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Node.js CI/CD Demo",
    version: "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
