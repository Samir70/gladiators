const mongoose = require("mongoose");
const seedExercises = require("../../models/seedexercise"); //to add the seed data to the exercise model
const Exercise = require("../../models/exercise"); //import the model
require("../mongodb_helper");

describe("Exercise model", () => {
  beforeEach((done) => {
    seedExercises().then(() => {
      done()
    })

  });
  it("has the right number of seeded exercises", (done) => {
      Exercise.find((err, exercises) => {
          expect(err).toBeNull();
          // console.log("exercises:", exercises);
          expect(exercises.length).toEqual(11);
          expect(exercises[0].tags).toContain("arms")
          expect(exercises[0].experience).toEqual("B")
          done()
        })
    });
        it("can create an exercise object with the right properties and adds to database", async () => {
            const exercise = new Exercise({
                name: "Star jump",
                tags: ["conditioning", "cardio"],
                experience: "B",
                bodyarea: "wholebody",
                description: "Whole body. Jump and expand legs out to the side and arms out and upwards."
            });
            await exercise.save()
            Exercise.findOne({name: "Star jump"}), (err, exerciseDetails) => {
            expect(err).toBeNull() //should find it
            expect(exerciseDetails.name).toEqual("Star jump");
            expect(exerciseDetails.tags).toContain("cardio");
            expect(exerciseDetails.experience).toEqual("B");
            expect(exerciseDetails.bodyarea).toEqual("wholebody");
  }});
  });
