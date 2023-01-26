const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    let details = JSON.parse(event.body)
    console.log("In getWorkoutDetails function");
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("history");
    const results = await collection.findOne({username:details.username})
    console.log("from getWorkoutDetails:", results);
    return { statusCode: 200, body: JSON.stringify(results) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
