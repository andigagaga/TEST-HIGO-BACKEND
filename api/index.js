require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("../config");
const customerRoutes = require("../customer/routes");
const setupSwaggerDocs = require("../swagger");

const app = express();

const options = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "http://127.0.0.1:5000",
    "https://be-ffrga41d2-hasaelwebs-projects.vercel.app",
    // Add your frontend domain here
    "https://test-higo-backend.vercel.app",
    // Allow all origins for development (remove in production)
    "*",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(options));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HIGO Backend API" });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use("/api/customers", customerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// For local development only
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

setupSwaggerDocs(app);

module.exports = app;
