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

  it("can create an account object with the right properties", () => {
    const account = new Account({
      email: "lightning@msn.com",
      password: "lightning123",
      username: "Lightning",
      experience: "A",
      equipment: true
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
      equipment: true
    });
    await account.save()
    Account.findOne({username: "Lightning"}), (err, accountDetails) => {
    expect(err).toBeNull()
    expect(accountDetails.email).toEqual("lightning@msn.com");
    expect(accountDetails.password).toEqual("lightning123");
    expect(accountDetails.username).toEqual("Lightning");
    expect(accountDetails.experience).toEqual("A");
    expect(accountDetails.equipment).toEqual(true);
  }
  });
  });
