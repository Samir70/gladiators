import ProfilePage from '../../../src/components/ProfilePage.vue'

describe('<ProfilePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ProfilePage)
    cy.get("#profile-title").contains("My Profile")
    cy.get("#profmenu").contains("Goals")
    cy.get("#profmenu").contains("History")
    cy.get("#profmenu").contains("Timesheet")
    cy.get("#profmenu").contains("Calculator")
    cy.get("#homebutton")

  })

  it('has clickable buttons', () => {
    cy.mount(ProfilePage)
    cy.get("#goals-button").click()
    cy.get("#history-button").click()
    cy.get("#timesheet-button").click()
    cy.get("#calculator-button").click()
    cy.get("#homebutton").click()
    
  })




})