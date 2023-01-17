const mongoose = require("mongoose");
const seedAccounts = require("../../models/seedaccount");
require("../mongodb_helper");
const Account = require("../../models/account");

describe("Account model", () => {
  beforeEach((done) => {
    // mongoose.connection.collections.accounts.drop(() => {
    //   done();
    // });
    seedAccounts().then(() => {
      console.log("from beforeEach")
      done()
    })
    // (()=>{
    //   console.log("from beforeEach")
    //   done()
    // })
  });
  it("has the right number of seeded users", (done) => {
    const account = new Account({
      email: "someone@example.com",
      password: "password",
      username: "somebody"
    });

    Account.find((err, accounts) => {
      expect(err).toBeNull();
      console.log("accounts:", accounts);
      expect(accounts.length).toEqual(4);
      done()
    })
  });

  it("has an email address", () => {
    const account = new Account({
      email: "someone@example.com",
      password: "password"
    });
    expect(account.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const account = new Account({
      email: "someone@example.com",
      password: "password",
    });
    expect(account.password).toEqual("password");
  });


});
