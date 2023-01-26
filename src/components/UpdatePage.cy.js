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
  it('checks that the equipment selection renders properly', () => {
    cy.mount(UpdatePage)
    cy.get("#equipmentSelectionComments").should('contain', 'Select an option to update your equipment preference.')
    cy.get('button[id="equipmentUpdateButton"]').should('exist') //upbdate button for equipment exists
    cy.get('button[id="equipmentUpdateButton"]').should('be.disabled') //upbdate button disabled if no selection made
    cy.get('input[id="notequipped"]').click()
    cy.get("#equipmentSelectionComments").should('contain','You do not have access to equipment/facilities.')
    cy.get('input[id="notequipped"]').should('be.checked')
    cy.get('button[id="equipmentUpdateButton"]').should('be.enabled') //upbdate button disabled if no selection made
    cy.get('input[id="equipped"]').click()
    cy.get('input[id="equipped"]').should('be.checked')
    cy.get("#equipmentSelectionComments").should('contain', 'You do have access to equipment/facilities.')
  })
  it('checks that the update settings renders properly', () => {
    cy.mount(UpdatePage)

    cy.get("#experienceSelectionComments").should('contain', 'Select an option to update your experience level.')
    cy.get('button[id="experienceUpdateButton"]').should('exist') //upbdate button for equipment exists
    cy.get('button[id="experienceUpdateButton"]').should('be.disabled') //upbdate button disabled if no selection made
    cy.get('input[id="beginner"]').click()
    cy.get("#experienceSelectionComments").should('contain','You have just started on your journey to becoming a champion.')
    cy.get('input[id="beginner"]').should('be.checked')
    cy.get('button[id="experienceUpdateButton"]').should('be.enabled') //upbdate button disabled if no selection made
    
    cy.get('input[id="intermediate"]').click()
    cy.get("#experienceSelectionComments").should('contain','You are a challenger and know most movements. ')
    cy.get('input[id="intermediate"]').should('be.checked')
    
    cy.get('input[id="advanced"]').click()
    cy.get("#experienceSelectionComments").should('contain','You are a champion and can handle advanced movements.')
    cy.get('input[id="advanced"]').should('be.checked')
  })
})