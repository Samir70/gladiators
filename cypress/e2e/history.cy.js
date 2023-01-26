describe('template spec', () => {
  it('renders the page and lets use see calender', () => {
    cy.task("connect");
    cy.task("resetUsers", "form SignUp e2e");
    cy.task("resetHistory", "Seedhistory e2e")
    cy.visit("http://localhost:8888/#/")
    cy.get('button').contains('Sign In').click()
    cy.get('input[type="email"]').type('wolf@email.com')
    cy.get('input[type="password"]').type('wolf')
    cy.get('button').contains('Sign In').click()
    cy.wait(1000);
    cy.visit("http://localhost:8888/#/history")
    cy.get("#workoutcalendar").should("exist")
  })
  it('adds an item to workout and adds to calendar', () => {
    cy.task("connect");
    cy.task("resetUsers", "form SignUp e2e");
    cy.task("resetExercises", "form SignUp e2e");
    cy.task("resetHistory", "Seedhistory e2e")
    cy.visit("http://localhost:8888/#/")
    cy.get('button').contains('Sign In').click()
    cy.get('input[type="email"]').type('wolf@email.com')
    cy.get('input[type="password"]').type('wolf')
    cy.get('button').contains('Sign In').click()
    cy.wait(1000);
    cy.visit("http://localhost:8888/#/exercisecatalogue")
    cy.get('button').contains('All').click()
    cy.get('button').contains('Add to Workout').click()
    cy.get("button").contains("Go to workout!").click()
    cy.get("button").contains("Workout Complete").click()
    cy.visit("http://localhost:8888/#/history")
    cy.get("#workoutcalendar").should("exist")
})
})