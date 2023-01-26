const { defineConfig } = require("cypress");
const seedAccounts = require("./models/seedaccount.cjs");
const seedExercises = require("./models/seedexercise.cjs");
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
        connect() {
          mongoose.connect(process.env.MONGODB_URI + "/" + process.env.MONGODB_DATABASES, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          return null
        },
      });
    },
  },
});
