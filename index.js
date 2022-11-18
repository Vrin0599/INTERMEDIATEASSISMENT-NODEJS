require("dotenv").config();
const express = require("express");
require("./config/db");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});
