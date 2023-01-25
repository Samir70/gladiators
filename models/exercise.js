const mongoose = require("mongoose")

const ExerciseSchema = new mongoose.Schema({
name: String,
tags: [String], //tags for type (conditioning/hypertrophy/strength/mobility), equipment, [a,b,c]
experience: String, //this will probably be advanced (A), intermediate (I) or beginner (B) -is a flag for workouts and should match only account experience
bodyarea: String, //part of the bubbleperson that will be worked -> consider compound movements and cardiovascular
description: String
})

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise;