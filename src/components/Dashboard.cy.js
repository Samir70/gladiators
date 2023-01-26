import Dashboard from './Dashboard.vue'

describe('<Dashboard />', () => {
  it('renders', () => {
    cy.mount(Dashboard)
  })
  it('has glass bubbles', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Dashboard)
    cy.get('#dash-nav-bubble')
    cy.get('#utilities-bubble')
    cy.get('#current-workout-bubble')
  })
  it('nav bubble', () => {
    cy.mount(Dashboard)
    cy.get("#dash-nav-bubble").get("img").should("have.attr", "src", "/spartan-helmet.png")
    cy.get("#dash-nav-bubble").get("p").should("contain", "Profile", "Spotify", "Weather", "date/time")
    cy.get("#dash-nav-bubble").find("button").eq(0).should("contain", "Profile")
    cy.get("#dash-nav-bubble").find("button").eq(1).should("contain", "Spotify")
  })

  it('utilities bubble', () => {
    cy.mount(Dashboard)
    cy.get("#utilities-bubble").get("p").should("contain", "Log Out", "User Guide", "Facilities Finder", "Leaderboard", "Lifting Calculator", "Stop Watch")
    cy.get("#utilities-bubble").find("button").eq(0).should("contain", "Log Out")
    cy.get("#utilities-bubble").find("button").eq(1).should("contain", "User Guide")
  })
})