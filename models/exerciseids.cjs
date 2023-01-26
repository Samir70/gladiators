const { ObjectId } = require("mongodb");

const curlIDString = "63b810bd87affe92a654e710";
const squatIDString = "63b810bd87affe92a654e711";
const benchpressIDString = "63b810bd87affe92a654e802";
const lungeIDString = "63b810bd87affe92a654e997";

const curlID = ObjectId(curlIDString);
const squatID = ObjectId(squatIDString);
const benchpressID = ObjectId(benchpressIDString);
const lungeID = ObjectId(lungeIDString);

module.exports = {
  curlID,
  squatID,
  benchpressID,
  lungeID,
  curlIDString,
  squatIDString,
  benchpressIDString,
  lungeIDString,
};