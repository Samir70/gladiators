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
    cy.get('button[id="equipmentupdate"]').should('exist') //upbdate button for equipment exists
    cy.get('input[id="selectedUnequipped"]').should('be.checked')
    cy.get('input[id="selectedEquipped"]' ).click().should('be.checked')
    cy.get('input[id="selectedUnequipped"]').should('not.be.checked')

  })
  it('allows you to select your experience level and click update', () => {
    cy.mount(UpdatePage)
    cy.get('button[id="experienceupdate"]').should('exist')
    cy.get('input[id="selectedBeginner"]').should('be.checked')
    cy.get('input[id="selectedIntermediate"]').should('not.be.checked')
    cy.get('input[id="selectedAdvanced"]').should('not.be.checked')
    cy.get('input[id="selectedIntermediate"]').click()
    cy.get('input[id="selectedBeginner"]').should('not.be.checked')
    cy.get('input[id="selectedIntermediate"]').should('be.checked')
    cy.get('input[id="selectedAdvanced"]').should('not.be.checked')
    cy.get('input[id="selectedAdvanced"]').click()
    cy.get('input[id="selectedBeginner"]').should('not.be.checked')
    cy.get('input[id="selectedIntermediate"]').should('not.be.checked')
    cy.get('input[id="selectedAdvanced"]').should('be.checked')

  })
})