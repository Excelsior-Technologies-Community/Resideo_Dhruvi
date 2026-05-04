const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const neighborhoodRoutes = require("./routes/neighborhoodRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

app.use("/api/neighborhoods", neighborhoodRoutes);
app.use("/api/services", serviceRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});