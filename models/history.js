const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  date: Date,
  exercises: [{type:ObjectId, ref:"Exercise"}],
  user: {type:ObjectId, ref:"Account"}
});

const History= mongoose.model("History", HistorySchema);

module.exports = { History, HistorySchema };
