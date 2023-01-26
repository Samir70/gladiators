const { ObjectId } = require("mongodb");

const wolfIDString = "63b810bd87affe92a654e715";
const jetIDString = "63b810bd87affe92a654e718";

const wolfHistoryID = ObjectId(wolfIDString);
const jetHistoryID = ObjectId(jetIDString);

module.exports = {
  wolfHistoryID,
  jetHistoryID,
};