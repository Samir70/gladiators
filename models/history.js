const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  date: {type: Date, default: Date.now},
  workedout: Boolean
});

const History= mongoose.model("History", HistorySchema);

module.exports = { History, HistorySchema };
