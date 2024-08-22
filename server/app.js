require("dotenv").config(); // Harus berada di bagian paling atas
const express = require("express");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models");
const userRouter = require("./routes/user");
const careerRouter = require("./routes/career");
const direksiRouter = require("./routes/direksi");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes dengan prefix /api
app.use("/api/users", userRouter);
app.use("/api/careers", careerRouter);
app.use("/api/direksi", direksiRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
