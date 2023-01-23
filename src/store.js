import { createStore } from "vuex";
export const store = createStore({
  state() {
    return {
      count: 0,
      user: { username: "Steve" },
      currentworkout: [
        {
          _id: curlID,
          name: "curl",
          tags: ["arms", "equipped", "hypertrophy", "strength"],
          experience: "B",
          bodyarea: "upper",
        },
        {
          _id: squatID,
          name: "squat",
          tags: ["legs", "equipped"],
          experience: "A",
          bodyarea: "lower",
        },
      ],
    };
  },
  mutations: {
    increment(state, payload) {
      console.log("store.increment payload is", payload);
      state.count += payload;
    },
    login(state, payload) {
      console.log("store.login payload is", payload);
      state.user = payload;
    },
  },
});
