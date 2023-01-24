const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

module.exports.handler = async (event) => {

    try {
        let details = JSON.parse(event.body);
        console.log("In updateExperience function, incoming:", details);
        const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = db.collection("accounts");
        const updateExperience = await collection
            .updateOne({ username: details.username }, { $set: { experience: details.experience } })
        console.log("updateExperienceFunction:", updateExperience);
        // response of the updateOne -> acknowledged should be true and modified count:1 
        const newExperienceLevel = await collection.findOne({ username: details.username });
        console.log("Experience is currently", newExperienceLevel.experience);
        //confirms that the experience level has been changed
        const updateMessage = { msg: "Your experience is now set at: " + newExperienceLevel.experience }
        return { statusCode: 200, body: JSON.stringify(updateMessage) };
        //would like messages to be returned in the response body
    }
catch (error) {
    console.log("Could not be updated!");
    return { statusCode: 500, body: error.toString() };
  }}
