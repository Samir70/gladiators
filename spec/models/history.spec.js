const mongoose = require("mongoose");
const {History} = require("../../models/history"); //import the model
const seedHistory = require("../../models/seedhistory"); //to add the seed data to the exercise model
const { wolfID, jetID, hunterID, shadowID } = require("../../models/userids");
const {
    curlID,
    squatID,
    benchpressID,
    lungeID,
} = require("../../models/exerciseids");


require("../mongodb_helper");

describe("History model", () => {
  beforeEach((done) => {
    seedHistory().then(() => {
      done()
    })

  });
  it("has the right number of seeded users", (done) => {
      History.find((err, userHistory) => {
          expect(err).toBeNull();
          expect(userHistory.length).toEqual(2);
          done()
        })
    });
        it("can create history for an account", async () => {
            const userWorkout = new History({
                date: "2023-01-24",
                user: hunterID,
                exercises: [curlID, squatID, benchpressID, lungeID]
            });
            await userWorkout.save()
            History.findOne({user: hunterID}), (err, userHistory) => {
            expect(err).toBeNull() //should find it
            expect(userHistory.workout.date).toEqual("2023-01-24");
            expect(exerciseDetails.workout.exercises).toContain(curlID, squatID);
  }
});
  });
