const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  date: { type: [Date], default: Date.now },
  body: { type: [String], required: true },
  userID: { type: [String], required: true },
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
