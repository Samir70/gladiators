import LandingPage from './LandingPage.vue'

describe('<LandingPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(LandingPage)
    cy.get("h1").should("have.id", "landingpage-title")
    cy.get("#buttons-bubble").find("button").should("have.length", 2)
    cy.get("#buttons-bubble").find("button").eq(0).should("contain", "Sign In").click()
    cy.get("#buttons-bubble").find("button").eq(1).should("contain", "Sign Up").click()
  })
})