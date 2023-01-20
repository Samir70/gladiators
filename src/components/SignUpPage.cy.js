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
    cy.url().should("include", "dashboard")
  });
});
