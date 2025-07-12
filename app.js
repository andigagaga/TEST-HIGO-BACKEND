const express = require("./api");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config");
const customerRoutes = require("./customer/routes");
const setupSwaggerDocs = require("./swagger");

const app = express();

// Connect to MongoDB
connectDB();

app.use((req, res, next) => {
  console.log("🔍 REQUEST LOG");
  console.log("URL:", req.originalUrl);
  console.log("Origin Header:", req.headers.origin);
  console.log("User-Agent:", req.headers["user-agent"]);
  console.log("Authorization:", req.headers.authorization);
  next();
});

// Middleware
app.use(
  cors({
    origin: "*", // atau spesifik seperti: "http://localhost:3000" jika di local
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.use("/api/customers", customerRoutes);

setupSwaggerDocs(app);

module.exports = app;
