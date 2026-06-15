const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    project: "Exero AI",
    status: "online"
  });
});

app.get("/api/market", (req, res) => {
  res.json({
    btc: 106000,
    eth: 6200
  });
});

app.listen(3000, () => {
  console.log("Exero API running on port 3000");
});
