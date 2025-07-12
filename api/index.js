const serverless = require("serverless-http");
const express = require("express");

const app = express();

// Routing
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Export untuk Vercel
module.exports.handler = serverless(app);
