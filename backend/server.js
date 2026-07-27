require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(
  cors({
    origin: ["https://mini-leaddesk.netlify.app"],
  })
);

app.use(express.json());

app.use("/api/leads", require("./routes/LeadRoutes"));

app.get("/", (req, res) => {
  res.send("LeadDesk API Running");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
