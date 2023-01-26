const { History } = require("./history.cjs");
const { wolfHistoryID, jetHistoryID } = require("./historyids.cjs");


// const Exercise = require('./exercise.cjs')
// const {
//   curlID,
//   squatID,
//   benchpressID,
//   lungeID
// } = require("./exerciseids.cjs");

const accounts = [
  {
    username: "Wolf", //will need ot be found by username (store query)
    workout: [{
      date: "2023-01-26",
      exercises: ["curl", "squat"]
    }, { 
      date: "2023-01-27", 
      exercises: ["squat"] 
    }, { 
      date: "2023-01-28", 
      exercises: ["curl"] }]
  },
  {
    username: "Jet", //will need to be found by username (store query)
    workout: [{
      date: "2023-01-27",
      exercises: ["bench press", "lunge"]
    }]
  }
]

const seedHistory = async () => {
  await History.deleteMany({});
  // console.log("Seeding history");
  for (let u = 0; u < accounts.length; u++) {
    const accountHistory = new History(accounts[u]);
    await accountHistory.save();
    // console.log("seeded user:" + account);
  }
};

module.exports = seedHistory;
