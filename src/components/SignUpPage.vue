<script setup>
import GlassBubble from './GlassBubble.vue';
import { useRouter } from "vue-router";
import { store } from "../store"

import { ref } from "vue";

const router = useRouter()

const newUserName = ref("")
const newUserEmail = ref("")
const newUserPassword = ref("")

const signUp = async () => {
  let result = await fetch(`/.netlify/functions/addUser`, {
    method: "POST",
    body: JSON.stringify({ username: newUserName.value, email: newUserEmail.value, password: newUserPassword.value })
  }).then(response => response.json())
  console.log("From SignUp Page", result)
  store.commit("login", result)
  router.push("dashboard")
}
</script>

<template>
  <GlassBubble id="home-link">
   <button @click="$router.push('/')" id="home-button"> Home </button>

 </GlassBubble>
  <GlassBubble id="signup-bubble">
    <h1>Sign Up</h1>
    <input id="name-field" type="text" placeholder="Username" v-model="newUserName" required />
    <input id="email-field" type="email" placeholder="Email" v-model="newUserEmail" required />
    <input id="password-field" type="password" placeholder="Password" v-model="newUserPassword" required />
    <p></p>
    <button id="signup-button" v-on:click="signUp">Sign Up</button>
  </GlassBubble>
  
  

</template>

<style scoped>
input {
  width: 40vw;
}

#home-link {
  width: fit-content;
  padding: 10px;
}

#signup-bubble {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

button {
  width: fit-content;
}
</style>