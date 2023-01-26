import ShowExercise from "./ShowExercise.vue";

describe("<ShowExercise />", () => {
  it("renders", () => {
    cy.mount(ShowExercise, {
      props: {
        exercise: {
          _id: "curlID",
          name: "curl",
          tags: ["arms", "equipped", "hypertrophy", "strength"],
          experience: "B",
          bodyarea: "upper",
        },
      },
    });
    cy.get("#curlID")
    cy.get("#curlID-title")
    cy.get(".exercise-buttons").get("button").eq(0).should("contain", "Remove").click()
  });
});
