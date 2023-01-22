import SignUpPage from "./SignUpPage.vue";

describe("<SignUpPage />", () => {
  it("renders", () => {
    cy.mount(SignUpPage);
  });
  it("has a sign-up bubble, with fields for name, email, password", () => {
    const newUser = {
      username: "Maximus Decimus Meridius",
      email: "winner@colosseum.com",
      password: "MarcusAurelius",
    };
    const serverResponse = {
      _id: "63ca4eb9ac9c77ed6c41c1ab",
      email: "winner@colosseum.com",
      username: "Maximus Decimus Meridius",
      password: "MarcusAurelius",
    };
    cy.mount(SignUpPage);
    cy.intercept("/.netlify/functions/addUser*", async (req) => {
      req.reply(serverResponse);
    }).as("fetch");
    cy.get("#signup-bubble").get("h1").should("contain", "Sign Up");
    cy.get("#signup-bubble")
      .get("#name-field")
      .should("have.attr", "type", "text")
      .type(newUser.username);
    cy.get("#signup-bubble")
      .get("#email-field")
      .should("have.attr", "type", "email")
      .type(newUser.email);
    cy.get("#signup-bubble")
      .get("#password-field")
      .should("have.attr", "type", "password")
      .type(newUser.password);
    cy.get("#signup-bubble").get("#signup-button").click();
    cy.get("#home-button").click();
    // cy.url().should("include", "dashboard")
  });
  it("Shows error for username in use", () => {
    const newUser = {
      username: "Maximus Decimus Meridius",
      email: "winner@colosseum.com",
      password: "MarcusAurelius",
    };
    const serverResponse = {
      signUpFailed: true,
      msg: "that username is in use",
    };
    cy.mount(SignUpPage);
    cy.intercept("/.netlify/functions/addUser*", async (req) => {
      req.reply(serverResponse);
    }).as("fetch");
    cy.get("#signup-bubble").get("h1").should("contain", "Sign Up");
    cy.get("#signup-bubble")
      .get("#name-field")
      .should("have.attr", "type", "text")
      .type(newUser.username);
    cy.get("#signup-bubble")
      .get("#email-field")
      .should("have.attr", "type", "email")
      .type(newUser.email);
    cy.get("#signup-bubble")
      .get("#password-field")
      .should("have.attr", "type", "password")
      .type(newUser.password);
    cy.get("#signup-bubble").get("#signup-button").click();
    cy.get("#home-button").click();
    cy.get("#signup-failed-error").should(
      "contain",
      "Unable to sign up because: that username is in use"
    );
  });
  it("Shows error for email in use", () => {
    const newUser = {
      username: "Maximus Decimus Meridius",
      email: "winner@colosseum.com",
      password: "MarcusAurelius",
    };
    const serverResponse = {
      signUpFailed: true,
      msg: "that email is in use",
    };
    cy.mount(SignUpPage);
    cy.intercept("/.netlify/functions/addUser*", async (req) => {
      req.reply(serverResponse);
    }).as("fetch");
    cy.get("#signup-bubble").get("h1").should("contain", "Sign Up");
    cy.get("#signup-bubble")
      .get("#name-field")
      .should("have.attr", "type", "text")
      .type(newUser.username);
    cy.get("#signup-bubble")
      .get("#email-field")
      .should("have.attr", "type", "email")
      .type(newUser.email);
    cy.get("#signup-bubble")
      .get("#password-field")
      .should("have.attr", "type", "password")
      .type(newUser.password);
    cy.get("#signup-bubble").get("#signup-button").click();
    cy.get("#home-button").click();
    cy.get("#signup-failed-error").should(
      "contain",
      "Unable to sign up because: that email is in use"
    );
  });
});
