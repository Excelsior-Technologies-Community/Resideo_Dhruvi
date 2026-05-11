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
const propertyRoutes = require("./routes/propertyRoutes");
const agentRoutes = require("./routes/agentRoutes");
const articleRoutes = require("./routes/articleRoutes");
const blogArticleRoutes = require("./routes/blogArticleRoutes");
const whyChooseRoutes = require("./routes/whyChooseRoutes");
const neighborhoodRoutes1 = require("./routes/neighborhoodRoutes1");

app.use("/api/neighborhoods", neighborhoodRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use('/api', featureRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api", blogArticleRoutes);
app.use("/api", whyChooseRoutes);
app.use("/api", neighborhoodRoutes1);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});