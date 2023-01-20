import ProfilePage from './ProfilePage.vue'

describe('<ProfilePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ProfilePage)
    cy.get("#profile-title").contains("My Profile")

    cy.get("#profmenu").contains("History")
    cy.get("#profmenu").contains("Milestone")

    cy.get("#homebutton")

  })

  it('has clickable buttons', () => {
    cy.mount(ProfilePage)
    cy.get("#milestone-button").click()
    cy.get("#history-button").click()
    cy.get("#homebutton").click()

  })




})