require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
const PORT = 8080;

app.use(limiter);
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
