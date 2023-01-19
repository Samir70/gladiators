const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

// const jet = {
//   username: "Jet2",
//   email: "jet2@email.com",
//   password: "jet",
//   gladiatorScore: 10,
//   experience: "A",
//   equipment: true,
// };

module.exports.handler = async (event) => {
  try {
    console.log("In addUser function");
    console.log(event.queryStringParameters);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("accounts");
    const result = await collection.insertOne(event.queryStringParameters)
    console.log("from addUser:", result);
    // return { statusCode: 200, body: "Temp result" };
    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (error) {
    console.log("In addUser function");
    return { statusCode: 500, body: error.toString() };
  }
};

// module.exports = { handler };
