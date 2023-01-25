const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

module.exports.handler = async (event) => {

    try {
        let details = JSON.parse(event.body);
        console.log("In updateEquipment function, incoming:", details);
        const db = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = db.collection("accounts");
        const updateEquipment = await collection
            .updateOne({ username: details.username }, { $set: { equipment: details.equipped } })
        console.log("updateEquipmentFunction:", updateEquipment);
        // response of the updateOne -> acknowledged should be true and modified count:1 
        // const newEquipmentStatus = await collection.findOne({ username: details.username });
        // console.log("Equipped status is currently:", newEquipmentStatus.equipment);
        // //confirms that the password has been changed
        // const updateMessage = { msg: "Equipment status updated!" }
        return { statusCode: 200, body: JSON.stringify("Success!") };
    }
catch (error) {
    console.log("Could not be updated!");
    return { statusCode: 500, body: error.toString() };
  }}

