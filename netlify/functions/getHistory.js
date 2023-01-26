// const { mongoose } = require("mongoose");
const { History } = require("../../models/history.cjs");
// console.log("getHistory function")
// require("dotenv").config();

// module.exports.handler = async (event) => {
//   try {
//     let details = JSON.parse(event.body);
//     console.log("In getHistory function, number of connections:", mongoose.connection.base.connections.length);
//     const db = await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "gladiators",
//     });
//     // const History = db.model("History", HistorySchema);
//     let allWorkouts = await History.find({ _id: details.userID })
//       //.populate("exercises")
//     //   .then((data => {console.log(data);
//     // return { statusCode: 200, body: JSON.stringify(data) };}))
//     console.log(allWorkouts)

//   } catch (error) {
//     console.log("In getHistory function: ERROR");
//     return { statusCode: 500, body: JSON.stringify(error.toString()) };
//   }
// };

// // module.exports = { handler };

const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    let details = JSON.parse(event.body)
    //console.log("In getHistoryfunction", details);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("histories");
    let allWorkouts = await collection.findOne({username:details.username}); //is only a findOne because there should only be one
    //console.log("from getHistory:", allWorkouts);
    return { statusCode: 200, body: JSON.stringify(allWorkouts) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

