const { mongoose } = require("mongoose");
const { AccountSchema } = require("../../models/account.cjs");
require("dotenv").config();

module.exports.handler = async (event) => {
  try {
    let details = JSON.parse(event.body);
    // console.log("In addUser function, incoming:", details);
    console.log("In addUser function, number of connections:", mongoose.connection.base.connections.length);
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gladiators",
    });
    const Account = db.model("Account", AccountSchema);
    let msg = await Account.findOne({
      $or: [{ email: details.email }, { username: details.username }],
    }).then((account) => {
      if (account === null) {
        return null;
      } else if (account.email === details.email) {
        return "that email is in use";
      } else {
        return "that username is in use";
      }
    });
    // console.log("Out of Account.findOne() with msg", msg);
    if (msg === null) {
      const newAccount = new Account(details);
      let newUser = await newAccount.save();
      // console.log("Made newUser:", newUser)
      return {
        statusCode: 200,
        body: JSON.stringify({
          signUpFailed: false,
          msg,
          newUser
        }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({
          signUpFailed: true,
          msg
        }),
      };
    }
  } catch (error) {
    console.log("In addUser function: ERROR");
    return { statusCode: 500, body: error.toString() };
  }
};

// module.exports = { handler };
