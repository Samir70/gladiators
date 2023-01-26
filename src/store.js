import { createStore } from "vuex";
export const store = createStore({
  state() {
    return {
      user: {username:"Wolf"},
      currentworkout: ['punch walls', 'have adventures'],
    };
  },
  mutations: {
    login(state, payload) {
      // console.log("store.login payload is", payload)
      state.user = payload;
    },
    logout(state, payload) {
      state.user = null;
      state.currentworkout = []
    },
    add_to_workout(state, payload) {
      // console.log("adding this: ", payload)
      state.currentworkout = state.currentworkout.concat(payload);
    },
    removeFromWorkout(state, payload) {
      console.log("removing exercise from workout:", payload);
      state.currentworkout = [...state.currentworkout].filter(
        (ex) => ex._id !== payload
      );
    },
    clearAll(state) {
      state.currentworkout = []
    }
  },
});
