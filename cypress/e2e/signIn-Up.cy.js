describe("template spec", () => {
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
});
