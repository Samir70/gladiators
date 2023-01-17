const { ObjectID } = require("mongodb");

const wolfIDString = "63b810bd87affe92a654e712";
const jetIDString = "63b810bd87affe92a654e713";
const hunterIDString = "63b810bd87affe92a654e804";
const shadowIDString = "63b810bd87affe92a654e999";

const wolfID = ObjectID(wolfIDString);
const jetID = ObjectID(jetIDString);
const hunterID = ObjectID(hunterIDString);
const shadowID = ObjectID(shadowIDString);

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