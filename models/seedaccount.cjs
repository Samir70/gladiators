const { Account } = require("./account.cjs");
const { wolfID, jetID, hunterID, shadowID } = require("./userids.cjs");

const accounts = [
  {
    _id: wolfID,
    username: "Wolf",
    email: "wolf@email.com",
    password: "wolf",
    gladiatorScore: 0,
    experience: "A",
    equipment: true,
  },
  {
    _id: jetID,
    username: "Jet",
    email: "jet@email.com",
    password: "jet",
    gladiatorScore: 0,
    experience: "A",
    equipment: true,
  },
  {
    _id: hunterID,
    username: "Hunter",
    email: "hunter@email.com",
    password: "hunter",
    gladiatorScore: 0,
    experience: "B",
    equipment: false,
  },
  {
    _id: shadowID,
    username: "Shadow",
    email: "shadow@email.com",
    password: "shadow",
    gladiatorScore: 0,
    experience: "I",
    equipment: false,
  },
];

const seedAccounts = async () => {
  await Account.deleteMany({});
  // console.log("Seeding accounts");
  for (let u = 0; u < accounts.length; u++) {
    const account = new Account();
    account._id = accounts[u]._id;
    account.username = accounts[u].username;
    account.email = accounts[u].email;
    //account.profile_pic = accounts[u].profile_pic;
    account.password = accounts[u].password;
    account.gladiatorScore = accounts[u].gladiatorScore;
    account.experience = accounts[u].experience;
    account.equipment = accounts[u].equipment;
    //account.setPassword(accounts[u].password);
    await account.save();
    // console.log("seeded user:" + account);
  }
};

module.exports = seedAccounts;
