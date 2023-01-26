describe("template spec", () => {
  before(() => {
    cy.task("connect");
    cy.task("resetUsers", "form SignUp e2e");
  });
  it("Can get to the signIn page and sign in", () => {
    const user = {
      username: "Wolf",
      email: "wolf@email.com",
      password: "wolf",
    };
    cy.visit("http://localhost:8888/#/");
    cy.get("#buttons-bubble")
      .find("button")
      .eq(0)
      .should("contain", "Sign In")
      .click();
    cy.get("#signin-bubble")
      .get("#email-field")
      .should("have.attr", "type", "email")
      .type(user.email);
    cy.get("#signin-bubble")
      .get("#password-field")
      .should("have.attr", "type", "password")
      .type(user.password);
    cy.get("#signin-bubble").get("#signin-button").click();
    cy.url().should("include", "dashboard");
    // cy.get("#buttons-bubble").find("button").eq(1).should("contain", "Sign Up").click()
  });
  it("Can sign up with a new email", () => {
    const user = {
      username: "Maximus Decimus Meridius",
      email: "winner@colosseum.com",
      password: "MarcusAurelius",
    };
    cy.visit("http://localhost:8888/#/");
    cy.get("#buttons-bubble")
      .find("button")
      .eq(1)
      .should("contain", "Sign Up")
      .click();
    cy.get("#signup-bubble")
      .get("#name-field")
      .should("have.attr", "type", "text")
      .type(user.username);
    cy.get("#signup-bubble")
      .get("#email-field")
      .should("have.attr", "type", "email")
      .type(user.email);
    cy.get("#signup-bubble")
      .get("#password-field")
      .should("have.attr", "type", "password")
      .type(user.password);
    cy.get("#signup-bubble").get("#signup-button").click();
    cy.url().should("include", "survey");
  });
});
