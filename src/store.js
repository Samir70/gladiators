import { createStore } from "vuex";
export const store = createStore({
    state() {
        return {
            user: null,
            currentworkout: []
        }
    }, 
    mutations: {
        
        login(state, payload) {
            // console.log("store.login payload is", payload)
            state.user = payload
        },
        add_to_workout(state, payload) {
            // console.log("adding this: ", payload)
            state.currentworkout = state.currentworkout.concat(payload)
        },
    }
})