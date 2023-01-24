describe('Signup survey component', () => {
  it('can select options and submit it before revealing another selection (experience level -> equipment status and then redirects on last confirmation', () => {
    cy.visit("http://localhost:8888/#/Survey");
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
    cy.url('should.incude', 'dashboard')
  })
})