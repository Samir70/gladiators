describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:8888/#/Survey");
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
    cy.get('#experienceupdate').click()
    cy.get('button[id="equipmentupdate"]').should('exist') //upbdate button for equipment exists once the first button is clicked
    cy.get('input[id="selectedUnequipped"]').should('be.checked')
    cy.get('input[id="selectedEquipped"]' ).click().should('be.checked')
    cy.get('input[id="selectedUnequipped"]').should('not.be.checked')
    cy.get('button[id="equipmentupdate"]').click() //should redirect to dashboard.
    cy.url().should("include", "dashboard");
  })
})