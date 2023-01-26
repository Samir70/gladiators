const Exercise = require('./exercise.cjs')
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
} = require("./exerciseids.cjs");

const exercises = [
    { _id: curlID, name:"curl", tags: ["arms", "equipped", "hypertrophy", "strength"], experience: "B", bodyarea: "upper", description: "Upper body, muscle worked: biceps. Feet hip width apart, neutral spine, elbows locked into side of body, hinge at the elbow" },
    { _id: squatID, name:"squat", tags: ["legs", "equipped", "hypertrophy", "strength", "conditioning", "compound"], experience: "A", bodyarea: "lower", description: "Lower body. Muscles worked: Quadriceps(front upper leg), Hamstrings (back upper leg), Glutes (bum), Gastrocnemius(calves). Feet slightly wider than hip width, engage core, drive through heels on way up." },
    { _id: benchpressID, name:"bench press", tags: ["chest", "triceps", "equipped", "bodyweight", "hypertrophy", "strength"], experience: "B", bodyarea: "upper", description: "Upper body, muscles worked: pectorals, triceps (secondary). Lie flat on a surface, heels flat on the floor, shoulder blades pulled down and together, elbows at 90 degrees and push forwards, keep elbows soft throughout, never fully lock." },
    { _id: lungeID, name:"lunge", tags: ["legs", "hypertrophy", "bodyweight", "hypertrophy", "conditioning", "strength"], experience: "C", bodyarea: "lower", description: "Lower body. Muscles worked: Quadriceps(front upper leg), Hamstrings (back upper leg), Glutes (bum), Gastrocnemius(calves). Take a step and a half forward with one leg, front heel remains on the ground throughout, keep core engaged and a neutral spine, lower body until both knees are at 90 degrees making sure the back knee doesn’t touch the floor, drive through the front leg on the way up." },
    { _id: skippingID, name:"skipping", tags: ["legs", "equipped", "hypertrophy", "bodyweight", "cardio", "conditioning",], experience: "C", bodyarea: "lower", description: "Whole body. Jump over a rope one foot at a time." },
    { _id: jibbleinID, name:"jibble in", tags: ["head", "equipped", "endurance", "bodyweight", "cardio", "conditioning",], experience: "C", bodyarea: "lower", description: "Whole body. Required: Opposable thumbs, consciousness" },
    { _id: chasingchickensID, name:"chasing chickens", tags: ["equipped", "endurance", "bodyweight", "cardio", "conditioning",], experience: "B", bodyarea: "whole", description: "Whole body. Fartlek Training - interval training with constant varying intensities and speed." },
    { _id: hamstringID, name:"hamstring stretch", tags: ["legs", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "lower", description: "Lower body, Muscle: Hamstring (back upper leg). Lie flat on a surface, knees bent, raise one leg up to your chest and hold it there with your hands, straighten your leg as much as you can and hole for 10-30 seconds." },
    { _id: frontsplitsID, name:"front split", tags: ["legs", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "lower", description: "Lower body. Muscles: Hamstring (back upper leg), Quadricep (front upper leg), Glutes (bum), Hip flexors. Pelvis and torso square and facing forwards, back legs knee flat on ground and not twisting. Alternative stretch - Lunge. Pelvis and torso square and facing forwards. Front leg bent at knee, knee and feet pointing forwards. Back leg stretched out straight behind you." },
    { _id: neckreleaseID, name:"neck release", tags: ["neck", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "upper", description: "Upper body. Muscles: Sternocleidomastoid (side of neck), Splenius capitis and Splenius cervicis (back of neck), Trapezius (back of neck down to shoulder blades). Sideways - Start with a natural spine, tilt head to one side and use your hand to gently increase stretch. Forwards - Start with a neutral spine, rest head forwards to chest and use interlaced hands to gently increase stretch. Hold for 10-30 seconds." },
    { _id: pectoralstretchID, name:"pectoral stretch", tags: ["chest", "endurance", "bodyweight", "flex", "conditioning",], experience: "C", bodyarea: "upper", description: "Upper body. Muscles: Pectoralis (chest). Start with a neutral spine, hold arms up, elbows at 90 degrees, palms forward, slowly pull arms back and open chest to stretch your pecs.  Hold for 10-30 seconds." }
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