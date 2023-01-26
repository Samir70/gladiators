import ProfilePage from './ProfilePage.vue'

describe('<ProfilePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ProfilePage)
    // Shouldn't be present if no-one is logged in
    // cy.get("#profile-title").contains("My Profile")
    
    // Shouldn't be present if no-one is logged in
    // cy.get("#profmenu").get("#infomenu")
    // cy.get("#profmenu").get("#experience")
    // cy.get("#profmenu").get("#equipment")

    cy.get("#homebutton")

  })

  it('has clickable buttons', () => {
    cy.mount(ProfilePage)
    cy.get("#milestone-button").click()
    cy.get("#history-button").click()
    cy.get("#homebutton").click()

  })




})