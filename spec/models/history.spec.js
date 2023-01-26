const mongoose = require("mongoose");
const {History} = require("../../models/history.cjs"); //import the model
const seedHistory = require("../../models/seedhistory.cjs"); //to add the seed data to the exercise model
const { wolfID, jetID, hunterID, shadowID } = require("../../models/userids");


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
                username: "Hunter",
                workout: [{date: "2023-01-24",
                exercises: ["curl","curl", "curl"]}]
        });
            await userWorkout.save()
            History.findOne({username: "Hunter"}), (err, userHistory) => {
            expect(err).toBeNull() //should find it
            expect(userHistory.workout.date).toEqual("2023-01-24");
            expect(exerciseDetails.workout.exercises).toContain("curl", "curl");
  }
});
  });
