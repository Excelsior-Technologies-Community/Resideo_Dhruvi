const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const neighborhoodRoutes = require("./routes/neighborhoodRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/neighborhoods", neighborhoodRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});