const moment = require('moment')
const { History } = require("../../models/history.cjs");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    let details = JSON.parse(event.body)
    // console.log("incoming", details)
    let dateFormatted = (moment(details.completionDate).format('YYYY-MM-DD'))
    let workout = {workout: {date: dateFormatted, exercises:details.workout.map(e=>e.name)}}
    //console.log("In getHistoryfunction", details);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("histories");
    let allWorkouts = await collection.updateOne({username:details.username}, {$push:workout}); //is only a findOne because there should only be one
    //console.log("from getHistory:", allWorkouts);
    return { statusCode: 200, body: JSON.stringify("Successfully added to your history!") };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

