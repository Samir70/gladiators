const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    let tag = JSON.parse(event.body).tag
    console.log("In getExercises function", tag);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("exercises");
    const results = await (await collection.find({}).toArray()).filter(e => e.tags.includes(tag));
    console.log("from getExercises:", results[0]);
    return { statusCode: 200, body: JSON.stringify(results) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
