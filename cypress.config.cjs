const { defineConfig } = require("cypress");
const seedAccounts = require("./models/seedaccount.cjs");
const seedExercises = require("./models/seedexercise.cjs");
const seedHistory = require("./models/seedhistory.cjs");
require("dotenv").config();
var mongoose = require("mongoose");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: "http://localhost:8888",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        resetUsers(testFile) {
          console.log("seeding accounts table via a task set in " + testFile);
          seedAccounts();
          return null;
        },
        resetExercises(testFile) {
          console.log("seeding exercises table via a task set in " + testFile);
          seedExercises();
          return null;
        },
        resetHistory(testFile) {
          console.log("seeding History table via a task set in " + testFile);
          seedHistory();
          return null;
        },
        connect() {
          // console.log("Trying to connect", process.env.MONGODB_URI + process.env.MONGODB_DATABASE)
          // "mongodb://0.0.0.0/gladiators"
          mongoose.connect(process.env.MONGODB_URI + process.env.MONGODB_DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          return null
        },
      });
    },
  },
});
