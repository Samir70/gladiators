import SignUpPage from "./SignUpPage.vue";

describe("<SignUpPage />", () => {
  it("renders", () => {
    cy.mount(SignUpPage);
  });
  it("has a sign-up bubble, with fields for name, email, password", () => {
    cy.mount(SignUpPage);
    cy.get("#signup-bubble").get("h1").should("contain", "Sign Up");
    cy.get("#signup-bubble")
      .get("#name-field")
      .should("have.attr", "type", "text")
      .type("Maximus Decimus Meridius");
    cy.get("#signup-bubble")
      .get("#email-field")
      .should("have.attr", "type", "email")
      .type("winner@colosseum.com");
    cy.get("#signup-bubble")
      .get("#password-field")
      .should("have.attr", "type", "password")
      .type("MarcusAurelius");
    cy.get("#signup-bubble").get("#signup-button").click();
  });
});
