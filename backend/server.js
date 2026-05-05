const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const neighborhoodRoutes = require("./routes/neighborhoodRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const authRoutes = require("./routes/authRoutes");
const featureRoutes = require('./routes/featureRoutes');
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/neighborhoods", neighborhoodRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use('/api', featureRoutes);


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});