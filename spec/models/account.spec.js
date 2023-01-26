const mongoose = require("mongoose");
const seedAccounts = require("../../models/seedaccount");
require("../mongodb_helper");
const { Account } = require("../../models/account.cjs");

describe("Account model", () => {
  beforeEach((done) => {
    // mongoose.connection.collections.accounts.drop(() => {
    //   done();
    // });
    seedAccounts().then(() => {
      done();
    });
  });
  it("has the right number of seeded users", (done) => {
    const account = new Account({
      email: "someone@example.com",
      password: "password",
      username: "somebody",
    });

    Account.find((err, accounts) => {
      expect(err).toBeNull();
      expect(accounts.length).toEqual(4);
      done();
    });
  });

  it("can create an account object with the right properties", () => {
    const account = new Account({
      email: "lightning@msn.com",
      password: "lightning123",
      username: "Lightning",
      experience: "A",
      equipment: true,
    });
    expect(account.email).toEqual("lightning@msn.com");
    expect(account.password).toEqual("lightning123");
    expect(account.username).toEqual("Lightning");
    expect(account.experience).toEqual("A");
    expect(account.equipment).toEqual(true);
  });

  it("can save a new user", async () => {
    const account = new Account({
      email: "lightning@msn.com",
      password: "lightning123",
      username: "Lightning",
      experience: "A",
      equipment: true,
    });
    await account.save();
    Account.findOne({ username: "Lightning" }),
      (err, accountDetails) => {
        expect(err).toBeNull();
        expect(accountDetails.email).toEqual("lightning@msn.com");
        expect(accountDetails.password).toEqual("lightning123");
        expect(accountDetails.username).toEqual("Lightning");
        expect(accountDetails.experience).toEqual("A");
        expect(accountDetails.equipment).toEqual(true);
      };
  });
  xit("updates a password given the right credentials", async () => {
    const newAccount = new Account({
      username: "newAccount",
      password: "password",
      email: "email@newaccount.com",
    });
    await newAccount.save();
    // const body = JSON.stringify({ password: "password1", username: "newAccount", currentPass: "password", confirmPass: "password1" })
    // await updatePass(body).then(function (response) { return response.json() }).then(function (data) {expect(data.msg).toEqual("Password changed!")}
    // )
    let result = await fetch(`../../netlify/functions/updatePassword`, {
      method: "POST",
      body: JSON.stringify({
        password: "password1",
        username: "newAccount",
        currentPass: "password",
        confirmPass: "password1",
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        expect(data.msg).toEqual("Password changed!");
      });
  });
});
