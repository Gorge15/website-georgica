require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    data: "merge",
  });
});

app.listen(process.env.PORT, () => {
  console.log("BACKENDUL A PORNIT");
});
