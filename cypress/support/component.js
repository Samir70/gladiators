// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// ******** original
// import { mount } from 'cypress/vue'

// Cypress.Commands.add('mount', mount)

// // Example use:
// // cy.mount(MyComponent)
// ******************* end of original

import { mount } from 'cypress/vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '../../src/routes'

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.plugins = options.global.plugins || []

  // create router if one is not provided
  if (!options.router) {
    options.router = createRouter({
      routes: routes,
      history: createMemoryHistory(),
    })
  }

  // Add router plugin
  options.global.plugins.push({
    install(app) {
      app.use(options.router)
    },
  })

  return mount(component, options)
})