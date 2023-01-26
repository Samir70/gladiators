import SignInPage from "./SignInPage.vue";

describe("<SignInPage />", () => {
  it("renders", () => {
    cy.mount(SignInPage);
  });
  it("has a sign-in bubble, with email and password fields", () => {
    const user = {
      username: "Maximus Decimus Meridius",
      email: "winner@colosseum.com",
      password: "MarcusAurelius",
    };
    cy.mount(SignInPage);
    cy.get("#signin-bubble").get("h1").should("contain", "Sign In");
    cy.get("#signin-bubble")
      .get("#email-field")
      .should("have.attr", "type", "email")
      .type(user.email);
    cy.get("#signin-bubble")
      .get("#password-field")
      .should("have.attr", "type", "password")
      .type(user.password);
    cy.get("#home-button").click();
    cy.get("#signup-button").click();
  });
});
