require("dotenv").config();
const express = require("express");
const app = express();
const database = require("./database/mongoose.js");
const mongoose = require("mongoose");
const battleSchema = require("./database/battleSchema.js");

app.get("/test", async (req, res) => {
  let topWin = await battleSchema.find({}).sort("-wins").limit(5);
  res.send(topWin);
});

database.init();
app.listen(process.env.PORT, () => {
  console.log(`BACKENDUL A PORNIT PE ${process.env.PORT}`);
});
