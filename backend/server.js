require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(
  cors({
    origin: ["https://agent-6a666b776376dfa3dc4c3010--mini-leaddesk.netlify.app"],
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
