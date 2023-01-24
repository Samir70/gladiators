import ExerciseTimer from "./ExerciseTimer.vue";

describe("<ExerciseTimer />", () => {
  it("renders with needed elements", () => {
    const onUnitCompleteSpy = cy.spy().as("onUnitCompleteSpy")
    cy.clock();
    cy.mount(ExerciseTimer, {
      props: { exerciseTime: 5, restTime: 10, exerciseName: "Star Jumps", onUnitComplete: onUnitCompleteSpy },
    });
    cy.get("#exercise-timer-bubble").get("#start-workout-button").click();
    cy.get("#exercise-timer-bubble")
      .get("#workout-action")
      .should("contain", "Do Star Jumps for 5 seconds");
    cy.tick(5000);
    cy.get("#exercise-timer-bubble")
      .get("#workout-action")
      .should("contain", "Do Star Jumps for 0 seconds");
      cy.get("@onUnitCompleteSpy").should("have.been.called")
  });
});
