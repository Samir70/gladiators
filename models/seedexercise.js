const Exercise = require('./exercise')
const {
    curlID,
    squatID,
    benchpressID,
    lungeID,
    skippingID,
    jibbleinID,
    chasingchickensID,
    hamstringID,
    frontsplitsID,
    neckreleaseID,
    pectoralstretchID
} = require("./exerciseids");

const exercises = [
    { _id: curlID, name:"curl", tags: ["arms", "equipped", "hypertrophy", "strength"], experience: "B", bodyarea: "upper" },
    { _id: squatID, name:"squat", tags: ["legs", "equipped", "hypertrophy", "strength", "conditioning", "compound"], experience: "A", bodyarea: "lower" },
    { _id: benchpressID, name:"bench press", tags: ["chest", "triceps", "equipped", "bodyweight", "hypertrophy", "strength"], experience: "B", bodyarea: "upper" },
    { _id: skippingID, name:"skipping", tags: ["legs", "equipped", "hypertrophy", "bodyweight", "cardio", "conditioning",], experience: "C", bodyarea: "lower" },
    { _id: jibbleinID, name:"jibble in", tags: ["head", "equipped", "endurance", "bodyweight", "cardio", "conditioning",], experience: "C", bodyarea: "lower" },
    { _id: chasingchickensID, name:"chasing chickens", tags: ["equipped", "endurance", "bodyweight", "cardio", "conditioning",], experience: "B", bodyarea: "whole" },
    { _id: hamstringID, name:"hamstring stretch", tags: ["legs", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "lower" },
    { _id: frontsplitsID, name:"front split", tags: ["legs", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "lower" },
    { _id: neckreleaseID, name:"neck release", tags: ["neck", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "upper" },
    { _id: pectoralstretchID, name:"pectoral stretch", tags: ["chest", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "upper" }
]


const seedExercises = async () => {
    await Exercise.deleteMany({});
    for (let u = 0; u < exercises.length; u++) {
        const exercise = new Exercise(exercises[u]);
        await exercise.save()
            // console.log("seeded exercise:" + exercise);
        };
    };



module.exports = seedExercises;