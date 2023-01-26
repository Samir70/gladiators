import ExerciseCatalogue from './ExerciseCatalogue.vue'

describe('<ExerciseCatalogue />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ExerciseCatalogue)
    cy.get('#header').should('have.text', 'All Exercises Catalogue')
  })
})