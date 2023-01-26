const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  username: String,
  workout: [{date: Date,
  exercises: [String]},
  ]
});

const History= mongoose.model("History", HistorySchema);

module.exports = { History, HistorySchema };
