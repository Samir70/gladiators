const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

module.exports.handler = async (event) => {

  try {
    let details = JSON.parse(event.body);
    console.log("In updatepassword function, incoming:", details);
    const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = db.collection("accounts");
    //from the username, find the current password and see if it matches
    const currentUser = await collection.findOne({ username: details.username });
    const currentUserPass = currentUser.password;
    if (details.currentPass == currentUserPass) {
      //check if password confirmation is the same as new password
      if (details.password == details.confirmPass) {
        const updatePassword = await collection
          .updateOne({ username: details.username }, { $set: { password: details.password } })
        console.log("updatePasswordFunction:", updatePassword);
        // response of the updateOne -> acknowledged should be true and modified count:1 
        const newPass = await collection.findOne({ username: details.username });
        console.log("Password is currently", newPass.password);
        //confirms that the password has been changed
        const passMessage = { msg: "Password changed!" }
        return { statusCode: 200, body: JSON.stringify(passMessage) };
        //would like messages to be returned in the response body
      }
      else {
        console.log("password do not match")
        const passMessage = { msg: "New passwords do not match, please try again." }
        return { statusCode: 200, body: JSON.stringify(passMessage) };
      }
    }
    else {
      console.log("incorrect password")
      const passMessage = { msg: "Incorrect password, please try again." }
      return { statusCode: 200, body: JSON.stringify(passMessage) };
    }
  } catch (error) {
    console.log("Password not changed");
    return { statusCode: 500, body: error.toString() };
  }
};


