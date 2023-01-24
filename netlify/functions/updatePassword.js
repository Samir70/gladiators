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
        const updatePassword = await collection
          .updateOne({ username: details.username }, { $set: { password: details.password } })
        // console.log("updatePasswordFunction:", updatePassword);
        // response of the updateOne -> acknowledged should be true and modified count:1 
        // const newPass = await collection.findOne({ username: details.username });
        // console.log("Password is currently", newPass.password);
        //confirms that the password has been changed
        return { statusCode: 200, body:JSON.stringify("Success!")};
  } catch (error) {
    console.log("Password not changed");
    return { statusCode: 500, body: error.toString() };
  }
};


