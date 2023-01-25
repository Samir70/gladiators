const { ConstantTypes } = require("@vue/compiler-core")

describe('template spec', () => {
  // before(() => {
  //   Cypress.env('password', 'password') //for password validation
  // })
  it('renders the page', () => {
    cy.visit("http://localhost:8888/#/UpdateDetails")
    cy.get("#homebutton").contains("Home")
    cy.get("#pagecontainer")
    cy.get("#homebanner")
    cy.get("#updatepage-title").contains("Your details")
  })
  it('has a change password container that has an input', () => {
    cy.visit("http://localhost:8888/#/UpdateDetails")
    cy.get("#pagecontainer")
    cy.get("#mainbody")
    cy.get("#passwordchangecontainer").find("input")
    cy.get("#current-password").should("have.attr", "type", "password")
    cy.get("#new-password").should("have.attr", "type", "password")
    cy.get("#confirm-password").should("have.attr", "type", "password")
    cy.get('input[type="submit"]').should('exist')
  })
  it('gives you messages for an incorrect password change that reflect the current state', () => {
    cy.visit("http://localhost:8888/#/")
    cy.get('button').contains('Sign In').click()
    cy.get('input[type="email"]').type('wolf@email.com')
    cy.get('input[type="password"]').type('wolf')
    cy.get('button').contains('Sign In').click()
    cy.visit("http://localhost:8888/#/UpdateDetails")
    cy.get('#passwordSubmitButton').should('be.disabled')
    cy.get('input[id="current-password"]').as('currentpass').click()
    cy.get('@currentpass').type('hello').should('have.value','hello')
    cy.get('#passwordSubmitButton').should('be.disabled')
    cy.get('input[id="new-password"]').type('world').should('have.value','world')
    cy.get('#passwordSubmitButton').should('be.disabled')
    cy.get('input[id="confirm-password"]').type('itsmemario').should('have.value', 'itsmemario')
    cy.get('#passwordSubmitButton').click()
    cy.get('#updateMessageContainer').should('contain', 'Incorrect password')

  })
  it('allows you to select equipment yes or no', () => {
    cy.visit("http://localhost:8888/#/")
    cy.get('button').contains('Sign In').click()
    cy.get('input[type="email"]').type('wolf@email.com')
    cy.get('input[type="password"]').type('wolf')
    cy.get('button').contains('Sign In').click()
    cy.visit("http://localhost:8888/#/UpdateDetails")
    cy.get("#equipmentSelectionComments").should('contain', 'Select an option to update your equipment preference.')
    cy.get('button[id="equipmentUpdateButton"]').should('exist') //upbdate button for equipment exists
    cy.get('button[id="equipmentUpdateButton"]').should('be.disabled') //upbdate button disabled if no selection made
    cy.get('input[id="notequipped"]').click()
    cy.get("#equipmentSelectionComments").should('contain','You do not have access to equipment/facilities.')
    cy.get('input[id="notequipped"]').should('be.checked')
    cy.get('button[id="equipmentUpdateButton"]').should('be.enabled') //upbdate button disabled if no selection made
    cy.get('button[id="equipmentUpdateButton"]').click() //clickable
    cy.get('input[id="equipped"]').click()
    cy.get('input[id="equipped"]').should('be.checked')
    cy.get("#equipmentSelectionComments").should('contain', 'You do have access to equipment/facilities.')
    cy.get('button[id="equipmentUpdateButton"]').click() //clickable
  })
  it('allows you to select your experience level and click update, needs to be signed in', () => {
    cy.visit("http://localhost:8888/#/")
    cy.get('button').contains('Sign In').click()
    cy.get('input[type="email"]').type('wolf@email.com')
    cy.get('input[type="password"]').type('wolf')
    cy.get('button').contains('Sign In').click()
    cy.visit("http://localhost:8888/#/UpdateDetails")
    cy.get("#experienceSelectionComments").should('contain', 'Select an option to update your experience level.')
    cy.get('button[id="experienceUpdateButton"]').should('exist') //upbdate button for equipment exists
    cy.get('button[id="experienceUpdateButton"]').should('be.disabled') //upbdate button disabled if no selection made
    cy.get('input[id="beginner"]').click()
    cy.get("#experienceSelectionComments").should('contain','You have just started on your journey to becoming a champion.')
    cy.get('input[id="beginner"]').should('be.checked')
    cy.get('button[id="experienceUpdateButton"]').should('be.enabled') //upbdate button disabled if no selection made
    cy.get('button[id="experienceUpdateButton"]').click() //clickable
    
    cy.get('input[id="intermediate"]').click()
    cy.get("#experienceSelectionComments").should('contain','You are a challenger and know most movements. ')
    cy.get('input[id="intermediate"]').should('be.checked')
    cy.get('button[id="experienceUpdateButton"]').click() //clickable
    
    cy.get('input[id="advanced"]').click()
    cy.get("#experienceSelectionComments").should('contain','You are a champion and can handle advanced movements.')
    cy.get('input[id="advanced"]').should('be.checked')
    cy.get('button[id="experienceUpdateButton"]').click() //clickable
  })
  xit('tests for inconsistent new passwords, though current password is correct', () => {

  })
  xit('gives a message that results for a successful password change', () => {})
})