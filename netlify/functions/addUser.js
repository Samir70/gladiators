const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

module.exports.handler = async (event) => {
  try {
    let details = JSON.parse(event.body);
    console.log("In addUser function, incoming:", details);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("accounts");
    const emailInUse = await collection.findOne({ email: details.email });
    const username = await collection.findOne({ username: details.username });
    if (emailInUse === null && username === null) {
      const newUserId = await collection
        .insertOne({ ...details, __v: 0 })
        .then((res) => res.insertedId);
      console.log("In addUser function: made newUserId", newUserId);
      // .findById doesn't seem to exist
      const newUser = await collection.findOne({ _id: newUserId });
      console.log("In addUser function: made newUser", newUser);
      return { statusCode: 200, body: JSON.stringify(newUser) };
    } else if (emailInUse) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          signUpFailed: true,
          msg: "that email is in use",
        }),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({
          signUpFailed: true,
          msg: "that username is in use",
        }),
      };
    }
  } catch (error) {
    console.log("In addUser function: ERROR");
    return { statusCode: 500, body: error.toString() };
  }
};

// module.exports = { handler };
