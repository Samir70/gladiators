const Exercise = require('./exercise')
const {
    curlID,
    squatID,
    benchpressID,
    lungeID,
} = require("./exerciseids");

const exercises = [
    { _id: curlID, name:"curl", tags: ["arms", "equipped", "hypertrophy", "strength"], experience: "B", bodyarea: "upper" },
    { _id: squatID, name:"squat", tags: ["legs", "equipped", "hypertrophy", "strength", "conditioning", "compound"], experience: "A", bodyarea: "lower" },
    { _id: benchpressID, name:"bench press", tags: ["chest", "triceps", "equipped", "bodyweight", "hypertrophy", "strength"], experience: "B", bodyarea: "upper" },
    { _id: lungeID, name:"lunge", tags: ["legs", "equipped", "hypertrophy", "bodyweight", "strength", "conditioning",], experience: "B", bodyarea: "lower" }
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