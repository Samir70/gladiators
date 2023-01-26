import LandingPage from './LandingPage.vue'

describe('<LandingPage />', () => {
  it('renders', () => {
    cy.mount(LandingPage)
  })
  it('has a welcome bubble', () => {
    cy.mount(LandingPage)
    cy.get("#welcome-bubble").get("h1").should("have.id", "landingpage-welcome").should("contain", "Welcome To Gladimakers")
    cy.get("#welcome-bubble").get("img").should("have.attr", "src", "/spartan-helmet.png")
    cy.get("#welcome-bubble").get("#welcome-blurb")
  })
  it('has a buttons bubble', () => {
    cy.mount(LandingPage)
    cy.get("#buttons-bubble").find("button").should("have.length", 2)
    cy.get("#buttons-bubble").find("button").eq(0).should("contain", "Sign In").click()
    cy.get("#buttons-bubble").find("button").eq(1).should("contain", "Sign Up").click()
  })
})