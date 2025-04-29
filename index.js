const express = require("express");
require("dotenv").config();

// APP intialize
const app = express();


//Server running PORT
app.listen(process.env.PORT, () => {
  console.log(`Server running on the : ${process.env.PORT}`);
});
