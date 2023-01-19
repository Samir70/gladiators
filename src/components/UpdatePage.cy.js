import UpdatePage from './UpdatePage.vue'

describe('<UpdatePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(UpdatePage)
    cy.get("#homebutton").contains("Home")
    cy.get("#pagecontainer")
    cy.get("#homebanner")
    cy.get("#updatepage-title").contains("Your details")
  })
  it('has a change password container that has an input', () => {
    cy.mount(UpdatePage)
    cy.get("#pagecontainer")
    cy.get("#mainbody")
    cy.get("#passwordchangecontainer").find("input")
    cy.get("#current-password").should("have.attr", "type", "password")
    cy.get("#new-password").should("have.attr", "type", "password")
    cy.get("#confirm-password").should("have.attr", "type", "password")
    cy.get('input[type="submit"]').should('exist')
  })
  it('allows you to select equipment yes or no', () => {
    cy.mount(UpdatePage)

    cy.get('button[id="equipmentupdate"]').should('exist')




  })
  xit('allows you to select your experience level and click update', () => {
    cy.mount(UpdatePage)
    
    cy.get('button[id="experienceupdate"]').should('exist')


  })
})