import { createStore } from "vuex";
export const store = createStore({
    state() {
        return {
            count: 0, 
            user: {username:"Steve", password:"pass"},
        }
    }, 
    mutations: {
        increment(state, payload) {
            console.log("store.increment payload is", payload)
            state.count += payload
        },
        login(state, payload) {
            console.log("store.login payload is", payload)
            state.user = payload
        }
    }
})