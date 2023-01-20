const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

module.exports.handler = async (event) => {
  try {
    // console.log("In addUser function, incoming:", event.queryStringParameters);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("accounts");
    const newUserId = await collection
      .insertOne(event.queryStringParameters)
      .then((res) => res.insertedId);
    // console.log("In addUser function: made newUserId", newUserId);
    // .findById doesn't seem to exist
    const newUser = await collection.findOne({ _id: newUserId });
    // console.log("In addUser function: made newUser", newUser);
    return { statusCode: 200, body: JSON.stringify(newUser) };
  } catch (error) {
    console.log("In addUser function: ERROR");
    return { statusCode: 500, body: error.toString() };
  }
};

// module.exports = { handler };