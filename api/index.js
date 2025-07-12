const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("../config");
const customerRoutes = require("../customer/routes");
const setupSwaggerDocs = require("../swagger");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.use("/api/customers", customerRoutes);

setupSwaggerDocs(app);

const PORT = +process.env.PORT || 5000;
console.log("Port", PORT);

app.listen(5000);

module.exports = app;
