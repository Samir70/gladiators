import ProfilePage from './ProfilePage.vue'

describe('<ProfilePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ProfilePage)
  })
})