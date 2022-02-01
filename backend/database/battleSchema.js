const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userID: String,
  userTag: String,
  wins: { type: Number, default: 0 },
  loses: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  attack: { type: Number, default: 1 },
  health: { type: Number, default: 100 },
  georgei: { type: Number, default: 0 },
  newUser: { type: Boolean, default: true },
  daily: Number,
});

module.exports = mongoose.model("scandalSchema", battleSchema);
