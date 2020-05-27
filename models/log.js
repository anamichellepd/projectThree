const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  date: { type: [Date], required: true },
  body: { type: [String], default: Date.now },
  userID: { type: [String], required: true },
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
