const { ObjectID } = require("mongodb");

const curlIDString = "63b810bd87affe92a654e710";
const squatIDString = "63b810bd87affe92a654e711";
const benchpressIDString = "63b810bd87affe92a654e802";
const lungeIDString = "63b810bd87affe92a654e997";

const curlID = ObjectID(curlIDString);
const squatID = ObjectID(squatIDString);
const benchpressID = ObjectID(benchpressIDString);
const lungeID = ObjectID(lungeIDString);

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