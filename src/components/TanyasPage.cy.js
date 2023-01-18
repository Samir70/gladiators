import TanyasPage from './TanyasPage.vue'

describe('<TanyasPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TanyasPage)
  })
})