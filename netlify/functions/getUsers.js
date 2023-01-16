const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient("mongodb://0.0.0.0/");

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    console.log("In getUsers function");
    const db = (await clientPromise).db("acebook_test");
    const collection = db.collection("users");
    const results = await collection.find({}).toArray();
    console.log("from getUsers:", results[0]);
    return { statusCode: 200, body: JSON.stringify(results) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
