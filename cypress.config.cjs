const { defineConfig } = require("cypress");
const seedAccounts = require("./models/seedaccount.cjs");
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
        connect() {
          mongoose.connect("mongodb://0.0.0.0/gladiators", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          return null
        },
      });
    },
  },
});
