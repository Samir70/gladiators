const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0/acebook_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Exercise = require('./exercise')
const {
    curlID,
    squatID,
    benchpressID,
    lungeID,
} = require("./exerciseids");


const exercises = [
    { _id: curlID, name:"curl", tags: ["arms", "equipped", "hypertrophy", "strength"], experience: "B", bodyarea: "upper" },
    { _id: squatID, name:"squat", tags: ["legs", "equipped", "hypertrophy", "strength", "conditioning", "compound"], experience: "B", bodyarea: "lower" },
    { _id: benchpressID, name:"bench press", tags: ["chest", "triceps", "equipped", "bodyweight", "hypertrophy", "strength"], experience: "B", bodyarea: "upper" },
    { _id: lungeID, name:"lunge", tags: ["legs", "equipped", "hypertrophy", "bodyweight", "strength", "conditioning",], experience: "B", bodyarea: "lower" }
]


const seedExercises = async () => {
    await Exercise.deleteMany({});
    for (let u = 0; u < exercises.length; u++) {
        const exercise = new Exercise();
        exercise._id = exercises[u]._id;
        exercise.username = exercises[u].username;
        exercise.email = exercises[u].email;
        //exercise.profile_pic = exercises[u].profile_pic;
        exercise.password = exercises[u].password;
        exercise.gladiatorScore = exercises[u].gladiatorScore;
        exercise.experience = exercises[u].experience;
        exercise.equipment = exercises[u].equipment;
        //exercise.setPassword(exercises[u].password);
        exercise.save((err) => {
            if (err) {
                throw err;
            }
            // console.log("seeded exercise:" + exercise);
        });
    }
};

seedExercises();

module.exports = seedExercises;