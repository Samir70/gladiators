const { mongoose } = require("mongoose");
const { History } = require("../../models/history");
console.log("getHistory function")
require("dotenv").config();

module.exports.handler = async (event) => {
  try {
    let details = JSON.parse(event.body);
    console.log("In getHistory function, number of connections:", mongoose.connection.base.connections.length);
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gladiators",
    });
    // const History = db.model("History", HistorySchema);
    let allWorkouts = await History.find({ _id: details.userID })
      //.populate("exercises")
    //   .then((data => {console.log(data);
    // return { statusCode: 200, body: JSON.stringify(data) };}))
    console.log(allWorkouts)

  } catch (error) {
    console.log("In getHistory function: ERROR");
    return { statusCode: 500, body: JSON.stringify(error.toString()) };
  }
};

// module.exports = { handler };
