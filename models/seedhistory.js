const { History } = require("./history");
const { wolfHistoryID, jetHistoryID } = require("./historyids");


const Exercise = require('./exercise')
const {
    curlID,
    squatID,
    benchpressID,
    lungeID
} = require("./exerciseids");

const accounts = [
  {
    date: "2023-01-26",
    _id: wolfHistoryID, //will need ot be found by username (store query)
    exercises: [curlID, squatID]
  },
  {
    date:"2023-01-27",
    _id: jetHistoryID,
    exercises: [benchpressID, lungeID]
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
