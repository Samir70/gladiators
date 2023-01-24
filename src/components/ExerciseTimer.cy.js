import ExerciseTimer from "./ExerciseTimer.vue";

describe("<ExerciseTimer />", () => {
  it("renders with needed elements and changes to rest after time elapsed", () => {
    const onUnitCompleteSpy = cy.spy().as("onUnitCompleteSpy");
    cy.clock();
    cy.mount(ExerciseTimer, {
      props: {
        exerciseTime: 30,
        restTime: 10,
        exerciseName: "Star Jumps",
        onUnitComplete: onUnitCompleteSpy,
      },
    });
    cy.get("#exercise-timer-bubble").get("#start-workout-button").click();
    cy.get("#exercise-timer-bubble")
      .get("#workout-action")
      .should("contain", "Do Star Jumps for 30 seconds");
    cy.tick(30000);
    cy.wait(0)
    cy.get("#exercise-timer-bubble")
      .get("#workout-rest")
      .should("contain", "Rest for 10 seconds");
    cy.get("@onUnitCompleteSpy").should("have.been.called");
  });
  it("renders with needed elements and changes to exercise after rest elapsed", () => {
    const onRestCompleteSpy = cy.spy().as("onRestCompleteSpy");
    cy.clock();
    cy.mount(ExerciseTimer, {
      props: {
        exerciseTime: 30,
        restTime: 10,
        exerciseName: "Star Jumps",
        onRestComplete: onRestCompleteSpy,
      },
    });
    cy.get("#exercise-timer-bubble").get("#start-workout-button").click();
    cy.tick(40000)
    cy.get("#exercise-timer-bubble")
      .get("#workout-action")
      .should("contain", "Do Star Jumps for 30 seconds");
    cy.get("@onRestCompleteSpy").should("have.been.called");
  });
});
