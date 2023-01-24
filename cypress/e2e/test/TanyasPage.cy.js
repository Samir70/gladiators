import TanyasPage from '../../../src/components/TanyasPage.vue'

describe('<TanyasPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TanyasPage)
    cy.get('#counterblock').should('have.text', 'Counter is 0')
    cy.get('#counterbutton').should('have.text', 'Increment counter').click()
    cy.get('#counterblock').should('have.text', 'Counter is 5')
  })
})