const { ObjectId } = require("mongodb");

const wolfIDString = "63b810bd87affe92a654e712";
const jetIDString = "63b810bd87affe92a654e713";
const hunterIDString = "63b810bd87affe92a654e804";
const shadowIDString = "63b810bd87affe92a654e999";

const wolfID = ObjectId(wolfIDString);
const jetID = ObjectId(jetIDString);
const hunterID = ObjectId(hunterIDString);
const shadowID = ObjectId(shadowIDString);

module.exports = {
  wolfID,
  jetID,
  hunterID,
  shadowID,
  wolfIDString,
  jetIDString,
  hunterIDString,
  shadowIDString,
};