const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    console.log("In getStrength function");
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("exercises");
    const results = await collection.find({tags:"strength"}).toArray();
    console.log("from getStrength:", results[0]);
    return { statusCode: 200, body: JSON.stringify(results) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };