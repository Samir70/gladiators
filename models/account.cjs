const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gladiatorScore: { type: Number, default: 0 }, //to be used for the leaderboard
  //these values below would be flags for recommendations of exercises
  experience: String, //this will probably be advanced (A), intermediate (I) or beginner (B) -is a flag for workouts
  equipment: Boolean, //whether they have access to equipment - implement an array of available equipment
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = { Account, AccountSchema };
