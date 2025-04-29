const express = require("express");
require("dotenv").config();

// APP Initialize
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`server listening in PORT : ${process.env.PORT}`);
});
