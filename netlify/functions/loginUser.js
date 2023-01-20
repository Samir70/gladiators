const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

module.exports.handler = async (event) => {
  try {
    let details = JSON.parse(event.body);
    console.log("In loginUser function, incoming:", details);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("accounts");
    const user = await collection.findOne({ email: details.email });
    console.log("loginUser found:", user);
    if (user === null) {
      return { statusCode: 401, body: JSON.stringify("Failed login") };
    }
    if (details.password === user.password) {
      return { statusCode: 200, body: JSON.stringify(user) };
    } else {
      return { statusCode: 401, body: JSON.stringify("Failed login") };
    }
  } catch (error) {
    console.log("In loginUser function: ERROR");
    return { statusCode: 500, body: error.toString() };
  }
};
